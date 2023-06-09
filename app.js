const counter = document.querySelector(".counter");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const toggleSwitch = document.querySelector(".switch-toggle");
const maximum = document.querySelector(".maximum");
const setLimit = document.getElementById("set-limit");
const availableNumber = document.querySelector(".available-number")
const btnBorder = document.getElementsByClassName("btn-border");
const setCount = document.querySelector(".set-count");
const availableText = document.querySelector(".available");
const infoSectionElement = document.querySelector(".info-section")
const settingsSection = document.querySelector(".settings")
const maximumInner = document.getElementById("maximum-inner")
const restrictive = document.querySelector(".restrictive")
const settingsHidden = document.querySelector(".settings-hidden")
const resetHidden = document.querySelector(".reset-hidden")
const resetCounter = document.querySelector(".resetCounter")
const infoHidden = document.querySelector(".info-hidden")

let count = 0;
let currentNumber = 0;

decrementBtnVisibility();

setInterval(function () {
  document.querySelector(".opening").style.display = "none";
  document.querySelector(".main").style.display = "block";
}, 3000);

function toggleMenuInfoSection(e) {
  setVisibilityOfPageTop()
  e.classList.toggle("info-active");
  infoSectionElement.classList.toggle("info-active");
  infoHidden.style.display = "block";
}

function toggleMenu(e) {
  setVisibilityOfPageTop()
  e.classList.toggle("active");
  resetCounter.classList.toggle("active");
  resetHidden.style.display = "block";
}

function toggleMenuSection(e) {
  setVisibilityOfPageTop()
  e.classList.toggle("styles-active");
  settingsSection.classList.toggle("styles-active");
  settingsHidden.style.display = "block";
}

function decrementBtnVisibility() {
  (count <= 0) ? decrement.style.visibility = "hidden" : decrement.style.visibility = "visible";
}

function handleValueChange() {
  count = Number(setLimit.value);
  counter.innerHTML = count;
  currentNumber = Number(maximum.value) - count;
  availableNumber.innerHTML = currentNumber;
}

function resetScreen() {
  resetHidden.style.display = "none";
  count = 0;
  counter.innerHTML = count;
  setLimit.value = "0";
  maximum.value = "0";
  currentNumber = 0;
  availableNumber.innerHTML = "0";
  availableText.innerText = "AVAILABLE"
  decrementBtnVisibility();
}

function cancelScreen() {
  const cancelBtn = [resetHidden, settingsHidden, infoHidden]
  for (const item of cancelBtn) {
    item.style.display = "none"
  }
}

function setVisibilityOfPageTop() {
  const cancelBtn = [resetHidden, settingsHidden, infoHidden]
  for (const item of cancelBtn) {
    item.style.display = "none"
  }
}

function changeStyle(color) {
  document.querySelectorAll(".symbol").forEach((item) => {
    item.style.borderColor = color;
  })
}

function handleAvailableText() {
  (currentNumber <= 0) ? availableText.innerHTML = "LIMIT REACHED" : availableText.innerHTML = "AVAILABLE";
}

setLimit.addEventListener("change", event => {
  handleValueChange()
  handleAvailableText()
})

maximum.addEventListener("change", event => {
  handleValueChange()
  handleAvailableText()
})

increment.addEventListener("click", () => {
  count += 1;
  counter.innerHTML = count;
  currentNumber--
  availableNumber.innerHTML = currentNumber;
  setLimit.value++
  handleAvailableText()
  decrementBtnVisibility();
});

decrement.addEventListener("click", function () {
  count -= 1;
  counter.innerHTML = count;
  currentNumber++;
  availableNumber.innerHTML = currentNumber;
  handleAvailableText()
  decrementBtnVisibility();
});

maximumInner.style.pointerEvents = "none";
maximumInner.style.opacity = "0.2";

document.addEventListener('DOMContentLoaded', () => {
  let checkbox = document.querySelector('.switch-toggle input[type="checkbox"]');

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      maximumInner.style.pointerEvents = "auto";
      maximumInner.style.opacity = "1";
      restrictive.style.visibility = "visible"
    } else {
      maximumInner.style.pointerEvents = "none";
      maximumInner.style.opacity = "0.2";
      restrictive.style.visibility = "hidden"
    }
  });
});



function handleStyleColorChange() {
  if (event.target.matches('.white-btn')) {
    document.body.style.color = "#141516"
    changeStyle("#141516");
    document.querySelector(".approve-btn").style.color = '#141516';
    document.querySelector(".cancel-btn").style.color = '#141516';
  } else {
    document.body.style.color = "#ced4e2"
    changeStyle("#ced4e2");
  }
}

function handleThemeBtn(event) {
  handleStyleColorChange();

  const themeColors = {
    'black-btn': '#141516',
    'white-btn': '#ced4e2',
    'blue-btn': '#004291',
    'pink-btn': '#ed1e78',
    'gray-btn': '#607d8b',
    'purple-btn': '#a701a6',
    'green-btn': '#01ad98',
    'yellow-btn': '#ffac04'
  };

  const btnClass = event.classList;

  let key = '';

  for (let i = 0; i < btnClass.length; i++) {
    if (themeColors.hasOwnProperty(btnClass[i])) {
      key = btnClass[i];
      break;
    }
  }

  settingsSection.style.backgroundColor = themeColors[key];
  document.body.style.backgroundColor = themeColors[key];
  resetCounter.style.backgroundColor = themeColors[key];
  infoSectionElement.style.backgroundColor = themeColors[key];


  if (btnClass === 'white-btn') {
    document.querySelector(".settings-inner").style.color = '#141516';
    resetCounter.style.color = '#141516';
  }

}

document.querySelector(".black-btn").style.border = "2px solid #fff";

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
      settingsSection.style.color = "#141516"
      resetCounter.style.color = "#141516"
    } else if (!event.target.matches('.white-btn')) {
      settingsSection.style.color = "#ced4e2"
      resetCounter.style.color = "#ced4e2"
      document.querySelector(".approve-btn").style.color = '#ced4e2';
      document.querySelector(".cancel-btn").style.color = '#ced4e2';
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

