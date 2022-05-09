$('#currentDay').text(moment().format('lll'));

let hours = [9, 10, 11, 12, 13, 14, 15, 16, 17,];

let description = $('.description');
let currentHour = moment().hour();


for (var i = 0; i < 9; i++) {
    if (currentHour === hours [i]) {
        document.getElementById(i).classList.add('present');
    }
    if (currentHour > hours[i]) {
        document.getElementById(i).classList.add('past');
    }
    if (currentHour < hours[i]) {
        document.getElementById(i).classList.add('future');
    }
}


$('.saveBtn').on('click', function () {
    let text = $(this).siblings('.input').val();
    let time = $(this).siblings('.hour').text();
    
    localStorage.setItem(time, text);
    console.log('test');
    localStorage.setItem(time, JSON.stringify(text));
});


for (var i = 0; i <9; i++) {
    $(`.hour-${i}`).val(localStorage.getItem(`hour-${i}`));
}
