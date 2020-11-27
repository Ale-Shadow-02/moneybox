

let form = document.querySelector('.form');
let name = document.querySelector('.name');
const needInput = document.querySelector('.need_amount');
const dateInput = document.querySelector('.date');
const startInput = document.querySelector('.start_amount');
const percentInput = document.querySelector('.percent__input');
const monthInput = document.querySelector('.month_amount');
const formDelete = document.querySelector('.form__delete');
let addForm = document.querySelector('.add__form');
let container = document.querySelector('.container');
let differentDays = 1;
let formContent = form.innerHTML;
let num = 2;
let needAmount;
let dateTarget;
let startAmount;
let percentAmount;
let monthAmount;


// функция добавления новой формы
function addNewForm() {
    const divForm = document.createElement('div');
    divForm.classList.add('form');
    divForm.setAttribute("id", num);
    divForm.innerHTML = formContent;
    container.append(divForm);
    num++;
    let formDeleteButtons = document.querySelectorAll('.form__delete');
    formDeleteButtons.forEach(element => {
        element.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        })
    });    
};

// Удаление первого элемента
formDelete.addEventListener('click', function (e) {       
    e.target.parentElement.remove();
});

// добавление формы при клике
addForm.addEventListener('click', () => {
    addNewForm();
});

//вычисление дней цели, целых месяцев до цели, перезаписывание пременной dateTarget;
const daysToTarget = (dateInput) => {
    let different = 1 + ((new Date(dateInput.value) - new Date()) / 86400000);
    differentDays = Number(different.toFixed());
    console.log(differentDays);
    dateTarget = Math.floor(differentDays/30);
    return differentDays;
}
//вычисление суммы ежемесячного пополнения с учетом капитализации
const getMonthAmount = (start, percent, iteration, final) =>{
        let percentFinal = 0;
        percent = percent / 100 / 12 + 1;
        for (let i = 0; i < iteration; i++) {
            percentFinal = percentFinal + Math.pow(percent, i+1)
            start = start * percent;
        }
        monthAmount = (final - start) / percentFinal;
        monthInput.value = monthAmount;
    }

needInput.addEventListener('input', event =>{
    needAmount = needInput.value;
    startAmount= startInput.value;
    percentAmount = percentInput.value;
    getMonthAmount(startAmount, percentAmount, dateTarget, needAmount);
})

dateInput.addEventListener('input', () => {
    console.log(dateInput.value);
    daysToTarget(dateInput)
    needAmount = needInput.value;
    startAmount= startInput.value;
    percentAmount = percentInput.value;
    getMonthAmount(startAmount, percentAmount, dateTarget, needAmount);

    console.log(monthAmount);
    // getMonthAmount();
});

startInput.addEventListener('input', event=>{
    needAmount = needInput.value;
    startAmount= startInput.value;
    percentAmount = percentInput.value;
    getMonthAmount(startAmount, percentAmount, dateTarget, needAmount);
});

percentInput.addEventListener('input', event =>{
    needAmount = needInput.value;
    startAmount= startInput.value;
    percentAmount = percentInput.value;
    getMonthAmount(startAmount, percentAmount, dateTarget, needAmount);
})
// function getMonthAmount() {
//     let remainingAmount = needInput.value - startAmount.value;
//     let percentMonth = (startAmount.value * (percentInput.value / 100) / 365) * differentDays;
//     console.log(percentMonth);
//     let monthInput = (percentMonth / startAmount.value) * (365 / differentDays) * 100;
//     console.log(monthInput);
//     return monthInput;
// }



// let startMoney = startAmount.value;
// moneyAmount1 = 1000;
// moneyAmount2 = 1000;
// moneyAmount3 = 1000;
// moneyAmount4 = 1000;
// monthAmount = 5;
// for(let i = 1; i <= monthAmount; i++){
//     startMoney = startMoney *1.00417
// }
// monthAmount--;
// for(let i = 1; i <= monthAmount; i++){
//     moneyAmount1 = moneyAmount1 *1.00417
// }
// monthAmount--;
// for(let i = 1; i <= monthAmount; i++){
//     moneyAmount2 = moneyAmount2 *1.00417
// }
// monthAmount--;
// for(let i = 1; i <= monthAmount; i++){
//     moneyAmount3 = moneyAmount3 *1.00417
// }
// monthAmount--;
// for(let i = 1; i <= monthAmount; i++){
//     moneyAmount4 = moneyAmount4 *1.00417
// }
// monthAmount--;
// console.log(startMoney);
// console.log(moneyAmount1);
// console.log(moneyAmount2);
// console.log(moneyAmount2 + moneyAmount1 + startMoney + moneyAmount3 +moneyAmount4);

// Эффективная ставка = (P / S) * (365 / d) * 100

// нужно 10000 
// первый взнос 2000
// процент 0,05
// сегодня 11.2020
// нужно 04.2021        5 месяцев
// считаем что ставка 5% неизменна 
// тогда за 1 месяц получим (2000*0,05)/12=8.33
// 1 месяц перед пополнением будет 2008.33

// нужно накопить 8000 т.к. 10000 - 2000 = 8000
// теперь 8000/5 месяцев = 1600 в месяц


//     let nowDate = Date.now();
//     console.log((nowDate/86400000)/365);
//     let valueData = Date.parse(2021-07-22);
//     console.log((valueData/86400000)/365);

//     let  currentSek = valueData;

//     let currentDay = currentSek/86400000
// console.log(currentDay/365);

// startMoney = 2000;
// moneyAmount1 = 1000;
// moneyAmount2 = 1000;
// moneyAmount3 = 1000;
// moneyAmount4 = 1000;
// monthAmount = 5;

// for(let i = 1; i <= monthAmount; i++){
//     startMoney = startMoney *1.00417
// }
// monthAmount--;

// for(let i = 1; i <= monthAmount; i++){
//     moneyAmount1 = moneyAmount1 *1.00417
// }

// monthAmount--;
// for(let i = 1; i <= monthAmount; i++){
//     moneyAmount2 = moneyAmount2 *1.00417
// }
// monthAmount--;
// for(let i = 1; i <= monthAmount; i++){
//     moneyAmount3 = moneyAmount3 *1.00417
// }
// monthAmount--;
// for(let i = 1; i <= monthAmount; i++){
//     moneyAmount4 = moneyAmount4 *1.00417
// }
// monthAmount--;
// console.log(startMoney);
// console.log(moneyAmount1);
// console.log(moneyAmount2);
// console.log(moneyAmount3);
// console.log(moneyAmount4);
// console.log(moneyAmount2 + moneyAmount1 + startMoney + moneyAmount3 +moneyAmount4);


// let summ = 0;
// const need = 10000;
// let have = 2000;
// let have1 = have;
// let mon = 8;
// let per = 1.00417;
// for(let j =1; j < mon; j++){
//     have1*=per;
// }
// let pay = (((need) - have)/mon)*0.9783;
// let current = pay;
// console.log('month', pay)
//  for(let i=1; i<mon; i++ ){
//      have *= per;
//      current = current*per;
//      console.log('cur', current)
//      current = current + pay;
//      console.log('cur1', current)   
//  }
//  summ = have + current;
//  console.log('sum', summ);
//  console.log('have', have);
//  console.log('current', current);
