
const app = document.getElementById('app');


const container = document.createElement('div');
container.classList.add('container');

const title = document.createElement('h1');
title.textContent = 'Counter';


const counter = document.createElement('span');
counter.id = 'counter';
counter.textContent = '0';


const btnContainer = document.createElement('div');
btnContainer.classList.add('btn-container');


const decreaseBtn = document.createElement('button');
decreaseBtn.textContent = '-';
decreaseBtn.classList.add('btn');

const increaseBtn = document.createElement('button');
increaseBtn.textContent = '+';
increaseBtn.classList.add('btn');

const resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset';
resetBtn.classList.add('btn');


btnContainer.appendChild(decreaseBtn);
btnContainer.appendChild(resetBtn);
btnContainer.appendChild(increaseBtn);
container.appendChild(title);
container.appendChild(counter);
container.appendChild(btnContainer);
app.appendChild(container);


let count = 0;

function updateCounter() {
    counter.textContent = count;
    counter.classList.add('change');
    setTimeout(() => {
        counter.classList.remove('change');
    }, 200);
}

increaseBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

decreaseBtn.addEventListener('click', () => {
    count--;
    updateCounter();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
});
