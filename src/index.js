// /**********************************\
// * ИМПОРТЫ
// \**********************************/

// Стили проекта
import './pages/index.css';

// массив с данными для карточек
import { initialCards } from './scripts/initialCards.js';

// функция создания карточек
import { createCard } from './scripts/card.js';

// функция удаления элементов
import { deleteElement } from './scripts/deleteElement.js';

// функция лайков
import { liked } from './scripts/like.js';

// открытие модального окна
import { openPopup, closePopup } from './scripts/modals.js';


/**********************************\
* ПЕРЕМЕННЫЕ
\**********************************/

// шаблон карточек
const cardTemplate = document.querySelector('#card-template');

// контейнер для добавления карточек
const cardsContainer = document.querySelector('.places__list');

// кнопка редактирования профиля
const editProfileButton = document.querySelector('.profile__edit-button');

// попап редактирования профиля
const popupEditProfile = document.querySelector('.popup_type_edit');

// заголовок профиля
const profileTitle = document.querySelector('.profile__title');

// описание профиля
const profileDescription = document.querySelector('.profile__description');

// форма редакитрования профиля
const editProfileForm = document.forms['edit-profile'];

// кнопка добавления пользовательской карточки
const addNewCardButton = document.querySelector('.profile__add-button');

// попап добавления новой карточки
const popupNewCard = document.querySelector('.popup_type_new-card');

// форма добавления новой карточки
const addCardForm = document.forms['new-place'];

// попап картинки
const popupImage = document.querySelector('.popup_type_image');

// все модальные окна
const modals = document.querySelectorAll('.popup');


/**********************************\
* ЛОГИКА РАБОТЫ ПРИЛОЖЕНИЯ
\**********************************/

// функция рендеринга карточки
const renderCard = (cardData) => {
  const card = createCard(cardData, {
    cardTemplate: cardTemplate,
    popupImage: popupImage,
    likeCard: liked,
    deleteCard: deleteElement,
    openPopupImage: openPopup
  });

  // возвращаем готовую карточку в цикл добавления на страницу
  return card;
};

// инициализация начальных карточек
initialCards.forEach(initialCard => {
  const card = renderCard(initialCard);

  // добавляем карточку в конец контейнера
  cardsContainer.append(card);
});

// функция редактирование профиля
const handleProfileFormSubmit = (event) => {
  event.preventDefault();

  // принимаем новые значения
  profileTitle.textContent = editProfileForm.name.value;
  profileDescription.textContent = editProfileForm.description.value;
  
  // закрываем попап
  closePopup(popupEditProfile);
};

// функция добавления новой карточки
const handleNewCardFormSubmit = (event) => {
  event.preventDefault();

  // формируем объект с данными для новой карточки
  const newCardData = {
    name: addCardForm['place-name'].value,
    link: addCardForm.link.value
  };

  // рендерим новую карточку
  const card = renderCard(newCardData);

  // добавляем новую карточку в начало
  cardsContainer.prepend(card);

  // закрываем попап
  closePopup(popupNewCard);

  // очищаем форму
  addCardForm.reset();
};

// слушатели события отправки форм
editProfileForm.addEventListener('submit', handleProfileFormSubmit);
addCardForm.addEventListener('submit', handleNewCardFormSubmit);

// функция установки слушателей на кнопки профиля и добавления карточки
const setupEventListeners = () => {

  // cлушатель клика на кнопку редактирования профиля
  editProfileButton.addEventListener('click', () => {

    // заполняем форму данными профиля
    editProfileForm.name.value = profileTitle.textContent;
    editProfileForm.description.value = profileDescription.textContent;

    // открываем попап
    openPopup(popupEditProfile);
  });

  // cлушатель клика на кнопку добавления карточки
  addNewCardButton.addEventListener('click', () => openPopup(popupNewCard));
};

setupEventListeners();

// анимируем открытие и закрытие модалок
modals.forEach(modal => {
  modal.classList.add('popup_is-animated');
})