let counter = document.querySelector('.counter');
let increment = document.querySelector('.increment');
let decrement = document.querySelector('.decrement')

let count = 0;

// Opening Page

setInterval(function () {
    document.querySelector('.opening').style.display = 'none';
    document.querySelector('.main').style.display = 'block';
}, 3000)

increment.addEventListener('click', function() {
    count += 1;
    counter.innerHTML = count;
})

decrement.addEventListener('click', function() {
    count -= 1;
    counter.innerHTML = count;
})