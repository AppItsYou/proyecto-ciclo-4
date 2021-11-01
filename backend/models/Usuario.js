const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    "nombre":String,
    "email": String,
    "password":String,
    "imagenPerfil":String,
    "tipo_usuario":String

},{"versionKey":false});

module.exports = mongoose.model("Usuario", usuarioSchema);