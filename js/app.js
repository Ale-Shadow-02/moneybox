

let form = document.querySelector('.form');
let name = document.querySelector('.name');
let number = document.querySelector('.number');
let date = document.querySelector('.date');
let startAmount = document.querySelector('.start_amount');
let percentInput = document.querySelector('.percent__input');
let monthAmount = document.querySelector('.month_amount');
let formDelete = document.querySelector('.form__delete');
let addForm = document.querySelector('.add__form');
let container = document.querySelector('.container');
let differentDays = 1;
let formContent = form.innerHTML;
let num = 2;

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

function getMonthAmount() {
    let remainingAmount = number.value - startAmount.value;
    let percentMonth = (startAmount.value * (percentInput.value / 100) / 365) * differentDays;
    console.log(percentMonth);
    let monthAmount = (percentMonth / startAmount.value) * (365 / differentDays) * 100;
    console.log(monthAmount);
    return monthAmount;
}


date.addEventListener('input', () => {
    let different = 1 + ((new Date(date.value) - new Date()) / 86400000);
    differentDays = Number(different.toFixed());

    getMonthAmount();
});

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


