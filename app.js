let counter = document.querySelector(".counter");
let increment = document.querySelector(".increment");
let decrement = document.querySelector(".decrement");
let reset = document.querySelector(".reset");

let count = 0;
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

increment.addEventListener("click", function () {
  count += 1;
  counter.innerHTML = count;
  checkBtn();
});

decrement.addEventListener("click", function () {
  count -= 1;
  counter.innerHTML = count;
  checkBtn();
});

function toggleMenu(e) {
  e.classList.toggle("active");
  document.querySelector(".resetCounter").classList.toggle("active");
  document.querySelector(".reset-hidden").style.display = "block";
}


function toggleMenuSection(e) {
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
}



