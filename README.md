# Daily Planner

This calendar features HTML and CSS powered by jQuery and uses the Moment.js library to work with date and time.  Users can save events for each hour of the day; to do this, click on colored textarea corresponding to desired time.  Type whichever event or task you would like to schedule, then click the save button to the right of text box.  

## Your Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use a library like [Moment.js](https://momentjs.com/) to work with dates and times. `Moment.js` has historically been the most popular date/time library but is no longer supported by its developers. However, you can still use it for this project, or you can look into one of the following alternatives:

  * [Luxon](https://moment.github.io/luxon/)

  * [Day.js](https://day.js.org/)

  * [date-fns](https://date-fns.org/)

  * [js-Joda](https://js-joda.github.io/js-joda/)

Whichever library you choose, be sure to read the documentation carefully!


## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```


## Acceptance Criteria

```
1.  create html and link to moment.js in body of html https://momentjs.com/downloads/moment.js

2.  bootstrap grids - 
<div class="container-fluid">

Main Body:
  <!-- A fluid container that uses the full witdh -->
</div>

internal columns (add 8 times to simulate 8 hr working day):
<div class="container">
  <div class="row">
    <div class="col-2">
      <!-- Content -->
    </div>
    <div class="col-2">
      <!-- Content -->
    </div>
    <div class="col-8">
      <!-- Content -->
    </div>
  </div>
</div>

3.  Update bootstrap grids with buttons in third column to save user input to local storage.

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner

4.  Upon opening the planner, when user scrolls past time is indicated by color changes to cells - use moment.js for date/time logic.

THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future

5.  when user clicks in block they are able to add text to create an event.  Maybe using JQuery???

WHEN I click into a time block
THEN I can enter an event

6.  create buttons to save - JQuery for buttons and JSON for local storage

WHEN I click the save button for that time block
THEN the text for that event is saved in local storage

7.  When page is refreshed, the event is saved and visble.  See activity 25 on unit 4.
WHEN I refresh the page
THEN the saved events persist
```


## Mock-Up

The following animation demonstrates the application functionality:

![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)


## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * Uses the Moment.js library to work with date and time

### Deployment: 32%

* Application deployed at live URL

* Application loads with no errors

* Application GitHub URL submitted

* GitHub repo contains application code

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate

* Application user interface style is clean and polished

* Application resembles the mock-up functionality provided in the homework instructions

### Repository Quality: 13%

* Repository has a unique name

* Repository follows best practices for file structure and naming conventions

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages

* Repository contains quality README file with description, screenshot, and link to deployed application


## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
