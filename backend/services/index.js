const jwt= require("jwt-simple");
const token = require("../services/token");

function createToken(usuario){
const payload = {
  sub:usuario._id,
  nombre:usuario.nombre,
  tipo_usuario:usuario.tipo_usuario
}
return jwt.encode(payload, token.clave)
}

module.exports ={createToken}