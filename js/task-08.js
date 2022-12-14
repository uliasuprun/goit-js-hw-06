const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;
    console.log({mail, password});

    if (mail && password !== '') {
        event.currentTarget.reset();
    } else {
        alert('Все поля должны быть заполнены')
    }
}