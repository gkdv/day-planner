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

// adds edit.png to save content column.
for (i = 0; i < hour.length; i++){
    var index = $('.save-content')[i];
    $(index).prepend(`<img id="save-image" src="assets/icons8-save-25.png" ></img>`)
    
    // index.style.width = '50px';
    // index.style.height = '50px';

}