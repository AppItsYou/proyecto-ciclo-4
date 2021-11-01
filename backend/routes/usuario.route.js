const express = require("express");
const usuarioRoute = express.Router();
const service = require("../services/index.js");
const  tokenSecret =require("../services/token");
const  correo =require("../utilidades/mailer");
const jwt = require("jwt-simple");


// modelo usuario
let usuarioModel = require("../models/Usuario");

usuarioRoute.route("/").get((req, res) => {
  usuarioModel.find((error, data, next) => {
    if (error) {
      return next(error);
    } else {
      console.log(error);
      res.json(data);
    }
  });
});

usuarioRoute.route("/crear-usuario").post((req, res, next) => {
   usuarioModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      //console.log(data);
      
      res.json(data);
    
      
    }
  }); 
  
});

usuarioRoute.route("/getData").get((req, res, next)=>{
  
  if(req.headers.authorization==null){
    console.log('dentro de excepcion');
    return res.status(403).send({mensaje:"sin autorización"});
      }
      console.log('aqui vamos**:'+req.headers);
      const token =req.headers.authorization.split(' ')[1];
      const payload =jwt.decode(token, tokenSecret.clave);
      //req.usuario = payload;
      console.log(payload);
      res.json(payload);
});

usuarioRoute.route("/sesion-usuario").post((req, res, next) => {
var filtro ={email:req.body.email, password:req.body.password};

 usuarioModel.findOne(filtro,
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        console.log(data);
        if (data===null)
          res.status(200).send({data:data});
        else
        res.status(200).send({data:data,
          token:service.createToken(data) })
          //res.json(data);
        
      }
    }
  );
});
// enviar correo de consulta
usuarioRoute.route("/correo-consulta").post((req, res, next) => {
  var informacion ={
                    destinatario:"appitsyou@gmail.com",
                    subject:req.body.subject, 
                    text:req.body.text,
                    message:req.body.message};

  correo.sendMail(informacion)
  .then((result) => {console.log('Email Enviado...', result);
  res.send({mensaje:'Email enviado'})})
  .catch((error) => {console.log(error.message);
    res.send({mensaje:'Error, email no entregado'})}
    );
  });
  //recuperar contraseña
  usuarioRoute.route("/recuperar-clave").post((req, res, next) => {
    let filtro ={email:req.body.email};
    usuarioModel.findOne(filtro, 
      (error, data) => {
        if (error) {
          console.log(error);
          return next(error);
        } else {
          console.log(data);
          if (data===null)
            res.status(200).send({mensaje:"Usuario no registrado en Itsyou"});
          else
            {
              let informacion ={
                destinatario:data.email,
                subject:"Recuperacion contraseña itsyou",
                text:"clave en Recuperacion",
                message:`Señor usuario su  clave de itsyou es:${data.password}`};

                correo.sendMail(informacion)
                .then((result) => {console.log('Email Enviado...', result);
                res.send({mensaje:'Email enviado'})})
                .catch((error) => {console.log(error.message);
                res.send({mensaje:'Error, email no entregado'})}
                );
            }
          
        }});
    
    
    });
  
// cambiar clave
  usuarioRoute.route("/cambiar-clave").post( (req, res) => {
    console.log(`authorization:${req.headers.authorization}`);
    if(req.headers.authorization==null){
      console.log('Error de consulta por portafolios de usuarios');
      return res.status(403).send({mensaje:"sin autorización"});
        }
        const token =req.headers.authorization.split(' ')[1];
        console.log(`mi filtro:${token}`);
        const payload =jwt.decode(token, tokenSecret.clave);
        let usuario_id=payload.sub;
          
    usuarioModel.findByIdAndUpdate(usuario_id,
      {$set:{password:req.body.password}
       
      }, (error, data, next) => {
      if (error) {
        return next(error);
      } else {
       res.json(data);
      }
    });
  });

module.exports = usuarioRoute;
