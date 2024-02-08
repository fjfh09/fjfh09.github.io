let noButtonClickCount = 0; // Contador para el botón "No"
let noButtonState = 0; // Estado actual del botón "No"

// Mostrar el gif inicial
document.getElementById("gifContainer").style.display = "block";

//Funcion que se activa cuando le damos al boton Si
document.getElementById("siBtn").addEventListener("click", function () {
  // Ocultar el gif triste y mostrar el gif feliz
  document.getElementById("sadGifContainer").style.display = "none";
  document.getElementById("sadGifContainer1").style.display = "none";
  document.getElementById("sadGifContainer2").style.display = "none";
  document.getElementById("gifContainer").style.display = "none";
  document.getElementById("happyGifContainer").style.display = "block";

  // Ocultar los botones "Pregunta Sí" y "No "
  document.getElementById("question").style.display = "none";
  document.getElementById("siBtn").style.display = "none";
  document.body.classList.add("bg-green");
  document.getElementById("noBtn").style.display = "none";

  // Mostrar el mensaje específico
  document.getElementById("messageContainer").style.display = "block";
  document.getElementById("messageContainer").innerHTML = "Te Quiero Gemmi💛";

  // Mostrar otro gif después de 3 segundos
  setTimeout(function () {
    document.getElementById("happyGifContainer").style.display = "none";
    document.getElementById("happyGifContainer2").style.display = "block";
  }, 2500);

  setTimeout(function () {
    document.getElementById("happyGifContainer2").style.display = "none";
    document.getElementById("happyGifContainer3").style.display = "block";
  }, 6000);
  setTimeout(function () {
    document.getElementById("happyGifContainer3").style.display = "none";
    document.getElementById("happyGifContainer4").style.display = "block";
  }, 10000);
});



function obtenerPosicionAleatoria() {
  
  var botonRect = boton.getBoundingClientRect();
  var anchoVentana = window.innerWidth;
  var altoVentana = window.innerHeight;
  var anchoBoton = boton.offsetWidth;
  var altoBoton = boton.offsetHeight;
  var nuevaPosX = Math.random() * (anchoVentana - anchoBoton);
  var nuevaPosY = Math.random() * (altoVentana - altoBoton);
  
  boton.style.left = nuevaPosX + 'px';
  boton.style.top = nuevaPosY + 'px';
}





