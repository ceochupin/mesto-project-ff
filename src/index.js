// /**********************************\
// * ИМПОРТЫ
// \**********************************/

// Стили проекта
import './pages/index.css';

// массив с данными для карточек
import { initialCards } from './scripts/initialCards.js';

// функции создания карточек, лайков и удаления
import { createCard, handleLikeCard, handleDeleteCard } from './scripts/card.js';

// открытие и закрытие модального окна
import { openPopup, closePopup } from './scripts/modals.js';


/**********************************\
* DOM ЭЛЕМЕНТЫ
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

// попап для картинки на весь экран
const popupImage = document.querySelector('.popup_type_image');

// картинка в попапе
const imageInPopup = popupImage.querySelector('.popup__image');

// описание для картинки в попапе
const captionInPopup = popupImage.querySelector('.popup__caption');

// все модальные окна
const modals = document.querySelectorAll('.popup');


/**********************************\
* ЛОГИКА РАБОТЫ ПРИЛОЖЕНИЯ
\**********************************/

// обработчик клика на картинку
const handleImageClick = (cardData) => {
  imageInPopup.src = cardData.link;
  imageInPopup.alt = cardData.name;
  captionInPopup.textContent = cardData.name;
  openPopup(popupImage);
};

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
  renderCard(newCardData);

  // закрываем попап
  closePopup(popupNewCard);

  // очищаем форму
  addCardForm.reset();
};

// объект с обработчиками для карточки
const callbacks = {
  cardTemplate,
  handleLikeCard,
  handleDeleteCard,
  handleImageClick
};

// функция рендеринга любой карточки
const renderCard = (cardData, method = 'prepend') => {
  const cardElement = createCard(cardData, callbacks);

  // добавляем карточку c использование метода
  cardsContainer[ method ](cardElement);
};

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

// слушатели события отправки форм
editProfileForm.addEventListener('submit', handleProfileFormSubmit);
addCardForm.addEventListener('submit', handleNewCardFormSubmit);

// анимируем открытие и закрытие модалок
modals.forEach(modal => modal.classList.add('popup_is-animated'));

// инициализация начальных карточек
initialCards.forEach(initialCard => renderCard(initialCard, 'append'));