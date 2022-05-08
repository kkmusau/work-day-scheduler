$('#currentDay').text(moment().format('lll'));

let hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

let description = $('.description');
let currentHour = moment().hour();


for (var i = 0; i < 9; i++) {
    if (currentHour === hours [i]) {
        document.getElementById(i).classList.add('present');
    }
    if (currentHour < hours[i]) {
        document.getElementById(i).classList.add('past');
    }
    if (currentHour < hours[i]) {
        document.getElementById(i).classList.add('future');
    }
}