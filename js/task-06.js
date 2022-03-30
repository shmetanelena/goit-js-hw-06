const input = document.querySelector('#validation-input');
const length = parseInt(input.dataset.length);

input.addEventListener('blur', event => {
    if (input.value.length === length) {
        // VALID
        if (input.classList.contains('invalid')) {
            input.classList.remove('invalid');
        }
        if (!input.classList.contains('valid')) {
            input.classList.add('valid');
        }
    } else {
        // INVALID
        if (input.classList.contains('valid')) {
            input.classList.remove('valid');
        }
        if (!input.classList.contains('invalid')) {
            input.classList.add('invalid');
        }
    }
});

//======

//input.addEventListener('blur', event => setValidity(input.value.length === length)};

function setValidity(valid) {
    const unusedStyleClass = valid ? 'invalid' : 'valid';
    if (input.classList.contains(unusedStyleClass)) {
        input.classList.remove(unusedStyleClass);
    }

    const needStyleClass = valid ? 'valid' : 'invalid';
    if (!input.classList.contains(needStyleClass)) {
        input.classList.add(needStyleClass);
    }
}
/*
valid invalid


+valid
-invalid

+invalid
-valid

*/
