import app  from "./src/app.js";
import connectDB from "./src/config/db.js";

const startServer = async () => {
  await connectDB();
  const PORT = process.env.PORT || 5000;
  app.listen(PORT || 5000, () => {
    console.log(`server is running on http://localhost:${PORT}`);
  });
};

startServer();
