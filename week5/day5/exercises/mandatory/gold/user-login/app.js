// app.js
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json()); 

const PORT = 5000;
const JWT_SECRET = "11111"; 

const users = [];
function isPasswordStrong(password) {
  return (
    typeof password === "string" &&
    password.length >= 8 &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /\d/.test(password)
  );
}

// Register
app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "❌ Username and password are required" });
  }

  if (!isPasswordStrong(password)) {
    return res.status(400).json({
      message:
        "❌ Password must be at least 8 characters long, include uppercase, lowercase, and a number.",
    });
  }

  if (users.find((u) => u.username === username)) {
    return res.status(400).json({ message: "❌ Username already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({
    username,
    password: hashedPassword,
    role: "user",
    failedLoginAttempts: 0,
    lockedUntil: null,
  });

  res.status(201).json({ message: "✅ User registered successfully" });
});


app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "❌ Username and password are required" });
  }

  const user = users.find((u) => u.username === username);
  if (!user) {
    return res.status(400).json({ message: "❌ Invalid credentials" });
  }
  if (user.lockedUntil && user.lockedUntil > Date.now()) {
    const waitTime = Math.ceil((user.lockedUntil - Date.now()) / 1000);
    return res.status(403).json({
      message: `❌ Account locked. Try again in ${waitTime} seconds.`,
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    user.failedLoginAttempts = (user.failedLoginAttempts || 0) + 1;

    if (user.failedLoginAttempts >= 3) {
      user.lockedUntil = Date.now() + 5 * 60 * 1000; 
      user.failedLoginAttempts = 0; 
      return res.status(403).json({
        message:
          "❌ Account locked for 5 minutes due to multiple failed login attempts.",
      });
    }

    return res.status(400).json({ message: "❌ Invalid credentials" });
  }

  user.failedLoginAttempts = 0;
  user.lockedUntil = null;

  const token = jwt.sign({ username, role: user.role }, JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ message: "✅ Login successful", token });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "❌ No token provided" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "❌ No token provided" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "❌ Invalid token" });
  }
}

function authorizeRoles(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "❌ Unauthorized" });
    }
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "❌ Access denied: insufficient permissions" });
    }
    next();
  };
}

app.get("/api/profile", authenticateToken, (req, res) => {
  res.json({ message: `👤 Welcome ${req.user.username}` });
});

app.get("/api/admin", authenticateToken, authorizeRoles("admin"), (req, res) => {
  res.json({ message: `Bienvenue Admin ${req.user.username}` });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
