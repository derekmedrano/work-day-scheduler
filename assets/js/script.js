//Selector variable 
var currentDayEl = $('#currentDay');

var today = dayjs();
var todayFormat = today.format('YYYY-MM-DD');
var currentHour = dayjs().hour();
var hours = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM']

// Displays current time in heading 
currentDayEl.text(today);


//The loop creates the content of the main div, 
  for (var i = 0; i < hours.length; i++){
  
    var block = $('<div></div>');
    block.attr('id', 'hour-' + (i + 9));
    block.attr('class', 'row time-block');

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

  // Takes user's inputs in generated textareas and saves them locally








$(function saveInput(event) {
  $(saveBtn).on('click', function() {
    event.preventDefault;
    console.log('saveBtn test');


    
  })
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //


    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    
  });
  