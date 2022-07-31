
const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', onInputBlur);

function onInputBlur(event) {

const validationInputElements = event.currentTarget.elements;
console.dir(validationInputElements);

const inputLength = validationInput.dataset.length; 
    if (event.currentTarget.value.length === Number(inputLength)) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
        return;
    } else {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
        alert("Please enter 6 symbols");
    }
}
