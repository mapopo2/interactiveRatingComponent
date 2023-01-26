document.querySelector("body #result").classList.add("invisible"); 

var button1 = document.querySelector("body .one").addEventListener("click", myFunction1);

function myFunction1() {
  document.querySelector("body .one").style.backgroundColor = "grey";
  document.querySelector("body .one").style.color = "white";
  
  document.querySelector("body .two").style = "/styles.css";

  document.querySelector("body .three").style = "/styles.css";

  document.querySelector("body .four").style = "/styles.css";

  document.querySelector("body .five").style = "/styles.css";

  document.querySelector("body .clicked").innerHTML = "You selected 1 out of 5";

}

var button2 = document.querySelector("body .two").addEventListener("click", myFunction2);

function myFunction2() {
  document.querySelector("body .two").style.backgroundColor = "grey";
  document.querySelector("body .two").style.color = "white";

  document.querySelector("body .one").style = "/styles.css";

  document.querySelector("body .three").style = "/styles.css";

  document.querySelector("body .four").style = "/styles.css";

  document.querySelector("body .five").style = "/styles.css";

  document.querySelector("body .clicked").innerHTML = "You selected 2 out of 5";

}

var button3 = document.querySelector("body .three").addEventListener("click", myFunction3);

function myFunction3() {

  document.querySelector("body .three").style.backgroundColor = "grey";
  document.querySelector("body .three").style.color = "white";

  document.querySelector("body .one").style = "/styles.css";

  document.querySelector("body .two").style = "/styles.css";
  document.querySelector("body .four").style = "/styles.css";
  document.querySelector("body .five").style = "/styles.css";

  document.querySelector("body .clicked").innerHTML = "You selected 3 out of 5";

}

var button4 = document.querySelector("body .four").addEventListener("click", myFunction4);

function myFunction4() {

  document.querySelector("body .four").style.backgroundColor = "grey";
  document.querySelector("body .four").style.color = "white";

  document.querySelector("body .one").style = "/styles.css";

  document.querySelector("body .two").style = "/styles.css";
  document.querySelector("body .three").style = "/styles.css";

  document.querySelector("body .five").style = "/styles.css";

  document.querySelector("body .clicked").innerHTML = "You selected 4 out of 5";

}

var button5 = document.querySelector("body .five").addEventListener("click", myFunction5);

function myFunction5() {

  document.querySelector("body .five").style.backgroundColor = "grey";
  document.querySelector("body .five").style.color = "white";

  document.querySelector("body .one").style = "/styles.css";
  
  document.querySelector("body .two").style = "/styles.css";

  document.querySelector("body .three").style = "/styles.css";

  document.querySelector("body .four").style = "/styles.css";

  document.querySelector("body .clicked").innerHTML = "You selected 5 out of 5!";

}

var submit = document.querySelector("body .submit").addEventListener("click", myFunction6);

function myFunction6() {
    document.querySelector("body #rate").classList.add("invisible") ; 
    document.querySelector("body #result").classList.remove("invisible") ; 

} 

