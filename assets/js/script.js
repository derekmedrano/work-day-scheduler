//Selector variable 
var currentDayEl = $('#currentDay');

//Global variables
var today = dayjs();
var todayFormat = today.format('YYYY-MM-DD');
var currentHour = dayjs().hour();

// Hour values are stored in an array
var hours = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM']

// Displays current time in heading 
currentDayEl.text(today);


//The loop creates the content of the main div, stopping after 5PM, html elements are dynamically inserted
  for (var i = 0; i < hours.length; i++){
  
    var block = $('<div></div>');
    block.attr('id', 'hour-' + (i + 9));
    block.attr('class', 'row time-block');
    var text = $(this).val;

    var time = $('<div></div>');
    time.text(hours[i]);
    time.attr('class', 'col-2 col-md-1 hour text-center py-3');

    var input = $('<textarea></textarea>');
    input.attr('class', 'col-8 col-md-10 description past');

    if (i + 9 < currentHour) {
      input.attr('class', 'col-8 col-md-10 description past');
    }

    if (i + 9 === currentHour) {
      input.attr('class', 'col-8 col-md-10 description present');
    }

    if (i + 9 > currentHour) {
      input.attr('class', 'col-8 col-md-10 description future');
    }

  
    var saveBtn = $('<button></button>');
    saveBtn.attr('class', 'btn saveBtn col-2 col-md-1');

    var saveIcon = $('<i></i>');
    saveIcon.attr('class', 'fas fa-save');


    saveBtn.append(saveIcon);

    block.append(time);
    block.append(input);
    block.append(saveBtn);
  
    $('#main').append(block);

  }

// $(function getInputValue() {


// });
//  // Function to save events in local storage when the save button is clicked
//  function saveEvent() {
//   // Get the event text/content from the textarea or input field
//   eventText = getInputValue(); // Assuming there's a function to get the input value
//   // Get the time or ID of the time block associated with this event
//   eventTime = getEventTime(); // Assuming there's a function to get the event time or ID
//   // Save the event text with the corresponding time or ID in local storage
//   localStorage.setItem(eventTime, eventText);
// }

// // Function to load events from local storage when the page loads
// function loadEvents() {
//   // Loop through time blocks or IDs
//   for each timeBlock in timeBlocks {
//       // Get the saved event text from local storage using the time or ID
//      savedEvent = localStorage.getItem(timeBlock);
//       // If there's a saved event for this time block
//       if (savedEvent) {
//           // Display the saved event in the corresponding textarea or input field
//           displayEvent(savedEvent); // Assuming there's a function to display the event
//       }
//   }
// }






// $(function () {

//     // TODO: Add a listener for click events on the save button. This code should
//     // use the id in the containing time-block as a key to save the user input in
//     // local storage. HINT: What does `this` reference in the click listener
//     // function? How can DOM traversal be used to get the "hour-x" id of the
//     // time-block containing the button that was clicked? How might the id be
//     // useful when saving the description in local storage?
//     //


//     // TODO: Add code to get any user input that was saved in localStorage and set
//     // the values of the corresponding textarea elements. HINT: How can the id
//     // attribute of each time-block be used to do this?
//     //
//     $(saveBtn.on('click', function() {
    
//     })); 
//   