const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
console.log("hello");

// // MongoDB URI yahan paste karo
const mongoURI =
  "mongodb+srv://madhavkalra456:yi5AkGMUdSXcTU7Z@cluster0.atjkfwi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// MongoDB se connect kar rahe hain
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(" MongoDB connected"))
  .catch((err) => console.log(" MongoDB connection error:", err));

// Routes yahaan add karna (abhi dummy)
app.get("/", (req, res) => {
  res.send("Hello from Student Project!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
