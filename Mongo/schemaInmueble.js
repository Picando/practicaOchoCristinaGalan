const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inmuebleSchema = new Schema({
  piso: String,
  letra: String,
  extension: Number,
  habitaciones: String,
  alquilado: Boolean,
  nombrePropietario: String,
  mailContacto: String,
});

module.exports = mongoose.model("inmueble", inmuebleSchema);
