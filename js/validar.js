const inputNombre = document.querySelector('#nombre');
const mensajeErrorMarcaCorto = "Muy corta. Dame un nombre con 4 o mas caracteres solo alfanumericos.";
const inputEmail = document.querySelector('#email');
const inputSelect = document.querySelector('#d'); 
const inputTel = document.querySelector('#telefono'); 


// Quita la validación mientras escribes
inputNombre.addEventListener('input', () => {
    // Quita el mensaje según escribes
    inputNombre.setCustomValidity('');
    // Comprueba si debe validarlo
    inputNombre.checkValidity();
});

// Quita la validación mientras escribes
inputEmail.addEventListener('input', () => {
    // Quita el mensaje según escribes
    inputEmail.setCustomValidity('');
    // Comprueba si debe validarlo
    inputEmail.checkValidity();
});


// Quita la validación mientras escribes
inputSelect.addEventListener('input', () => {
    // Quita el mensaje según escribes
    inputSelect.setCustomValidity('');
    // Comprueba si debe validarlo
    inputSelect.checkValidity();
});

// Quita la validación mientras escribes
inputTel.addEventListener('input', () => {
    // Quita el mensaje según escribes
    inputTel.setCustomValidity('');
    // Comprueba si debe validarlo
    inputTel.checkValidity();
});


// Muestra el mensaje de validación
inputNombre.addEventListener('invalid', () => {
    inputNombre.setCustomValidity('Si no es molesta... ¿me dices tu nombre?');
    if(inputNombre.value === '') {
        // Campo vacío
        inputNombre.setCustomValidity('Si no es molesta... ¿me dices tu nombre?');
    } else {
        // Patrón
        inputNombre.setCustomValidity(mensajeErrorMarcaCorto);
    }
});

// Muestra el mensaje de validación
inputEmail.addEventListener('invalid', () => {
    inputEmail.setCustomValidity('Me parece que esto no es un E-mail');
});



// Quita la validación mientras escribes
inputSelect.addEventListener('input', () => {
    // Quita el mensaje según escribes
    inputSelect.setCustomValidity('');
    // Comprueba si debe validarlo
    inputSelect.checkValidity();
});

// Muestra el mensaje de validación
inputSelect.addEventListener('invalid', () => {
    inputSelect.setCustomValidity('Si no aceptas no puedes continuar');
});

// Muestra el mensaje de validación
inputTel.addEventListener('invalid', () => {
    if(inputTel.value === '') {
        // Campo vacío
        inputTel.setCustomValidity('No puede estar vacio');
    }    
});
