import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import *as cryptoJS from "crypto-js"
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    "usuario":["", [Validators.required, Validators.email]],
    "clave":["", [Validators.required]]

  })
  
  constructor(private fb:FormBuilder,
    private serviciosSeguridad: SeguridadService) { }

  ngOnInit(): void {
  }

  IdentificarUsuario(){
    let usuario = this.fgValidador.controls["usuario"].value;
    let clave = this.fgValidador.controls["clave"].value;
    let claveCifrada = cryptoJS.MD5(clave).toString();
    this.serviciosSeguridad.Identificar(usuario,claveCifrada).subscribe((datos:any) => {
      this.serviciosSeguridad.AlmacenarSesion(datos);

      alert("Datos correctos")
    }, (error:any) => {

      alert("Datos Invalidos")
    })
  }
}
