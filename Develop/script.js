//Display today's date
var dateToday = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").html(dateToday);

// 
$(".time-block").each(function() {
  var currentHour = moment().hour();
  var blockTime = ;

  if (blockTime < currentHour) {
    $(this).removeClass("present");
    $(this).removeClass("future");
    $(this).addClass("past");
  } 
  else if (blockTime > currentHour) {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
  }
  else {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
  }
});


