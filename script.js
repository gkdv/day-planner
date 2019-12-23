var moment = moment().format('YYYY MM DD');
var hour = ['9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

// adds the attribute data hour = number for a unique identifier
for (i = 0; i < hour.length; i++){
    var index = $('.input-group-prepend')[i]
    $(index).attr('data-hour', [i]);
}
