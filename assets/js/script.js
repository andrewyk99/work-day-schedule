var currentDayEl = document.querySelector("#currentDay");

// function to show current day the user opens the scheduler
var currentDay = function(){
    currentDayEl.textContent = moment().format("dddd, MMMM Do");
};



// function to show current day at top of page
currentDay();