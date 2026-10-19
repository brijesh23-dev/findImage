import bcrypt from "bcrypt";
import passport from "passport";
import User from "../model/user.model.js";

function publicUser(user) {
	return {
		id: user._id,
		name: user.name,
		email: user.email,
	};
}

export async function register(req, res, next) {
	try {
		const { name, email, password } = req.body;

		if (!name || !email || !password) {
			return res.status(400).json({
				message: "name, email and password are required.",
			});
		}

		const normalizedEmail = email.trim().toLowerCase();
		const existingUser = await User.findOne({ email: normalizedEmail });

		if (existingUser) {
			return res.status(409).json({ message: "User already exists." });
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = await User.create({
			name,
			email: normalizedEmail,
			password: hashedPassword,
		});

		req.login(newUser, (error) => {
			if (error) return next(error);

			return res.status(201).json({
				message: "User registered and logged in!",
				user: publicUser(newUser),
			});
		});
	} catch (error) {
		if (error.code === 11000) {
			return res.status(409).json({ message: "User already exists." });
		}
		return next(error);
	}
}

export function login(req, res, next) {
	passport.authenticate("local", (error, user, info) => {
		if (error) return next(error);
		if (!user) {
			return res.status(401).json({
				message: info?.message || "login failed",
			});
		}

		req.login(user, (loginError) => {
			if (loginError) return next(loginError);

			return res.status(200).json({
				message: "Successfully authenticated.",
				user: publicUser(user),
			});
		});
	})(req, res, next);
}

export function logout(req, res, next) {
	req.logout((logoutError) => {
		if (logoutError) return next(logoutError);

		req.session.destroy((sessionError) => {
			if (sessionError) return next(sessionError);

			res.clearCookie("connect.sid");
			return res.json({ message: "logged out successfully" });
		});
	});
}

export function getProfile(req, res) {
	if (!req.isAuthenticated()) {
		return res.status(401).json({ message: "pehle login karo!" });
	}

	return res.json({ message: "profile data", user: publicUser(req.user) });
}
