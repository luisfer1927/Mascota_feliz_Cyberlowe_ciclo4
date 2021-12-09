import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  fgValidator: FormGroup = this.fb.group({
    "usuario":["", [Validators.required, Validators.email]],
    "clave":["", [Validators.required]]

  })
  
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
