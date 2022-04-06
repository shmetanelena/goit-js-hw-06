const input = document.querySelector('#validation-input');
const validLength = parseInt(input.dataset.length);

function setInputClass() {
    const isValid = input.value.length === validLength;
    input.classList.remove(isValid ? 'invalid' : 'valid');
    input.classList.add(isValid ? 'valid' : 'invalid');
}
input.addEventListener('blur', setInputClass);
setInputClass();
