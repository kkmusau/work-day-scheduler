$('#currentDay').text(moment().format('ll'));

const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

let description = $('.description');
let currentHour = moment().hour();
let saveBtn = document.querySelectorAll(".saveBtn");

for (var i = 9; i < 18; i++) {
    if (currentHour === hours [i]) {
        console.log(i);
        document.getElementById(i).classList.add('present');
    }
    if (currentHour < hours[i]) {
        console.log(i);
        document.getElementById(i).classList.add('past');
    }
    if (currentHour < hours[i]) {
        console.log(i);
        document.getElementById(i).classList.add('future');
    }
}