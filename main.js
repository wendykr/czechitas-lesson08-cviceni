
// Objednávka
/*
const button = document.querySelector('button');

const changeTitle = () => {
	document.body.innerHTML += '<p>Objednáno</p>';
}

button.addEventListener('click', changeTitle)


let actualText = true;
const afterClickOrder = () => {

    if(actualText == true) {
        button.textContent = 'Objednáno';
        actualText = false;
    } else {
        button.textContent = 'Objednat';
        actualText = true;
    }
}

button.addEventListener('click', afterClickOrder);
*/

const button = document.querySelectorAll('button');
let actualText = true;

const afterClickOrder = () => {

    const msgElm = document.querySelector('.msg')

    if(actualText == true) {
        button[0].textContent = 'Objednáno';
        msgElm.innerHTML = '<p>Objednáno</p>';
        actualText = false;
    } else {
        button[0].textContent = 'Objednat';
        msgElm.innerHTML = '';
        actualText = true;
    }
}

button[0].addEventListener('click', afterClickOrder);


// Kontrola dostupnosti

const timeIsUp = () => {
    button[1].textContent = 'Objednat';
    button[1].classList.remove('disabled');
}

setTimeout(timeIsUp, 8000);

const changeTextButton = () => {
    button[1].textContent = 'Objednáno';
}

button[1].addEventListener('click', changeTextButton);