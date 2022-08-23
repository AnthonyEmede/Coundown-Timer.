let targetDate = new Date("Feb 25, 2023 00:00:00").getTime();

let settingTimer = setInterval(() => {
    let startDate = new Date().getTime();
      // the difference between the targetDate and the date the countdown began.
    let timeLeft = targetDate - startDate;

      // converting the differnce of time in millieseconds into days, hours, minutes and seconds.
    const second = 1000;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;

    let daysLeft = Math.trunc(timeLeft / day);
    let hoursLeft = Math.trunc((timeLeft % day) / hour);
    let minutesLeft = Math.trunc((timeLeft % hour) / minute);
    let secondsLeft = Math.trunc((timeLeft % minute) / second);

      // referencing the <p> tags and assingning them to their respective innerHtml.
    let displayedDays = document.getElementById("days");
    let displayedHours = document.getElementById("hours");
    let displayedMinutes = document.getElementById("minutes");
    let displayedSeconds = document.getElementById("seconds");

    displayedDays.innerHTML = daysLeft + "<span>days</span>";
    displayedHours.innerHTML = hoursLeft + " <span>hours</span>";
    displayedMinutes.innerHTML = minutesLeft + "<span>minutes</span>";
    displayedSeconds.innerHTML = secondsLeft + "<span>seconds</span>";

      // when the countdown elapses, the if comditional is executed.
    if (timeLeft <= 0) {
       let timer = document.getElementsByClassName("timer");
    //    document.write("TIME UP!");
       timer.innerHTML = "TIME UP!"
    } 
}, 1000)

