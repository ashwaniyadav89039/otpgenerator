const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./route/route");
const path = require("path");
const session = require("express-session");
const flash = require("express-flash");
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/view");
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
