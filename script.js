var moment = moment().format("MM ddd, YYYY HH:mm:ss a");
var hourText = ['9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var hour = ['9','10', '11', '12', '13', '14', '15', '16', '17'];
var currentHour = moment.substring(13,15);


//grabs any information within local storage.
for (i = 0; i < hour.length; i++){
    var value = localStorage.getItem([i]);
    var contentText = ($('input')[i]);
    $(contentText).val(value);
}

// adds edit.png to save content column.
for (i = 0; i < hour.length; i++){
    var index = $('.save-content')[i];
    $(index).prepend(`<img id="save-image" src="assets/icons8-save-25.png" ></img>`)
    
}

// update the text field of the Hour of the day div.
for (i = 0; i < hour.length; i++){
    var index = $('.time-col')[i]
    $(index).text(hourText[i])
}

// adds the attribute data hour = hour[i] to form control class.
for (i = 0; i < hour.length; i++){
    var indexText = $('.form-control')[i]
    $(indexText).attr('data-hour', hour[i]);
    
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

//set background color of content box based on current hour.
function contentColor (){
    for (i = 0; i < hour.length; i++){
        var formControl = $('.form-control')[i];
        var dataHour = parseInt($(formControl).attr('data-hour'));
        var formControlColor = $('.form-control')[i];
        if (dataHour <= currentHour){
            $(formControlColor).css('background-color', '#e64545');
        }
    }
}

// calls contentColor function every second.
setInterval(contentColor, 1000);

