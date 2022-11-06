const express = require("express");
const router = express.Router();

const indexInmueble = require("../api/inmueble"); //directorio de api

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Api" });
});

router.use("/inmueble", indexInmueble);

module.exports = router;
