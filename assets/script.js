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

$("#14-hour .description").val(localStorage.getItem("14-hour"));

trackTime();


