const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('keyup', () => {
    this.inputValueChanged();
});

input.addEventListener('focusout', () => {
    if (input.value.length == 0) {
        input.classList.remove('danger');
    }
});

function inputValueChanged() {
    if (this.validateInput()) {
        input.classList.remove('danger');
        this.convertToBinary();
    } else {
        input.classList.add('danger');
        output.value = '';
    }
}

function validateInput() {
    const allowedValues = ['0', '1'];

    if (input.value.split('').some((v) => !allowedValues.includes(v))) {
        return false;
    } else if (input.value.length == 0 || input.value.length > 8) {
        return false;
    } else {
        return true;
    }
}

function convertToBinary() {
    let result = 0;
    const array = input.value.split('');
    array.reverse();

    for (let i = 0; i < array.length; i++) {
        result += +array[i] * Math.pow(2, i);
    }

    output.value = result;
}
