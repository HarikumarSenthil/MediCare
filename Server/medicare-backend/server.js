const express = require("express");
const app = express();

// Test route to check if server is running
app.get("/", (req, res) => {
  res.send("✅ Backend is working! Hello from Medicare Server 🚀");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is Running at port ${PORT}`);
});
