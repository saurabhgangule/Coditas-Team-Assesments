const counter = document.getElementById('count');

const mainNumberEl = document.getElementById('main-number');
const btnOneEl = document.getElementById('button-one');
const btnTwoEl = document.getElementById('button-two');
const btnThreeEl = document.getElementById('button-three');
const btnFourEl = document.getElementById('button-four');
const btnsEl = document.querySelectorAll('button.button');

let count = 0;
btnsEl.forEach((element) => {
    element.addEventListener('click', () => {
        const btnValue = Number(element.textContent);
        const mainNumber = Number(mainNumberEl.textContent);
        if (mainNumber % btnValue === 0 && count < 10) {
            mainNumberEl.textContent = `${Math.floor(Math.random() * 90 + 10)}`;
            element.textContent = `${Math.floor(Math.random() * 10)}`;
            count += 1;
            counter.innerText = `${count}/10`;
        } else {
            (count === 10) ? disableBtnValues() : changeBtnValues();
        }
    })
})

const changeBtnValues = () => {
    btnOneEl.textContent = `${Math.floor(Math.random() * 10)}`;
    btnTwoEl.textContent = `${Math.floor(Math.random() * 10)}`;
    btnThreeEl.textContent = `${Math.floor(Math.random() * 10)}`;
    btnFourEl.textContent = `${Math.floor(Math.random() * 10)}`;
}

const disableBtnValues = () => {
    btnOneEl.setAttribute('disabled', true);
    btnTwoEl.setAttribute('disabled', true);
    btnThreeEl.setAttribute('disabled', true);
    btnFourEl.setAttribute('disabled', true);
}

