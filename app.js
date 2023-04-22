//variables

let counter = document.querySelector(".counter");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset");
const toggleSwitch = document.querySelector(".switch-toggle");
let maximum = document.querySelector(".maximum");
let setLimit = document.getElementById("set-limit");
let availableNumber = document.querySelector(".available-number")
const btnBorder = document.getElementsByClassName("btn-border");
const setCount = document.querySelector(".set-count");
const availableText = document.querySelector(".available");


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

function handleValueChange() {
  count = Number(setLimit.value);
  counter.innerHTML = count;
  currentNumber = Number(maximum.value) - count;
  availableNumber.innerHTML = currentNumber;


}

function handleAvailableText () {
  if (currentNumber <= 0) {
    availableText.innerHTML = "LIMIT REACHED";
  } else {
    availableText.innerHTML = "AVAILABLE";
  }
}

setLimit.addEventListener("change", function(event) {
  handleValueChange()
  handleAvailableText ()
})

maximum.addEventListener("change", function (event) {
  handleValueChange()
  handleAvailableText()
})

increment.addEventListener("click", function () {
  count += 1;
  counter.innerHTML = count;
  checkBtn();
  currentNumber--
  availableNumber.innerHTML = currentNumber;
  setLimit.value++
  handleAvailableText()
});


decrement.addEventListener("click", function () {
  count -= 1;
  counter.innerHTML = count;
  checkBtn();
  currentNumber++;
  availableNumber.innerHTML = currentNumber;
  handleAvailableText()
});


function toggleMenuInfoSection(e) {
  setVisibilityOfPageTop()
  e.classList.toggle("info-active");
  document.querySelector(".info").classList.toggle("info-active");
  document.querySelector(".info-hidden").style.display = "block";
}


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


document.getElementById("maximum-inner").style.pointerEvents = "none";
document.getElementById("maximum-inner").style.opacity = "0.2";



document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('.switch-toggle input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // do this
      document.getElementById("maximum-inner").style.pointerEvents = "auto";
      document.getElementById("maximum-inner").style.opacity = "1";
      document.querySelector(".restrictive").style.visibility = "visible"
    } else {
      // do that
      document.getElementById("maximum-inner").style.pointerEvents = "none";
      document.getElementById("maximum-inner").style.opacity = "0.2";
      document.querySelector(".restrictive").style.visibility = "hidden"
    }
  });
});



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
  document.querySelector(".info-hidden").style.display = "none";
}

// Color change

function changeStyle(color) {
  document.querySelectorAll(".symbol").forEach((item) => {
    item.style.borderColor = color;
  })


}


function handleStyleColorChange() {
  if (event.target.matches('.white-btn')) {
    document.body.style.color = "#141516"
    changeStyle("#141516");
  } else {
    document.body.style.color = "#ced4e2"
    changeStyle("#ced4e2");
  }
}

function handleThemeBtn() {
  if (event.target.matches('.black-btn')) {
    handleStyleColorChange()
    document.querySelector('.settings').style.backgroundColor = "#141516"
    document.body.style.backgroundColor = "#141516"
    document.querySelector('.resetCounter').style.backgroundColor = "#141516"
    document.querySelector('.info').style.backgroundColor = "#141516"
  } else if (event.target.matches('.white-btn')) {
    handleStyleColorChange()
    document.body.style.backgroundColor = "#ced4e2"
    document.querySelector(".settings-inner").style.color = "#141516"
    document.querySelector('.settings').style.backgroundColor = "#ced4e2"
    document.querySelector('.resetCounter').style.backgroundColor = "#ced4e2"
    document.querySelector('.resetCounter').style.color = "#141516"
    document.querySelector('.info').style.backgroundColor = "#141516"
  } else if (event.target.matches('.blue-btn')) {
    handleStyleColorChange()
    document.querySelector('.settings').style.backgroundColor = "#004291"
    document.body.style.backgroundColor = "#004291"
    document.querySelector('.resetCounter').style.backgroundColor = "#004291"
    document.querySelector('.info').style.backgroundColor = "#004291"
  } else if (event.target.matches('.pink-btn')) {
    handleStyleColorChange()
    document.querySelector('.settings').style.backgroundColor = "#ed1e78"
    document.body.style.backgroundColor = "#ed1e78"
    document.querySelector('.resetCounter').style.backgroundColor = "#ed1e78"
    document.querySelector('.info').style.backgroundColor = "#ed1e78"
  } else if (event.target.matches('.gray-btn')) {
    handleStyleColorChange()
    document.querySelector('.settings').style.backgroundColor = "#607d8b"
    document.body.style.backgroundColor = "#607d8b"
    document.querySelector('.resetCounter').style.backgroundColor = "#607d8b"
    document.querySelector('.info').style.backgroundColor = "#607d8b"
  } else if (event.target.matches('.purple-btn')) {
    handleStyleColorChange()
    document.querySelector('.settings').style.backgroundColor = "#a701a6"
    document.body.style.backgroundColor = "#a701a6"
    document.querySelector('.resetCounter').style.backgroundColor = "#a701a6"
    document.querySelector('.info').style.backgroundColor = "#a701a6"
  } else if (event.target.matches('.green-btn')) {
    handleStyleColorChange()
    document.querySelector('.settings').style.backgroundColor = "#01ad98"
    document.body.style.backgroundColor = "#01ad98"
    document.querySelector('.resetCounter').style.backgroundColor = "#01ad98"
    document.querySelector('.info').style.backgroundColor = "#01ad98"
  } else if (event.target.matches('.yellow-btn')) {
    handleStyleColorChange()
    document.querySelector('.settings').style.backgroundColor = "#ffac04"
    document.body.style.backgroundColor = "#ffac04"
    document.querySelector('.resetCounter').style.backgroundColor = "#ffac04"
    document.querySelector('.info').style.backgroundColor = "#ffac04"
  }
}

// Add event listener to each button
for (let i = 0; i < btnBorder.length; i++) {
  btnBorder[i].addEventListener("click", function () {

    for (let j = 0; j < btnBorder.length; j++) {
      if (btnBorder[j] !== this) {
        btnBorder[j].style.border = "none";
      }
    }
    // Change border style of clicked button
    this.style.border = "2px solid #fff";

    if (event.target.matches('.white-btn')) {
      document.querySelector(".settings").style.color = "#141516"
    } else if (!event.target.matches('.white-btn')) {
      document.querySelector(".settings").style.color = "#ced4e2"
    }
  });

}

function regexControl(event) {
  const inputValue = event.target.value;
  const regex = /^([1-9]\d*|0)$/;
  if (!regex.test(inputValue)) { 
    event.target.value = inputValue.replace(/[^\d]/g, '');
  }
}

setLimit.addEventListener('input', regexControl);
maximum.addEventListener('input', regexControl);

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
