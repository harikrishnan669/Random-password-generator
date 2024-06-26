let lengthslider = document.getElementById('lengthslider');
let slidervalue = document.getElementById('slidervalue');

slidervalue.textContent = lengthslider.value;

lengthslider.addEventListener("input", () => {
    slidervalue.textContent = lengthslider.value;
});

let checkboxes = document.querySelectorAll('.checkbox');

Array.from(checkboxes).forEach(element => {
    element.addEventListener('click', (e) => {
        let checkboxInput = e.target.nextElementSibling.nextElementSibling;
        if (e.target.innerText === 'radio_button_unchecked') {
            e.target.innerText = 'task_alt';
            checkboxInput.checked = true;
        } else {
            e.target.innerText = 'radio_button_unchecked';
            checkboxInput.checked = false;
        }
    });
});

let includelabels = document.querySelectorAll('.row label');

Array.from(includelabels).forEach(element => {
    element.addEventListener('click', (e) => {
        let checkboxIcon = e.target.previousElementSibling;
        let checkboxInput = e.target.nextElementSibling;
        if (checkboxIcon.innerText === 'radio_button_unchecked') {
            checkboxIcon.innerText = 'task_alt';
            checkboxInput.checked = true;
        } else {
            checkboxIcon.innerText = 'radio_button_unchecked';
            checkboxInput.checked = false;
        }
    });
});

let generatebutton = document.getElementById('generatebutton');
let password = document.getElementById('password');
let copyIcon = document.querySelector('.passwordbox .material-symbols-outlined');

generatebutton.addEventListener('click', function () {
    let length = lengthslider.value;

    let uppercase = document.getElementById('Uppercase').checked;
    let lowercase = document.getElementById('Lowercase').checked;
    let numbers = document.getElementById('Numbers').checked;
    let symbols = document.getElementById('Symbols').checked;

    let password_generated = generatepassword(length, uppercase, lowercase, numbers, symbols);
    password.value = password_generated;
});

copyIcon.addEventListener('click', function () {
    password.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
});

function generatepassword(length, uppercase, lowercase, numbers, symbols) {
    let charset = "";
    let string = "";

    if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) charset += "0123456789";
    if (symbols) charset += "!@#$%^&*()";

    for (let i = 0; i < length; i++) {
        string += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return string;
}
