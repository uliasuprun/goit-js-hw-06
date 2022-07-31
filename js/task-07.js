const inputFontSize = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

inputFontSize.addEventListener('input', onControlInput);

function onControlInput(event) {
    spanText.style.fontSize = String(event.currentTarget.value) +'px';
}
