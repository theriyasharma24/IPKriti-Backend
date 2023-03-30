require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
var cors = require("cors");
const connectDB = require("./config/db");
connectDB();

app.use(express.json({ extended: false }));
app.use(cors());

app.use("/api/artworks", require("./routes/artworks"));
app.use("/api/artwork", require("./routes/artwork"));
app.use("/api/artist", require("./routes/artist"));
app.use("/api/reviews", require("./routes/reviews"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
