//variables

let counter = document.querySelector(".counter");
let increment = document.querySelector(".increment");
let decrement = document.querySelector(".decrement");
let reset = document.querySelector(".reset");
let toggleSwitch = document.querySelector(".switch-toggle");
let maximum = document.querySelector(".maximum");
let availableNumber = document.querySelector(".available-number")
const btnBorder = document.getElementsByClassName("btn-border");



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
      currentNumber = 0;
      availableNumber.innerHTML = currentNumber;
      availableNumber.style.color = "white";
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
    document.querySelector('.settings').style.backgroundColor = "#141516"
    document.body.style.backgroundColor = "#141516"

    handleStyleColorChange()

  } else if (event.target.matches('.white-btn')) {
    document.body.style.backgroundColor = "#ced4e2"
    handleStyleColorChange()
    document.querySelector(".settings-inner").style.color = "#141516"
    document.querySelector('.settings').style.backgroundColor = "#ced4e2"


  } else if (event.target.matches('.blue-btn')) {
    handleStyleColorChange()
    document.querySelector('.settings').style.backgroundColor = "#004291"
    document.body.style.backgroundColor = "#004291"
    document.querySelector('.resetCounter').style.backgroundColor = "#004291"
  } else if (event.target.matches('.pink-btn')) {
    handleStyleColorChange()
    document.querySelector('.settings').style.backgroundColor = "#ed1e78"
    document.body.style.backgroundColor = "#ed1e78"
    document.querySelector('.resetCounter').style.backgroundColor = "#ed1e78"
  } else if (event.target.matches('.gray-btn')) {
    handleStyleColorChange()
    document.querySelector('.settings').style.backgroundColor = "#607d8b"
    document.body.style.backgroundColor = "#607d8b"
    document.querySelector('.resetCounter').style.backgroundColor = "#607d8b"
  } else if (event.target.matches('.purple-btn')) {
    handleStyleColorChange()
    document.querySelector('.settings').style.backgroundColor = "#a701a6"
    document.body.style.backgroundColor = "#a701a6"
    document.querySelector('.resetCounter').style.backgroundColor = "#a701a6"
  } else if (event.target.matches('.green-btn')) {
    handleStyleColorChange()
    document.querySelector('.settings').style.backgroundColor = "#01ad98"
    document.body.style.backgroundColor = "#01ad98"
    document.querySelector('.resetCounter').style.backgroundColor = "#01ad98"
  } else if (event.target.matches('.yellow-btn')) {
    handleStyleColorChange()
    document.querySelector('.settings').style.backgroundColor = "#ffac04"
    document.body.style.backgroundColor = "#ffac04"
    document.querySelector('.resetCounter').style.backgroundColor = "#ffac04"
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
