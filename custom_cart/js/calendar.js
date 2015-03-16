
jQuery(document).ready(function(){

    var start_date = jQuery( "input[id^=dataset_start_date]" ).val();
    var end_date = jQuery( "input[id^=dataset_end_date]" ).val();

    //TODO: Get start and end date from dataset node
    var default_start_date = start_date;
    var default_end_date = end_date;

    jQuery( "input[id^=edit-items-startdate]" ).datepicker( { "setDate": default_start_date, dateFormat: "yy-mm-dd", minDate: start_date, maxDate: end_date} );
    jQuery( "input[id^=edit-items-enddate]" ).datepicker( {  "setDate": default_end_date, dateFormat: "yy-mm-dd", minDate: start_date, maxDate: end_date} );

});
