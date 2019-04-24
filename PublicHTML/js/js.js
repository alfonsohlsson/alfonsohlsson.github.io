$(document).ready(function(){
  var number = 0;

  $("nav").css("display", "initial");

  $("#clickP").html("&#8801;");

  var navFunction = function() {
    if(number==0){

    $("header").animate({
      marginTop:'100px'
    },300);

    $("#clickBar").animate({
      marginTop:'50px'
    },300,function() {
      $("#clickBar").css("z-index","1")
    });

    $("#clickP").html("&#10007;");
    number=1;

  }else{
    $("header").animate({
      marginTop:'60px'
    },400);
    $("#clickBar").css("z-index","0")
    $("#clickBar").animate({
      marginTop:'0px'
    },400
    );

    $("#clickP").html("&#8801;");
    number=0;
  }
};


    $("#clickP").click(function(){
      navFunction();
      });

    $("#knapp1").click(function(){
      $('html, body').animate({
      scrollTop:$("header").offset().top-100
    }, 400);
    navFunction();
    })

    $("#knapp2").click(function(){
      $('html, body').animate({
      scrollTop:$("main").offset().top-80
    }, 400);
    navFunction();
    });

    $("#knapp3").click(function(){
      $('html, body').animate({
      scrollTop:$("#firstSection").offset().top-80
    }, 400);
    navFunction();
    });

    $("#knapp4").click(function(){
      $('html, body').animate({
      scrollTop:$("#secondSection").offset().top-80
    }, 400);
    navFunction();
    });



    var next = $("#next");
    var prev = $("#prev");
    var antalPixlar = parseInt($("#imgs").css("right"));


    $(next).css("display", "block");
    $(prev).css("display", "block");


    $(next).click(function(){
      if(antalPixlar < 800){
        $("#imgs").animate({right:"+=400"}, function() {
          antalPixlar = parseInt($("#imgs").css("right"));
        });
      }
    });

    $(prev).click(function(){
      if(antalPixlar > 0) {
        $("#imgs").animate({right:"-=400"}, function() {
          antalPixlar = parseInt($("#imgs").css("right"));
        });
      }
    });

    var timer = setInterval(timerFunction, 3500);

      function timerFunction(){
      if(antalPixlar < 800){
        $("#imgs").animate({right:"+=400"}, function() {
          antalPixlar = parseInt($("#imgs").css("right"));
        });

      }else {
        $("#imgs").animate({right:"-=800"}, function() {
          antalPixlar = parseInt($("#imgs").css("right"));
        });
      }
    }

    var i =0;

    function testInfo(phoneInput, re, textsvar) {
            var OK = re.exec(phoneInput);
            if (!OK) {
                  $(textsvar).css("color", "red");
            } else {
              $(textsvar).css("color", "green");
              i++;
            }
          }

            var button = document.createElement("button");
            var text = document.createTextNode("Spara");
            button.appendChild(text);


            $("#phone").keyup(function(){
              var re = /^[0]{1}[0-9]{6,15}$/;
              testInfo($('#phone').val(),re,"#phone");
            });


            $("#mail").keyup(function(){
              var rea = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              testInfo($('#mail').val(),rea,"#mail");
            });

            $("#firstName").keyup(function(){
              var check = /^[a-zA-Z]+$/;
              testInfo($('#firstName').val(),check ,"#firstName");
            });

            $("#lastName").keyup(function(){
              var check2 = /^[a-zA-Z]+$/;
              testInfo($('#lastName').val(),check2 ,"#lastName");
            });
            if(i==4){
              button.append("#secondSection");
            }




});
