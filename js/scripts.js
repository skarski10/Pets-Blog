$(function(){
  $("button#light").click(function(){
    // $("body").removeClass();
    $("body").toggleClass("light-background");

  });
  $("span#box").click(function() {
    $("#box").addClass("box");
  });
});
