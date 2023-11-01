
console.log("hello");

$("body #result").addClass("invisible"); 

$(" .submit").on("click", function(){
  $("body #rate").addClass("invisible"); 
  $("body #result").removeClass("invisible"); 
});

const ratings = document.getElementById("r-result");
// const ratings = $("body #r-result");
const rates = $(".rating"); 
//convert to array - forEach not working
const ratesArr = Array.from(rates);

ratesArr.forEach ((rate) => {
  rate.addEventListener("click", function () {
  ratings.innerHTML = rate.innerHTML;
    console.log(rate.innerHTML);
});
});
