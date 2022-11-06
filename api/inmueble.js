const express = require("express");
const router = express.Router();

//const {createInmueble} = require('../models/modelsInmueble');

const Inmueble = require("../mongo/schemaInmueble");

/* GET */
router.get("/", async (req, res) => {
  try {
    const result = await Inmueble.find();
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});

/* Posts */
router.post("/", async (req, res) => {
  const elementos = { ...req.body };
  if (
    elementos.piso === undefined ||
    elementos.letra === undefined ||
    elementos.extension === undefined ||
    elementos.habitaciones === undefined ||
    elementos.alquilado === undefined ||
    elementos.nombrePropietario === undefined ||
    elementos.mailContacto === undefined
  ) {
    res.json({ error: "No se mandaron los suficientes parametros" });
  } else {
    try {
      const result = await Inmueble.create(req.body);
      res.json(result);
    } catch (err) {
      res.json({ error: err.message });
    }
  }
});

/* PUT */
router.put("/:inmuebleId", async (req, res) => {
  const elementos = { ...req.body };
  if (
    elementos.piso === undefined ||
    elementos.letra === undefined ||
    elementos.extension === undefined ||
    elementos.habitaciones === undefined ||
    elementos.alquilado === undefined ||
    elementos.nombrePropietario === undefined ||
    elementos.mailContacto === undefined
  ) {
    res.json({ error: "No se mandaron los suficientes parametros" });
  } else {
    try {
      const result = await Inmueble.findByIdAndUpdate(
        req.params.inmuebleId,
        req.body,
        { new: true }
      );
      res.json(result);
    } catch (err) {
      res.json({ error: err.message });
    }
  }
});

/* Delete */
router.delete("/:inmuebleId", async (req, res) => {
  try {
    const result = await Inmueble.findByIdAndDelete(req.params.inmuebleId);
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});

module.exports = router;
