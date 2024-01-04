//this is the JS file for the final project

/* Execute the function to run and display the time and countdown clocks */
runClock();
setInterval("runClock()", 1000);

runCountdown();
setInterval("runCountdown()", 1000);

/* Function to create and run the countdown clock */
function runClock() {


    /* Store the current date and time */
    let currentDay = new Date();

    let dateStr = currentDay.toLocaleDateString();
    let timeStr = currentDay.toLocaleTimeString();

    /* Display the current date and time */
    document.getElementById("dateNow").innerHTML =
        dateStr + "<br />" + timeStr;
}

function runCountdown() {

        /* Store the current date and time */
    let currentDay = new Date();

    /* Calculate the days until January 1st*/
    let bookDay = new Date("April 23, 2024");
    let nextYear = currentDay.getFullYear();
    bookDay.setFullYear(nextYear);
    let daysLeft = (bookDay - currentDay) / (1000 * 60 * 60 * 24)

    /* Calculate the hours left in the current day */
    let hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

    /* Calculate the minutes and seconds left in the current hour */
    let minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
    let secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

    /* Display the time left until New Year's Eve */
    document.getElementById("days").textContent = Math.floor(daysLeft);
    document.getElementById("hrs").textContent = Math.floor(hrsLeft);
    document.getElementById("mins").textContent = Math.floor(minsLeft);
    document.getElementById("secs").textContent = Math.floor(secsLeft);
}

