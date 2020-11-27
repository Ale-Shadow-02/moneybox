let form = document.querySelector('.form');
let name = document.querySelector('.name');
let needInput = document.querySelector('.need_amount');
let needInputAll = document.querySelectorAll('.need_amount');
let dateInput = document.querySelector('.date');
let dateInputAll = document.querySelectorAll('.date');
let startInput = document.querySelector('.start_amount');
let startInputAll = document.querySelectorAll('.start_amount');
let percentInput = document.querySelector('.percent__input');
let percentInputAll = document.querySelectorAll('.percent__input');
let monthInput = document.querySelector('.month_amount');
let formDelete = document.querySelector('.form__delete');
let addForm = document.querySelector('.add__form');
let container = document.querySelector('.container');
let differentDays = 1;
let formContent = form.innerHTML;
let num = "a";
let needAmount;
let dateTarget;
let startAmount;
let percentAmount;
let monthAmount;

//Обработчик need Input
const needHandler = () =>{
    needInputAll.forEach(needInput => {
        needInput.addEventListener('input', event => {
            const number = (((event.target.parentElement).parentElement).parentElement).parentElement.getAttribute("id");
            needInput = document.querySelector(`#${number} .need_amount`);
            dateInput = document.querySelector(`#${number} .date`);
            startInput = document.querySelector(`#${number} .start_amount`);
            percentInput = document.querySelector(`#${number} .percent__input`);
            monthInput = document.querySelector(`#${number} .month_amount`);

            needAmount = needInput.value;
            startAmount= startInput.value;
            percentAmount = percentInput.value;
            daysToTarget(dateInput)
            getMonthAmount(startAmount, percentAmount, dateTarget, needAmount);
        });
    });
}

//Обработчик need date
const dateHandler = () =>{
    dateInputAll.forEach(dateInput =>{
        dateInput.addEventListener('input', (event) => {
            console.log(dateInput.value);
            daysToTarget(dateInput)
            const number = ((((event.target.parentElement).parentElement).parentElement).parentElement).parentElement.getAttribute("id");
            needInput = document.querySelector(`#${number} .need_amount`);
            dateInput = document.querySelector(`#${number} .date`);
            startInput = document.querySelector(`#${number} .start_amount`);
            percentInput = document.querySelector(`#${number} .percent__input`);
            monthInput = document.querySelector(`#${number} .month_amount`);

            needAmount = needInput.value;
            startAmount= startInput.value;
            percentAmount = percentInput.value;
            daysToTarget(dateInput)
            getMonthAmount(startAmount, percentAmount, dateTarget, needAmount);

            console.log(monthAmount);
        });
    })
}

//Обработчик need start
const startHandler = () =>{
    startInputAll.forEach(startInput =>{
        startInput.addEventListener('input', event=>{
            const number = (((event.target.parentElement).parentElement).parentElement).parentElement.getAttribute("id");
            needInput = document.querySelector(`#${number} .need_amount`);
            dateInput = document.querySelector(`#${number} .date`);
            startInput = document.querySelector(`#${number} .start_amount`);
            percentInput = document.querySelector(`#${number} .percent__input`);
            monthInput = document.querySelector(`#${number} .month_amount`);

            needAmount = needInput.value;
            startAmount= startInput.value;
            percentAmount = percentInput.value;
            daysToTarget(dateInput)
            getMonthAmount(startAmount, percentAmount, dateTarget, needAmount);
        });
    })
}

//Обработчик need percent
const percentPercent = () =>{
    percentInputAll.forEach(percentInput =>{
        percentInput.addEventListener('input', event =>{
            const number = ((((event.target.parentElement).parentElement).parentElement).parentElement).parentElement.getAttribute("id");
            needInput = document.querySelector(`#${number} .need_amount`);
            dateInput = document.querySelector(`#${number} .date`);
            startInput = document.querySelector(`#${number} .start_amount`);
            percentInput = document.querySelector(`#${number} .percent__input`);
            monthInput = document.querySelector(`#${number} .month_amount`);

            needAmount = needInput.value;
            startAmount= startInput.value;
            percentAmount = percentInput.value;
            daysToTarget(dateInput)
            getMonthAmount(startAmount, percentAmount, dateTarget, needAmount);
        });
    })
}

needHandler();
dateHandler();
startHandler();
percentPercent();


// функция добавления новой формы
function addNewForm() {
    const divForm = document.createElement('div');
    divForm.classList.add('form');
    divForm.setAttribute("id", num);
    divForm.innerHTML = formContent;
    container.append(divForm);
    num +="a";
    let formDeleteButtons = document.querySelectorAll('.form__delete');
    formDeleteButtons.forEach(element => {
        element.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        })    
    });    
    needInputAll = document.querySelectorAll('.need_amount');
    dateInputAll = document.querySelectorAll('.date');
    startInputAll = document.querySelectorAll('.start_amount');
    percentInputAll = document.querySelectorAll('.percent__input');

    needHandler();
    dateHandler();
    startHandler();
    percentPercent();

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
        monthInput.value = monthAmount.toFixed(2);
        return monthAmount;
}        

