import LocalStrategy from "passport-local";
import User from "../model/user.model.js";
import bcrypt from "bcrypt";

function passportStatragey(passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, async function verify(
      email,
      password,
      cb,
    ) {
      try {
        const user = await User.findOne({ email: email.toLowerCase() }).select(
          "+password",
        );
        if (!user) {
          return cb(null, false, { message: "Email registered nahi hai." });
        }
        if(!user.password){
          return cb(null,false,
            {
              message:"this account does not have a password"
            }
          )
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return cb(null, false, { message: "galat password dala hai." });
        }

        return cb(null, user);
      } catch (err) {
        return cb(err);
      }
    }),
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser(async (id, cb) => {
    try {
      const user = await User.findById(id).select("-password");
      cb(null, user);
    } catch (err) {
      cb(err, null);
    }
  });
}

export default passportStatragey;
