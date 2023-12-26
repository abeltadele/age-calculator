const age = document.getElementById('age');
const btn = document.getElementById('btn');
const dayOutput = document.getElementById('dayOutput');

function btnClick() {
  const inputValue = new Date(document.getElementById('inputValue').value);
  const currentDate = new Date();
  const timeDifference = currentDate - inputValue;

  // Calculate the age in years
  const ageInYears = Math.floor(timeDifference / (365.25 * 24 * 60 * 60 * 1000));

  // Calculate the remaining days
  const remainingDays = Math.floor((timeDifference % (365.25 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

  // Display the age and remaining days with red color
  dayOutput.innerHTML = `Remaining days: <span style="color: red;">${remainingDays}</span>`;
  age.innerHTML = `Your age is <span style="color: red;">${ageInYears} </span>`;


  // Output the day of the week for the input date
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  dayOutput.innerHTML += `, Your day: <span style='color: red;'> ${daysOfWeek[inputValue.getDay()]}</span>`;
}

