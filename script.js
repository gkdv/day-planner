var moment = moment().format('YYYY MM DD');
var hour = ['9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

// adds edit.png to save content column.
for (i = 0; i < hour.length; i++){
    var index = $('.save-content')[i];
    $(index).prepend(`<img id="save-image" src="assets/icons8-save-25.png" ></img>`)
    
}

// update the text field of the Hour of the day div.
for (i = 0; i < hour.length; i++){
    var index = $('.time-col')[i]
    $(index).text(hour[i])
}

// adds the attribute data hour = i to form control class.
for (i = 0; i < hour.length; i++){
    var indexText = $('.form-control')[i]
    $(indexText).attr('data-hour', [i]);
    
}
// adds the attribute data hour = i to img element.
for (i = 0; i < hour.length; i++){
    var indexSave = $('img')[i]
    $(indexSave).attr('data-hour', [i]);
}


// on click event for saving text to local memory.
$('img').on('click', function(){
    var key = $(this).attr('data-hour');
    var value = $(this).parent().siblings('.content-box').children().val();
    localStorage.setItem(key, value)
})