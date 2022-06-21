// Assigning variables
var saveBtn = document.querySelector(".save-btn");
var container = document.querySelector(".container");
var time9am = document.getElementById("9am");
var time10am = document.getElementById("10am");
var time11am = document.getElementById("11am");
var time12pm = document.getElementById("12pm");
var time1pm = document.getElementById("1pm");
var time2pm = document.getElementById("2pm");
var time3pm = document.getElementById("3pm");
var time4pm = document.getElementById("4pm");
var time5pm = document.getElementById("5pm");
var text = document.querySelector(".target");
var date = document.querySelector("#currentDay");

// Time array to iterate through for loop
var timeArray = [
    time9am,
    time10am,
    time11am,
    time12pm,
    time1pm,
    time2pm,
    time3pm,
    time4pm,
    time5pm,
]

//when time is past, present or future, the class attribute on the elements are changed so that the back ground colour is red, grey or green
function checkTime() {
    today = moment().format("DD/MM/YY");
    date.textContent = today

    var now = moment().format("kk");
    for (let i = 0; i < timeArray.length; i++) {
        if (timeArray[i].classname === "future") {
            timeArray[i].classList.remove("future");
        } 
        if (timeArray[i].classname === "present") {
            timeArray[i].classList.remove("present");
        } 
        if (timeArray[i].classname === "past") {
            timeArray[i].classList.remove("past");
        }
        if (now > timeArray[i].dataset.hour) {
            timeArray[i].classList.add("past");
        } else if (now === timeArray[i].dataset.hour) {
            timeArray[i].classList.add("present");
        } else {
            timeArray[i].classList.add("future");
        }
    }
}

// saves task onto local storage
function saveTask(event) {
    event.preventDefault();
    var btnTarget = $(event.currentTarget);
    text = btnTarget;
    localStorage.setItem("Schedule", text.val());
}

checkTime();

saveBtn.addEventListener("click", saveTask);