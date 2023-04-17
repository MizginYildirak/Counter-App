let counter = document.querySelector(".counter");
let increment = document.querySelector(".increment");
let decrement = document.querySelector(".decrement");

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
