//hamburguesa menu desplegable
function myFunction(x) {
  
      x.classList.toggle("change");
      const contenedor = document.getElementById("ul")
      contenedor.classList.toggle("div-ul")
      x.preventDefault();
}

//funcion para generar una alerta en pantalla, nada del otro mundo, 
// solo que no he creado la base de datos
  function bdEnDesarrollo(x){
    console.log("hi")
    return alert("La base de datos esta en desarrollo ")
  }