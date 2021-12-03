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
              RegistrarPropietario();
              //event.preventDefault()
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()



function RegistrarPropietario(){
let nombres = document.querySelector("#txtNombres").value;
let apellidos = document.querySelector("#txtApellidos").value;
let usuario = document.querySelector("#txtUsuario").value;
let celular = document.querySelector("#txtCelular").value;
let ciudad = document.querySelector("#txtCiudad").value;
let direccion = document.querySelector("#txtDireccion").value;


let url=`http://localhost:3000/propietarios`;
let datos = {
nombres : nombres,
apellidos : apellidos,
usuario: usuario,
celular : celular,
ciudad : ciudad,
direccion : direccion,

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
