const nameImput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameImput.addEventListener('input', onNameInputChange);

function onNameInputChange(event) {
    if (event.currentTarget.value !== '') {
        nameOutput.textContent = event.currentTarget.value;
    } else 
    {nameOutput.textContent = 'Anonymous';
}
}