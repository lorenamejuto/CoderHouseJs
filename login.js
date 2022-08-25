const registrate = document.getElementById('registrate');
const ingresa = document.getElementById('ingresar')
const inputs = document.querySelectorAll('.registrate input');
const btnRegistrar = document.getElementById('btn-registrar');
const errorPasword = document.getElementById('error-pasword');
const logueado = document.getElementById('logueado');
const registraNuevosUsuarios = [];

let inputValidator = {
  "usuario": false,
  "nombre": false,
  "apellido": false,
  "telefono": false,
  "email": false,
  "password": false,
  "password2": false
}

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    let name = event.target.getAttribute('name');

    if (event.target.value.length > 0) {
      inputValidator[name] = true;
    } else {
      inputValidator[name] = false;
    };

    let allTrue = Object.keys(inputValidator).every((item) => {
      return inputValidator[item] === true
    });

    if (allTrue ) {
        btnRegistrar.disabled = false;
    } else {
        btnRegistrar.disabled = true;
    }
  })
})

/*Registrate*/
registrate.addEventListener('submit', (e)=> {
    e.preventDefault();
    const usuarioN = document.getElementById('usuario-n').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    console.log(nombre, apellido, telefono)

    const nuevoUsuario = new generaUsuario( usuarioN, nombre, apellido, telefono, email, password, password2);

    if (password == password2) {

        registraNuevosUsuarios.push(nuevoUsuario);
        localStorage.setItem('registraNuevosUsuarios', JSON.stringify(registraNuevosUsuarios));

        logueado.style.visibility = 'visible';

        setTimeout(function() {
          clearForm("registrate");
          logueado.style.visibility = 'hidden';
        }, 2000)

    } else {

        errorPasword.style.visibility = 'visible';

        setTimeout(function() {
          errorPasword.style.visibility = 'hidden';
          document.getElementById('password').value = '';
          document.getElementById('password2').value = '';
        }, 2000)
    }

});


/*Ingresa*/

ingresa.addEventListener('submit', (e)=> {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const passwordfinal = document.getElementById('passwordfinal').value;

    let usuarioslogueados = localStorage.getItem('registraNuevosUsuarios');
    usuarioslogueados = JSON.parse(usuarioslogueados);

    console.log(usuarioslogueados)

    for (i in usuarioslogueados) {

      if (usuario == usuarioslogueados[i].usuarioN && passwordfinal == usuarioslogueados[i].password) {
        return window.location.assign("index.html");
       }
       else {
        console.log("usuario incorrecto");
        clearForm("ingresar");
       }
    }

});


function clearForm(id) {
  document.getElementById(id).reset();
}


let contenidos = document.getElementById("contenidos");
function buscar(e) {
    e.preventDefault();
    let resultado = document.getElementById("resultado").value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${resultado}`)
    .then(response => response.json())
    .then(response => {
        const data = response.meals;
        data.forEach(elem => {
            
            let article = document.createElement("article");
            let imagen = document.createElement("img");
            let titulo = document.createElement("h3");
            let receta = document.createElement("p");

            imagen.src = elem.strMealThumb;
            imagen.style.width = "200px";
            titulo.innerText = elem.strMeal;
            receta.innerHTML = elem.strInstructions;
        
            article.appendChild(imagen);
            article.appendChild(titulo);
            article.appendChild(receta)
            document.getElementById('contenidos').appendChild(article);
        });
        
    })
    .catch(err => console.error(err));

}
document.getElementById("buscador").addEventListener("submit", buscar);

