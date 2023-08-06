  // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// var currentDate = $('#currentDate');
// var currentTime = $('#currentTime');
// var localeSettings = moment().format('MMMM Do YYYY, h:mm: ss a');
var localeSetting =moment().format('LLLL')
console.log(localeSetting)
var hourX = $('#hourX')
var saveButtonEl = $('#save-Btn')
var dateTime = $('#date-time')
dateTime.text(localeSetting)

// function getHeaderDate() {
//   var currentHeaderDate = moment().format('MMMM Do YYYY');
//   $("#currentDate", + "#currentTime").text(currentHeaderDate);
// }

var currentHour = moment().format('H')
console.log(currentHour)

var timeBlocks = $('.time-block')
console.log(timeBlocks)
var timeBlocksArray = timeBlocks.toArray()
console.log(timeBlocksArray)

for(var i =0; i<timeBlocksArray.length; i++) {
  var currentTimeBlock = timeBlocksArray[i]
  var idTime = $(currentTimeBlock).attr("id")
  console.log(idTime) // hour-9
  var time = idTime.split("-")[1] // ["hour", "9"] // "9"
  console.log(time)
  if(time<currentHour) {
    $(currentTimeBlock).addClass("past")
  } else if(time == currentHour) { // TODO present

  } else { // TODO future

  }
}

// var arr = [10,11,12]
// for(var i=0; i<arr.length; i++) {
//   console.log(arr[i]);
// }

// function x() {
//   console.log("x")
//   console.log("y")
//   console.log("z")
// }


//x()