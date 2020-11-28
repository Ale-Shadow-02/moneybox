let openPopup = document.querySelector('.link-open');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.close-popup');
let popupBody = document.querySelector('.popup__body');

openPopup.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.add('open');
});

closePopup.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.remove('open');
});

popupBody.addEventListener('click', (e) => {
  if (!e.target.closest('.popup__content')) {
    popup.classList.remove('open');
  }
});

document.addEventListener('keyup', (e) => {
  if (e.keyCode === 27) {
    popup.classList.remove('open');
  }
});