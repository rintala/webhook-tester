const PORT = 4000;

const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  console.log("triggered api root");
  res.status(200).send("Triggered the root of the API successfully.");
});
// Define the webhook endpoint
app.post("/webhook", (req, res) => {
  console.log("Received webhook data:", req.body);

  // Respond with a 200 status to acknowledge receipt
  res.status(200).send("Webhook received");
});
