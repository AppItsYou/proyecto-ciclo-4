const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let portafolioSchema = new Schema(
  {
    name: {
      type: String,
    },
    lema: {
      type: String,
    },
    servicio: {
      type: String,
    },
    habilidad: {
      type: String,
    },
    logro: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
    estado:"String",

    usuario_id: String
  },{"versionKey":false},
  {
    collection: "portafolios",
  }
);

module.exports = mongoose.model("Portafolio", portafolioSchema);
