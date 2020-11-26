

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


