
$("body #result").addClass("invisible"); 

$(" .submit").on("click", function(){
  $("body #rate").addClass("invisible"); 
  $("body #result").removeClass("invisible"); 
});

  $(".rating").on("click", function(){
    $(".one").addClass("rating-click");
    $(".two").removeClass("rating-click");
    $(".three").removeClass("rating-click");
    $(".four").removeClass("rating-click");
    $(".five").removeClass("rating-click");
    $(".clicked").text("You selected 1 out of 5");
  });
  
    $(".two").on("click", function(){
      $(".two").addClass("rating-click");
      $(".one").removeClass("rating-click");
      $(".three").removeClass("rating-click");
      $(".four").removeClass("rating-click");
      $(".five").removeClass("rating-click");
      $(".clicked").text("You selected 2 out of 5");
    });

    $(".three").on("click", function(){
      $(".three").addClass("rating-click");
      $(".one").removeClass("rating-click");
      $(".two").removeClass("rating-click");
      $(".four").removeClass("rating-click");
      $(".five").removeClass("rating-click");
      $(".clicked").text("You selected 3 out of 5");
    });

    $(".four").on("click", function(){
      $(".four").addClass("rating-click");
      $(".one").removeClass("rating-click");
      $(".three").removeClass("rating-click");
      $(".two").removeClass("rating-click");
      $(".five").removeClass("rating-click");
      $(".clicked").text("You selected 4 out of 5");
    });

    $(".five").on("click", function(){
      $(".five").addClass("rating-click");
      $(".one").removeClass("rating-click");
      $(".three").removeClass("rating-click");
      $(".four").removeClass("rating-click");
      $(".two").removeClass("rating-click");
      $(".clicked").text("You selected 5 out of 5");
    });