document.getElementById("noBtn").addEventListener("click", function () {
  switch (noButtonState) {
    case 0:
      // Primera vez haciendo clic en "No"
      document.getElementById("happyGifContainer").style.display = "none";
      document.getElementById("gifContainer").style.display = "none";
      document.getElementById("sadGifContainer").style.display = "block";

      // Modificar el botón "No"
      document.getElementById("noBtn").innerHTML = "¿Enserio Gemma? Me pongo triste";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("siBtn").innerHTML = "Di que sii";

      document.getElementById("siBtn").style.fontSize = "40px";
      document.getElementById("siBtn").style.padding = "20px 40px";

      noButtonClickCount++;
      noButtonState++;
      break;

    case 1:
      // Segunda vez haciendo clic en "No"

      document.getElementById("noBtn").innerHTML = "Gemmaa te lo digo enserio que me pongo triste";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "50px";
      document.getElementById("siBtn").style.padding = "30px 50px";
      document.getElementById("siBtn").innerHTML = "Porfaa Gemmaaa";

      noButtonState++;
      break;

    case 2:
      document.getElementById("noBtn").innerHTML = "Estoy ya triste Gemma";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "60px";
      document.getElementById("siBtn").style.padding = "40px 60px";
      document.getElementById("siBtn").innerHTML = "Si";

      noButtonState++;
      break;

    case 3:
      document.getElementById("noBtn").innerHTML = "Gemma eress mala";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";
      document.getElementById("sadGifContainer2").style.display = "none";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "70px";
      document.getElementById("siBtn").style.padding = "50px 70px";

      noButtonState++;
      break;
    case 4:
      document.getElementById("noBtn").innerHTML = "Me haces Daño";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("sadGifContainer").style.display = "block";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "80px";
      document.getElementById("siBtn").style.padding = "60px 80px";

      noButtonState++;
      break;
    case 5:
      document.getElementById("noBtn").innerHTML = "Gemmaa te gusta hacerme sufrir?";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "90px";
      document.getElementById("siBtn").style.padding = "70px 90px";

      noButtonState++;
      break;
    case 6:
      document.getElementById("noBtn").innerHTML = "Gemmaaaaaaaa";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("sadGifContainer").style.display = "block";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "100px";
      document.getElementById("siBtn").style.padding = "70px 100px";

      noButtonState++;
      break;
    case 7:
      document.getElementById("noBtn").innerHTML = "Podria es lo que estas";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";
      document.getElementById("sadGifContainer2").style.display = "none";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "110px";
      document.getElementById("siBtn").style.padding = "80px 110px";

      noButtonState++;
      break;
    case 8:
      document.getElementById("noBtn").innerHTML = "Eres muy CIPOLLA";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("sadGifContainer").style.display = "block";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";

      document.getElementById("siBtn").style.fontSize = "120px";
      document.getElementById("siBtn").style.padding = "90px 120px";

      noButtonState++;
      break;

    case 9:
      document.getElementById("noBtn").innerHTML = "Gemmaa dale a que sii";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "130px";
      document.getElementById("siBtn").style.padding = "100px 130px";

      noButtonState++;
      break;

    case 10:
      document.getElementById("noBtn").innerHTML = "Por favorrr";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";
      document.getElementById("sadGifContainer2").style.display = "none";

      document.getElementById("siBtn").style.fontSize = "135px";
      document.getElementById("siBtn").style.padding = "110px 135px";

      noButtonState++;
      break;
    case 11:
      document.getElementById("noBtn").innerHTML = "Gemmiiiiiiii";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("sadGifContainer").style.display = "block";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";

      document.getElementById("siBtn").style.fontSize = "150px";
      document.getElementById("siBtn").style.padding = "130px 150px";

      noButtonState++;
      break;

    case 12:
      document.getElementById("noBtn").innerHTML = "Malaaa";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "175px";
      document.getElementById("siBtn").style.padding = "150px 175px";

      noButtonState++;
      break;

    case 13:
      document.getElementById("noBtn").innerHTML = "Me hacess daño";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("sadGifContainer").style.display = "block";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";

      document.getElementById("siBtn").style.fontSize = "205px";
      document.getElementById("siBtn").style.padding = "175px 205px";

      noButtonState++;
      break;

    case 14:
      document.getElementById("noBtn").innerHTML = "Dalee a que siiii";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";
      document.getElementById("sadGifContainer2").style.display = "none";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "230px";
      document.getElementById("siBtn").style.padding = "200px 230px";

      noButtonState++;
      break;

    case 15:
      document.getElementById("noBtn").innerHTML = "Ya no me quieres";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "250px";
      document.getElementById("siBtn").style.padding = "220px 250px";

      noButtonState++;
      break;

    case 16:
      document.getElementById("noBtn").innerHTML = "por favooooooor";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("gifContainer").style.display = "block";
      document.getElementById("happyGifContainer").style.display = "none";

      //document.getElementById("noBtn").addEventListener('mouseover', function() {
        //document.getElementById("noBtn").style.position = "absolute";
        //document.getElementById("noBtn").style.top = "1px";
        //document.getElementById("noBtn").style.bottom = "1px";
        //document.getElementById("noBtn").style.fontSize = "10px";
        //document.getElementById("noBtn").style.padding = "0px";
        //obtenerPosicionAleatoria();
      //});
      

      // Vuelve al estado 0
      noButtonState = 0;
      break;    
      

    default:
      // Por si acaso, maneja cualquier otro caso aquí     
      break;
  }
});


