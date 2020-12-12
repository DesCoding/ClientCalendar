$(document).ready(function () {

    //Access moment JS for current time/day
    var now = moment();
    //Format varible to show the current hour within a 24hr cycle
    var currentHour = parseInt(now.format("H"));
   
    //Array of hours to be displayed for each day
    var plannerHours = [
        hourTime = ["6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM"],
        hourData = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
    ];
   
        //array for text in each hour of the calendar
        var savedTextArray = ["", "", "", "", "", "", "", "", "", "", "", "", ""];
    
   
        //pushes the current week, day, and month into currentDay id
        $("#currentDay").text(moment(now).format("dddd MMMM Do"));
       
       
        //displaying time in each block
        function displayTimeblocks(text, data) {
       
            //variable to access html tbody to dislplay the calendar timeblocks
            var calBody = $("tbody");
       
            //for loop to go through the hourTime array
            for (i = 0; i < text.length; i++) {
                //new row for class time-block
                var newRow = $("<tr class='time-block'>");
                //Add a data-type equal to the hour data that corresponds to this timeblock
                newRow.attr("data-type", data[i]);

                //varible to access time data
                var timeData = parseInt(newRow.attr("data-type"));
       
                //new area for table data with the class hour
                var timeTable = $("<td class='hour'>");
                //make the text within this area display its corresponding hour
                timeTable.text(text[i]);
       
                //Create a textarea with the class textarea and data for each hour in the timeblock
                var textarea = $("<textarea class='textarea" + data[i] + "' rows='3' cols='60'>");

                //Create an table data to display the text area
                var textareaDisplay = $("<td class='description '>");
                //append the text area to the textarea display
                textareaDisplay.append(textarea);
       
                //Create an area to display a button and give it a data type that corresponds whith the correct savedTextArray index spot
                var saveBtnDisplay = $("<td class='saveBtn btn' data-type=" + i + ">");
                saveBtnDisplay.append($("<id class='far fa-save fa-3x'>"));
       
                 //Append all items created to the new row
                newRow.append(timeTable, textareaDisplay, saveBtnDisplay);
                calBody.append(newRow);
       
                //Run the ckeckTime and displayStoredText functions
                checkTime(timeData, textarea);
                displayStoredText(textarea);
       
            }
       
            console.log(savedTextArray);
        }
       
        //Eventlistener to saave textarea value when clicking save button
        function saveTextAreaOnClick() {
            $(".saveBtn").on("click", function () {
                
                //when button is clicked checks to variable pulls current time
                var currentTimeData = $(this).parent().attr("data-type");
                //varible to hilight current text
                var clickTextarea = $(".textarea" + currentTimeData);
                //determine datatype of the button clicked = to index spot of SavedTextArray
                var rowToArrayCorrelation = $(this).attr("data-type");
                
                //Save the current textarea value to the corresponding spot on the array
                savedTextArray[rowToArrayCorrelation] = clickTextarea.val();
       
                //store Array to local storage
                storeTextInput();
            });
        }
        
        //Clear all button function
        function clearAllOnClick (){
            $("#clear-btn").on("click", function() {
                //on click clear local storage and refresh the page
                localStorage.clear();
                location.reload();
            })
        }
        
        //display the saved text
        function displayStoredText(textarea) {
            //return local storage string to usable array
            var storedTextInput = JSON.parse(localStorage.getItem("savedtext"));
       
            //if text is saved
            if (storedTextInput != null) {
                //saved text array is equal the stored array
                savedTextArray = storedTextInput;
                //saved text displayed in corresponding textarea
                textarea.val(savedTextArray[i]);
                
            };
        };
        
        //checks to see if text area is in past present or future
        function checkTime(timeData, textarea) {
            
            //changes colors for time based on current time
            if (timeData === currentHour) {
                textarea.addClass("present");
                
            } else if (timeData < currentHour) {
                textarea.addClass("past");
                
            } else {
                textarea.addClass("future");
                
            };
        }
        
        //local storage for arrays of text for events
        function storeTextInput() {
            localStorage.setItem("savedtext", JSON.stringify(savedTextArray));
        };
        
        //run functions for events and clear button
        displayTimeblocks(plannerHours[0], plannerHours[1]);
        saveTextAreaOnClick();
        clearAllOnClick ();
        
        
       });

   