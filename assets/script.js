// Display today's date
var dateToday = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").html(dateToday);

var trackTime = function() {
  let count = 9
  var currentHour = moment().hour();
  
    // changing time block background color based on time
  $(".time-block").each(function() {
    var blockTime = count;
    count++
    // based on the time, change color for present, past and future
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
}

trackTime();


