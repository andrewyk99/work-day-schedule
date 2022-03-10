var currentDayEl = document.querySelector("#currentDay");
var pageContentEl = document.querySelector("body");
var tasks = {};

// function to show current day the user opens the scheduler
var currentDay = function(){
    currentDayEl.textContent = moment().format("dddd, MMMM Do");
};

// function to check the current hour and color coordinate the rows
var currHour = function() {
    var currHour = moment().hour();
    for (var i = 9; i < 18; i++) {
        var textareaEl = document.querySelector("#ta" + i);
        if (currHour < i) {
            textareaEl.className = "col-lg-9 description future"
        }
        if (currHour === i) {
            textareaEl.className = "col-lg-9 description present"
        }
        if (currHour > i) {
            textareaEl.className = "col-lg-9 description past"
        }
    }
};

// set's object to save into localStorage
var saveTasks = function(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// load function to check the localStorage and print it to the page if there are tasks saved
var loadTasks =  function(){
    tasks = JSON.parse(localStorage.getItem("tasks"));
    if (!tasks){ // if there are no saved tasks, must make object empty
        tasks = {};
    }

    // prints saved task in to respective row
    $("textarea").each(function(){
        var rowID = $(this).closest(".row").attr("id");
        if (tasks[rowID]){
            $(this).text(tasks[rowID].text);
        }
    });
};

// function to save tasks if user clicks the save button next to the specific task they wish to save
$("button").on("click", function(){
    var rowID = $(this).closest(".row").attr("id"); // calls the row id of the same row which the user clicks the save button
    var textareaID = $("#" + rowID).children("textarea").attr("id"); // calls the textarea within the same row
    var textareaCont = $("#" + textareaID).val(); // calls the value of the textarea
    
    tasks[rowID] = {
        text: textareaCont,
        textID: textareaID
    };

    saveTasks();
});

// function to refresh the page every five minutes without the user needing to manually refresh the page
setInterval(function(){
    currHour();
    currentDay();
}, (1000 * 60) * 5);

// function to check current day
currHour();

// function to show current day at top of page
currentDay();

// function to run load tasks
loadTasks();