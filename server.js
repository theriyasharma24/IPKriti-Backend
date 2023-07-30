require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
var cors = require("cors");
const connectDB = require("./config/db");
const fs = require("fs");
const qr = require("qr-image");
connectDB();
const Artwork = require("./models/Artworks.js");
app.use(express.json({ extended: false }));
// app.use(cors());

app.use(
  cors({
    // origin:"http://localhost:3000",
    origin:"https://ipkriti.netlify.app",
  })
);
app.post("/qr-code", async (req, res) => {
  try {
    const { url } = req.body;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr.png"));
  } catch (err) {
    console.log(err);
  }
});
app.use('/api/cart', require('./routes/cart'));
//performing route operations
const routeOperation = async (req, res, next) => {
  let route = req.url.split("/")[2];
  let routename =
    route.charAt(0).toUpperCase() + route.substring(1).toLowerCase();

  try {
    if (req.method == "DELETE") {
      let data = await require(`./models/${routename}.js`).deleteOne(
        req.params
      );
      res.send(data);
    } else if (req.method == "GET") {
      let data = await require(`./models/${routename}.js`).find(req.params);
      res.send(data);
    } else if (req.method == "POST") {
      const New = require(`./models/${routename}.js`);
      const newdata = new New(req.body);
      const data = await newdata.save();
      res.send(data);
    } else if (req.method == "PUT") {
      let data = await require(`./models/${routename}.js`).updateOne(
        req.params,
        { $set: req.body }
      );
      res.send(data);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

app.use(routeOperation);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
