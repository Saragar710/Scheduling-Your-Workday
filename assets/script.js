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
// var textareaEL = $(textarea)



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
  



// var idTime = $(currentTimeBlockArray).attr("id")
// console.log(id.Time)
// var time = idTime.split("-")[2]
// console.log(time)
// if(time = currentHour){
//   $(currentTimeBlock).addClass("present")

//   } else if (time == currentHour){

//   }

  } else { // TODO future

    if(time == currentHour){
      $(currentTimeBlock).addClass("present") }

  // } else if(time == currentHour) {

      if(time >= currentHour){
        $(currentTimeBlock).addClass("future")
      }
    }
      
    }
    

    function saveInput() {
      localStorage.setItem("dateTime", JSON.stringify(dateTime))
    }

    function displayInput() {
      dateTime.forEach(function (_thisHour){
        $('#${thisHour.id}').val(thisHour.Input);
      })
    }
    function init() {
      var StoreInfo = JSON.parse(localStorage.getItem("thisHour.input"));
      localStorage.removeItem(thisHour.input);
      localStorage.clear()
    }

    // var textarea = document.getElementById("save-Btn");
 
    // textarea.addEventListener('click', idHour)

    // function idHour() {
    //   if(idHour >= currentHour )
    //   container.setAttribute("id", past)
    // }

    // document.getElementById("save-Btn").addEventListener("click", userInput);

    // function userInput () {
    //   document.getElementById("textarea").innerHTML = $('#thisIdTime')
    // }

    
    // function displayReminders() {
    //   currentHour.forEach{function(_thisHour){
    //     $('#${_thisHour.id}').value(_thisHour.reminder);
    //   }
    //   }
    // }
  // function saveReminders() {
  //   var userInput = document.getElementById("textarea").value;
  //   localStorage.setItem("userInput", textarea);
  // }
  // function displayReminders() {
  //   var userInput = localStorage.getItem("userInput");
  //   document.getElementById("textarea").value = userInput;
  // }

  //  var todos = ["."];

  //  localStorage.setItem("todos", JSON.stringify(todos));

  //  var todos = JSON.parse(localStorage.getItem("todos"));
  //  localStorage.removeItem('todos');
  //  localStorage.clear()


    
    // localStorage.userInput = ('.')
    // localStorage['userInput'] = ('.')
    // localStorage.setItem =('userInput', '.')
    // localStorage.removeItem('userInput')
    // localStorage.clear()

  //  var userInput = ('')

  //  localStorage.setItem(userInput, currentHour);
  //  var userInput = localStorage.getItem(userInput);
  //  localStorage.removeItem(userInput);
  //  localStorage.clear()
  
// saveButtonEl.on("click", function(event) {
//   // alert( $(this).addClass(textarea))
//   console.log(" you clicked me")

//   saveButtonEl();
// });

  //  saveButtonEl.on("click", () => console.log('Save button was clicked'))

  //  $(function () {
  //    saveButtonEl.on("click", () => console.log('Save button was clicked'))

  //  })
  //  saveButtonEl.on("click", (todos))
  //  var data = '.'

  //  function data() {
  //   console.log('Info has been stored!')
  //  }
  
 // }
//}

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