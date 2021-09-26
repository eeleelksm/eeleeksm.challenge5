// Display today's date
var dateToday = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").html(dateToday);

var trackTime = function() {
  // start of the work day, 9am
  let count = 9
  var currentHour = moment().hour();
  
    // changing time block background color based on time
  $(".time-block").each(function() {
    //iterate between the hours 9-17
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
// function for save button
// when the save Button is clicked
$(".saveBtn").on("click", function() {
  // variable to grab all of the textarea "description" values
  var task = $(this).siblings(".description").val();
  // variable to grab all the times that go with the "descriptions"
  var time = $(this).parent().attr("id");

  //save both time and the task to the local storage
  localStorage.setItem(time, task);
})

// adding and retrieving textarea information from localStorage that is saved
$("#9-hour .description").val(localStorage.getItem("9-hour"));
$("#10-hour .description").val(localStorage.getItem("10-hour"));
$("#11-hour .description").val(localStorage.getItem("11-hour"));
$("#12-hour .description").val(localStorage.getItem("12-hour"));
$("#13-hour .description").val(localStorage.getItem("13-hour"));
$("#14-hour .description").val(localStorage.getItem("14-hour"));
$("#15-hour .description").val(localStorage.getItem("15-hour"));
$("#16-hour .description").val(localStorage.getItem("16-hour"));
$("#17-hour .description").val(localStorage.getItem("17-hour"));

trackTime();