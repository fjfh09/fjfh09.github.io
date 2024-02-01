$(document).ready(function () {
  let magic8Ball = {};
  //Lista de respuestas posibles
  magic8Ball.listOfAnswers = [
    "No",
    "Si",
    "No creo la verdad...",
    "Murcia existe",
    "Almeria es de Murcia",
    "xD",
  ];
  $("#answer").hide();

  let onClick = function () {
    //Para el dialogo de la respuesta
    $("#answer").hide();
    $("#8ball").attr(
      "src",
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png"
    );

    setTimeout(function () {
      //Para la ventana emergente de si o no
      let question = prompt("HAZ UNA PREGUNTA DE RESPUESTA SI O NO");
      magic8Ball.askQuestion(question);
      
    }, 500);

    var colorAleatorio = '#' + Math.floor(Math.random()*16777215).toString(16);

    this.style.fontSize = "25px";
    this.style.backgroundColor = colorAleatorio;

    setTimeout(() => {
        this.style.fontSize = "26px";
        },100);


}

  $("#questionButton").click(onClick); //Cuando le damos al boton de preguntas

  magic8Ball.askQuestion = function (question) {
    $("#8ball").effect("shake");
    $("#8ball").attr(
      "src",
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png"
    );
    $("#answer").fadeIn(2000);
    //let randomNumber = Math.random(); //Generamos numero aleatorio
    //Seleccionamos una respuesta aleatoria de la lista de respuestas
    //let randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
    //let randomIndex = Math.floor(randomNumberForListOfAnswers);
    //let answer = this.listOfAnswers[randomIndex];

    let answer = this.listOfAnswers [Math.floor(Math.random() * this.listOfAnswers.length)];
    $("#answer").text(answer);
    console.log(question);
    console.log(answer);
   
  }; //Fin funcion preguntar
});
