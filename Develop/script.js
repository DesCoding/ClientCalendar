$(document).ready(function () {

    //Access moment JS for current time/day
    var now = moment();
    //Format varible to show the current hour within a 24hr cycle
    var currentHour = parseInt(now.format("H"));
   
    //Array of hours to be displayed for each day
    var plannerHours = [
        displayData = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM"],
        hourData = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
    ];
   
    

   