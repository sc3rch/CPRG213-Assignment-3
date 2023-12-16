/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

var costPerDay = 35, numberOfDays = -1, totalCost = 0;
// initialized default cost to 35 as full button starts clicked
// number of days selected defaulted to -1 due to design of array to correct logic in calculateTotal()
// totalCost initialized to 0 for display



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

var monday = document.getElementById('monday'),
    tuesday = document.getElementById('tuesday'),
    wednesday = document.getElementById('wednesday'),
    thursday = document.getElementById('thursday'),
    friday = document.getElementById('friday'),
    fullDay = document.getElementById('full'),
    halfDay = document.getElementById('half');

var clickElements = [monday, tuesday, wednesday, thursday, friday, fullDay, halfDay];

function changeClass() {
    this.classList.toggle('clicked');
    totalCost = calculateTotal(numberOfDays, costPerDay);
    displayCost(totalCost);
}
clickElements.forEach(element => {
    element.addEventListener('click', changeClass);
});

function calculateTotal(numberOfDays, costPerDay) {
    clickElements.forEach(element => {
        if (element.classList.contains('clicked')) {
            numberOfDays += 1;
        }
    });
    totalCost = numberOfDays * costPerDay;
    return totalCost;
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

var clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', clearClicks);

function clearClicks() {
    clickElements.forEach(element => {
        element.classList.remove('clicked');
    });
    fullDay.classList.add('clicked');
    totalCost = calculateTotal(numberOfDays, costPerDay);
    displayCost(totalCost);
}



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


// partially implemented above in clickElements array
function onHalfClick() {
    halfDay.classList.add('clicked');
    fullDay.classList.remove('clicked');
    costPerDay = 20;
    totalCost = calculateTotal(numberOfDays, costPerDay);
    displayCost(totalCost);
}
halfDay.addEventListener('click', onHalfClick);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


// partially implemented above in clickElements array
function onFullClick() {
    fullDay.classList.add('clicked');
    halfDay.classList.remove('clicked');
    costPerDay = 35;
    totalCost = calculateTotal(numberOfDays, costPerDay);
    displayCost(totalCost);
}
fullDay.addEventListener('click', onFullClick);



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

// implemented throughout code to activate on event listener functions
function displayCost(totalCost) {
    document.getElementById('calculated-cost').innerHTML = totalCost;
}