let counterValue = 0;

const counterValueEl = document.querySelector('#value');
const counterValueDecrement = document.querySelector('[data-action="decrement"]');
const counterValueIncrement = document.querySelector('[data-action="increment"]');

counterValueDecrement.addEventListener('click', decreaseValue);
counterValueIncrement.addEventListener('click', increaseValue);

function decreaseValue() {
    counterValue -= 1;
        counterValueEl.textContent = counterValue;
}
function increaseValue() {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
}