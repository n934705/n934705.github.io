$(function() {
  $("#btn0").click(function() {
    $("#result1").html("<h1>Hello!!  " + $("#username").val() + "</h1>");
    $("#result1").fadeIn(2000);
    $("#result1").fadeOut(2000);
    $("#result1").slideDown(2000);
    $("#result1").slideUp(2000);
    $("#result1").slideToggle(2000);
  });
});

$(function() {
  $("#username1").keyup(function() {
    $("#result2").html("<h1>Hello!!  " + $("#username1").val() + "</h1>");
  });
});

$(function() {
  $("#btn1").click(function() {
    $("#box1").fadeIn(1000);
  });
  $("#btn2").click(function() {
    $("#box2").fadeOut(1000);
  });
  $("#btn3").click(function() {
    $("#box3").fadeToggle(1000);
  });
});

$(function() {
  $("#getansbtn").click(function() {
    var ans = $("input[name=q1]:checked").val();
    $("[id^=ans]").hide();
    $(".ans").show();
    $("#" + ans).show();
  });
});


$(function () { 
  $("#touch").click(function () {
    var message1 = $("input[name=message1]").val();
    $("#message1").text(message1);
    var message2 = $("input[name=message2]").val();
    $("#message2").text(message2);
    var message3 = $("input[name=message3]").val();
    $("#message3").text(message3);
    var message4 = $("input[name=message4]").val();
    $("#message4").text(message4);
  });
});


