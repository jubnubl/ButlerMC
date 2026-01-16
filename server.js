import express from "express";
import './src/index.ts'; // change this to the path of your bot's main file

const app = express();

// Minimal endpoint for uptime monitoring
app.get("/", (req, res) => {
  res.send("ButlerMC is alive!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
