//variables

let counter = document.querySelector(".counter");
let increment = document.querySelector(".increment");
let decrement = document.querySelector(".decrement");
let reset = document.querySelector(".reset");
let toggleSwitch = document.querySelector(".switch-toggle");
let maximum = document.querySelector(".maximum");
let availableNumber = document.querySelector(".available-number")

console.log(availableNumber)
let count = 0;
let currentNumber = 0;
checkBtn();

// Opening Page

setInterval(function () {
  document.querySelector(".opening").style.display = "none";
  document.querySelector(".main").style.display = "block";
}, 3000);

function checkBtn() {
  if (count == 0) {
    document.querySelector(".decrement").style.visibility = "hidden";
  } else if (count > 0) {
    document.querySelector(".decrement").style.visibility = "visible";
  }
}

maximum.addEventListener("change", function (event) {
  currentNumber = event.target.value;
  availableNumber.innerHTML = currentNumber;
  currentNumber.style.color = "white";
})

increment.addEventListener("click", function () {

  count += 1;

  counter.innerHTML = count;
  checkBtn();
  currentNumber--
  availableNumber.innerHTML = currentNumber;

  if (currentNumber < 0) {
    availableNumber.style.color = "red"
  }
});


decrement.addEventListener("click", function () {
  count -= 1;
  counter.innerHTML = count;
  checkBtn();
  currentNumber++;
  availableNumber.innerHTML = currentNumber;

  if (currentNumber == 0) {
    availableNumber.style.color = "white";
  }
});


function toggleMenu(e) {
  setVisibilityOfPageTop()
  e.classList.toggle("active");
  document.querySelector(".resetCounter").classList.toggle("active");
  document.querySelector(".reset-hidden").style.display = "block";
}


function toggleMenuSection(e) {
  setVisibilityOfPageTop()
  e.classList.toggle("styles-active");
  document.querySelector(".settings").classList.toggle("styles-active");
  document.querySelector(".settings-hidden").style.display = "block";
}



function closeScreen() {
  document.querySelector(".reset-hidden").style.display = "none";
  count = 0;
  counter.innerHTML = count;
  checkBtn();
}


function cancelScreen() {
  document.querySelector(".reset-hidden").style.display = "none";
  document.querySelector(".settings-hidden").style.display = "none"; //buraya bak
}

function setVisibilityOfPageTop() {
  document.querySelector(".settings-hidden").style.display = "none";
  document.querySelector(".reset-hidden").style.display = "none";
}

// Color change

function handleThemeBtn() {
  if (event.target.matches('.black-btn')) {
    document.body.style.backgroundColor = "#141516"
  } else if (event.target.matches('.white-btn')) {
    document.body.style.backgroundColor = "#ced4e2"
  } else if (event.target.matches('.blue-btn')) {
    document.body.style.backgroundColor = "#004291"
  } else if (event.target.matches('.pink-btn')) {
    document.body.style.backgroundColor = "#ed1e78"
  } else if (event.target.matches('.gray-btn')) {
    document.body.style.backgroundColor = "#607d8b"
  } else if (event.target.matches('.purple-btn')) {
    document.body.style.backgroundColor = "#a701a6"
  } else if (event.target.matches('.green-btn')) {
    document.body.style.backgroundColor = "#01ad98"
  } else if (event.target.matches('.yellow-btn')) {
    document.body.style.backgroundColor = "#ffac04"
  }
}

// const colorButtons = {
//   "black-btn": "#141516",
//   "white-btn": "#ced4e2",
//   "blue-btn": "#004291",
//   "pink-btn": "#ed1e78",
//   "gray-btn": "#607d8b",
//   "purple-btn": "#a701a6",
//   "green-btn": "#01ad98",
//   "yellow-btn": "#ffac04",
// }

// colorButtons["yellow.btn"] 
