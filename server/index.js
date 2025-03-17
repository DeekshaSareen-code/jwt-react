import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import "dotenv/config";
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json()); // ✅ Parses incoming JSON requests
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post("/api/auth", (req, res) => {
  const { username, password } = req.body;
  const jwtSecretKey = process.env.DIY_JWT_SECRET;

  if (password !== "pikachu") {
    return res.status(401).json({ message: "Invalid password" });
  }
  let data = {
    signInTime: Date.now(),
    username,
  };

  const token = jwt.sign(data, jwtSecretKey);
  res.status(200).json({ message: "success", token });
});

app.get("/api/safehouse", (req, res) => {
  const tokenHeaderKey = "jwt-token";
  const jwtSecretKey = process.env.DIY_JWT_SECRET;
  const token = req.headers[tokenHeaderKey];
  try {
    const verified = jwt.verify(token, jwtSecretKey);
    if (verified) {
      return res.status(200).json({
        safehouseKey: "under-the-doormat",
        username: verified.username,
        message: "success",
      });
    } else {
      // Access Denied
      return res.status(401).json({ message: "error" });
    }
  } catch (error) {
    // Access Denied
    return res.status(401).json({ message: error });
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie("jwt-token", {
    httpOnly: true,
    secure: false, // Change to `true` in production with HTTPS
    sameSite: "Lax",
  });
  res.json({ message: "Logged out successfully" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
