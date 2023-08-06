

$(function() {
    var currentHour = moment().format('h: mm: s a')
  })
  
  
  
  // $(function() {
  //   var hourX= moment().format('h: mm: s a');
  
    var timeBlockPresent = currentHour;
     if(currentHour === timeBlockPresent){
      console.log('The box will be red')
     } else {
      console.log('The box will be grey')
     }
  
  
    //  var timeBlockPast = currentTime;
    //  if(currentTime >= timeBlo) {
    //   console.log('This box is grey')
    //      thatElement.addClass("past")
    //  } else {
    //   console.log ('This box')
    //  }
  
    var timeBlockPresent = document.querySelector('.class');
    
  
  
  
  
  
  // function saveReminders() {
  //   localStorage.setItem("currentDate", JSON.stringify(currentDate));
  // }
  // function displayReminders() {
  //   currentDate.forEach(function (thisHourX)); {
  //     $('#${thisHourX.id}.val(thisHourX.reminder');
  //   }}
  
  
  
  // var textEntry = $('').text();
  // localStorage.setItem('', text);
  // alert(localStorage.getItem(''));
  
  
  
  //  $('.time-block').each(function() {
  //    var key = $(this).attr('id');
  //    var value = localStorage.getItem(key);
  //    $(this).children('.description').val(value);
  //  });
  
   function updateTime() {
    var dateEl = $('#currentDate');
    var timeEl = $('#currentTime');
    // var currentDay = moment().format('MMMM Do YYYY');
    // var currentTime = moment().format('h: mm: s a');
    dateEl.text(currentDate);
    timeEl.text(currentTime);
   }
  
   
  
  
  
  hourlyColor();
  textEntry();
  refreshColor();
  
  setInterval(updateTime, 3000);
  
  // saveButtonEl.on("click", () => console.log('Save button was clicked'))
   
  
  
  //  $(function () {
  // saveButtonEl.on("click", () => console.log('Save button was clicked'))
  
  
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
   
  