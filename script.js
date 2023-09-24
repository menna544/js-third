const plusBtn = document.querySelector('.plus-btn')
const count = document.querySelector('.count')
const minus = document.querySelector('.minus-btn')
let counter = 1;
plusBtn.addEventListener("click", function () {
    if (counter < 9) {
        counter++;
    }
    count.textContent = counter;
})
minus.addEventListener("click", function () {
    if (counter > 1) {
        counter--;
    }
    count.textContent = counter;
})

