// these variable will be given by user
let inputYear;
let inputMonth;
let inputDay;

const firstLine = document.getElementById("firstLine_daysOutput");
const secondLine = document.getElementById(
  "secondLine_hoursOutput_minutesOutput"
);
const thirdLine = document.getElementById("thirdLine_secondsOutput");
const button = document.getElementById("button");

// f() onclick "Calculate" button
function calculate() {
  try {
    // resets previous input without
    // breaking the whole code
    reset();
  } catch (err) {
    console.log(err);
  }

  const today = getToday();
  const birthday = getBirthday();

  const seconds = (today.getTime() - birthday.getTime()) / 1000;

  const minutes = seconds / 60;

  const hours = seconds / 3600;

  const days = seconds / 86400;

  setLines(days, hours, minutes, seconds);

  changeButton();
}

function getToday() {
  d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth();
  const day = d.getDate();
  return new Date(year, month, day);
}

function getBirthday() {
  const input = document.getElementById("myDate").value;
  return separateTimeFactors(input);
}

// this f() creates a Date obj from the string extracted in the HTML input
function separateTimeFactors(string) {
  const stringArray = string.split("-");
  const birthday = new Date(stringArray[0], stringArray[1], stringArray[2]);
  return birthday;
}

function setLines(days, hours, minutes, seconds) {
  firstLine.innerText = `you have been living for ${Math.floor(days)} days,`;
  secondLine.innerText = `${hours} hours, ${minutes} minutes,`;
  thirdLine.innerText = `or, if you'd rather, ${seconds} seconds!`;
} //jesus

function changeButton() {
  button.innerText = "do it again";
  button.setAttribute("onclick", "reset()");
}

function reset() {
  firstLine.innerText = `ya're back for more`;
  secondLine.innerText = `AGE CALCULATION,`;
  thirdLine.innerText = `Aren't ya?`;
  button.innerText = "Calculate";
  button.setAttribute("onclick", "calculate()");
}
