import "dotenv/config";
import cors from "cors";
import express from "express";
import passport from "passport";
import session from "express-session";
import cookieParser from "cookie-parser";
import passportStatragey from "./config/passport.js";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";

const app = express();
const defaultFrontendOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "https://find-image-4ceopwk19-asfjldsajf.vercel.app",
];
const allowedFrontendOrigins = (
  process.env.FRONTEND_ORIGINS || defaultFrontendOrigins.join(",")
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: allowedFrontendOrigins,
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  session({
    secret: "secret_key_change_in_production",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      secure: process.env.NODE_ENV === "production",
    },
  }),
);

passportStatragey(passport);
if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
}
app.use(passport.initialize());
app.use(passport.session());

app.get("/api/health", (req, res) => {
  res.status(201).json("api is working well..");
});

app.use("/api", authRoutes);

export default app;
