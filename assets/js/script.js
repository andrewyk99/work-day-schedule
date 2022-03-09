var currentDayEl = document.querySelector("#currentDay");
var pageContentEl = document.querySelector("body");
var tasks = [];

// function to show current day the user opens the scheduler
var currentDay = function(){
    currentDayEl.textContent = moment().format("dddd, MMMM Do");
};

// function to determine what hour of the day it is and colorcode each hour block accordingly
var currHour = function(){
    var currHour = moment().hour();
    if (currHour < 9) { // function for before the work day
        for (var i = 9; i < 18; i++) {
            var textareaEl = document.querySelector("#ta" + i);
            textareaEl.className = "col-lg-9 description future"
        }
    }
    else if (currHour >= 9 && currHour <= 17) { // function for during and the end of the work day
        for (var i = 9; i < 18; i++) {
            var textareaEl = document.querySelector("#ta" + i);
            if (currHour < i) {
                textareaEl.className = "col-lg-9 description future"
            }
            if (currHour === i){
                textareaEl.className = "col-lg-9 description present"
            }
        }
    }
};

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    if (!tasks) {
        tasks = {
            timeID: [],
            task: []
        };
    }
}

var saveTasks = function() {
    localStorage.setItem("task", JSON.stringify(tasks));
}

var taskHandler = function(event) {
    var targetEl = event.target;

    if (targetEl.matches("#btn9")) {
        saveTask();
    }

    if (targetEl.matches("#btn10")) {
        saveTask();
    }

    if (targetEl.matches("#btn11")) {
        saveTask();
    }

    if (targetEl.matches("#btn12")) {
        saveTask();
    }

    if (targetEl.matches("#btn13")) {
        saveTask();
    }

    if (targetEl.matches("#btn14")) {
        saveTask();
    }

    if (targetEl.matches("#btn15")) {
        saveTask();
    }

    if (targetEl.matches("#btn16")) {
        saveTask();
    }

    if (targetEl.matches("#btn17")) {
        saveTask();
    }
}
currHour();

// function to show current day at top of page
currentDay();

// eventListener calls taskHandler
pageContentEl.addEventListener("click", taskHandler);