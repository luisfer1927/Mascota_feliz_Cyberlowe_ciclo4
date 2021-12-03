// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }else{
              RegistrarMascota();
              //event.preventDefault()
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()



function RegistrarMascota(){
let nombres = document.querySelector("#txtNombres").value;
let raza = document.querySelector("#txtRaza").value;
let estadosalud = document.querySelector("#txtEstadosalud").value;
let especie = document.querySelector("#txtEspecie").value;
let activo = document.querySelector("#txtActivo").value;
let motivoinactivo = document.querySelector("#txtMotivoinactivo").value;
let color = document.querySelector("#txtcolor").value;
let sexo = document.querySelector("#txtSexo").value;
let fecha = document.querySelector("#txtfecha").value;
let signovital = document.querySelector("#txtsignov").value;
let alimento = document.querySelector("#txtalimentos").value;
let enfermedadespre = document.querySelector("#txtEnfermedadpre").value;
let foto = document.querySelector("#txtfoto").value;

let url=`http://localhost:3000/mascotas`;
let datos = {
nombre : nombres,
raza : raza,
estadoSalud: estadosalud,
especie : especie,
activo : activo,
motivoInac : motivoinactivo,
color : color,
sexo : sexo,
fechaNac : fecha,
signoVital : signovital,
alimento : alimento,
enfermedadesPre : enfermedadespre,
foto : foto,

};

fetch(url, {
    method: "POST",
    body: JSON.stringify(datos),
    headers:{
      "Content-Type":"application/json"
    }
}).them(res=> res.json())
.then(mensaje => {
    console.log(mensaje)
})
}
