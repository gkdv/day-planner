var moment = moment().format('YYYY MM DD');
var hour = ['9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

// adds the attribute data hour = number for a unique identifier
for (i = 0; i < hour.length; i++){
    var index = $('.individual-time')[i]
    $(index).attr('data-hour', [i]);
}

// update the text field of the Hour of the day div.
for (i = 0; i < hour.length; i++){
    var index = $('.time-col')[i]
    $(index).text(hour[i])
}