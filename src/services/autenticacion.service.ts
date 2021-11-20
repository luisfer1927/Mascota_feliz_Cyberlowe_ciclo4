import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Propietario} from '../models';
import {PropietarioRepository} from '../repositories';
import {Llaves} from "../config/llaves"
const generador = require("password-generator");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");


@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository(PropietarioRepository)
    public propietarioRepository: PropietarioRepository
    ) {}

  /*
   * Add service methods here
   */

  GenerarContrasena(){
    let contrasena = generador(8, false);
    return contrasena;


  }

  CifrarContrasena(contrasena: string){
    let contrasenaCifrada = cryptoJS.MD5(contrasena).toString();
    return contrasenaCifrada;
  }

  IdentificarPropietario(usuario:string, contrasena:string){
    try{
      let p = this.propietarioRepository.findOne({where:{usuario: usuario, contrasena: contrasena}});
      if(p){
        return p;
      }
      return false;
    }catch{
      return false;
    }

  }

  GenerarTokenJWT(propietario: Propietario){
    let token = jwt.sign({
      data:{
        id: propietario.id,
        usuario: propietario.usuario,
        nombre: propietario.nombres + " " + propietario.apellidos

      }

    },
      Llaves.claveJWT);
      return token;

  }

  ValidarTokenJWT(token: string){
    try{
      let datos = jwt.verify(token, Llaves.claveJWT);
      return datos;

    }catch{
      return false;
    }
  }

}
