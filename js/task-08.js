const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();



    console.log('this is form submit');




    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;
    // console.log('email:', mail, 'password:', password);
    console.log(`email: ${mail} password: ${password}`);

}