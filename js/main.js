let count = 0;

let inputNumber = document.getElementById('count-by');
let buttonPlus = document.getElementById('button-plus');
let buttonMinus = document.getElementById('button-minus');
let countDisplay = document.getElementById('count');

buttonPlus.addEventListener('click', addTo);
buttonMinus.addEventListener('click', subtractFrom);

function addTo() {
    let countBy = inputNumber.value;
    count = count + parseInt(countBy);
    countDisplay.removeChild(countDisplay.childNodes[0]);
    countDisplay.innerHTML = `<span>${count}</span>`;
    if (count >= 0) countDisplay.style = "color: black;"
}

function subtractFrom() {
    let countBy = inputNumber.value;
    count = count - parseInt(countBy);
    countDisplay.removeChild(countDisplay.childNodes[0]);
    countDisplay.innerHTML = `<span>${count}</span>`;
    if (count < 0) countDisplay.style = "color: red;"
}