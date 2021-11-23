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
    imgUrl: String,

    estado:"String",

    usuario_id: String
  },{"versionKey":false},
  {
    collection: "portafolios",
  }
);
portafolioSchema.methods.setImgUrl = function setImgUrl (filename) {
  const host='localhost';
  const port=3000;
  this.imgUrl = `${host}:${port}/public/${filename}`
}
module.exports = mongoose.model("Portafolio", portafolioSchema);
