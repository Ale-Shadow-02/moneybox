

let form = document.querySelector('.form');
let name = document.querySelector('.name');
let number = document.querySelector('.number');
let date = document.querySelector('.date');
let startAmount = document.querySelector('.start_amount');
let percentInput = document.querySelector('.percent__input');
let monthAmount = document.querySelector('.month_amount');
let formDelete = document.querySelectorAll('.form__delete');
let addForm = document.querySelector('.add__form');
let container = document.querySelector('.container');
let formContent = form.innerHTML;
let num = 2;

function addNewForm() {
    const divForm = document.createElement('div');
    divForm.classList.add('form');
    divForm.setAttribute("id", num);
    divForm.innerHTML = formContent;
    container.append(divForm);
    num++;
    formDelete.addEventListener('click', () => {
        deleteForm();
    });
    
};

function deleteForm() {
    form.remove();
};

addForm.addEventListener('click', () => {
    addNewForm();
});

formDelete.forEach(el => {
    el.addEventListener('click', () => {
        deleteForm();
    })
});


    let nowDate = Date.now();
    console.log((nowDate/86400000)/365);
    let valueData = Date.parse(2021-07-22);
    console.log((valueData/86400000)/365);

    let  currentSek = valueData;

    let currentDay = currentSek/86400000
console.log(currentDay/365);

startMoney = 2000;
moneyAmount1 = 1000;
moneyAmount2 = 1000;
moneyAmount3 = 1000;
moneyAmount4 = 1000;
monthAmount = 5;

for(let i = 1; i <= monthAmount; i++){
    startMoney = startMoney *1.00417
}
monthAmount--;

for(let i = 1; i <= monthAmount; i++){
    moneyAmount1 = moneyAmount1 *1.00417
}

monthAmount--;
for(let i = 1; i <= monthAmount; i++){
    moneyAmount2 = moneyAmount2 *1.00417
}
monthAmount--;
for(let i = 1; i <= monthAmount; i++){
    moneyAmount3 = moneyAmount3 *1.00417
}
monthAmount--;
for(let i = 1; i <= monthAmount; i++){
    moneyAmount4 = moneyAmount4 *1.00417
}
monthAmount--;
console.log(startMoney);
console.log(moneyAmount1);
console.log(moneyAmount2);
console.log(moneyAmount3);
console.log(moneyAmount4);
console.log(moneyAmount2 + moneyAmount1 + startMoney + moneyAmount3 +moneyAmount4);


let summ = 0;
const need = 1000000;
let have = 200000;
let have1 = have;
let mon = 18;
let per = 1.00417;
for(let j =1; j < mon; j++){
    have1*=per;
}
let pay = (((need*0.98) - have1))/mon;
let current = pay;
console.log('month', pay)
 for(let i=1; i<mon; i++ ){
     have *= per;
     current = current*per;
     console.log('cur', current)
     current = current + pay;
     console.log('cur1', current)   
 }
 summ = have + current;
 console.log('sum', summ);
 console.log('have', have);
 console.log('current', current);
