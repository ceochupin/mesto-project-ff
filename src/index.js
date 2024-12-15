/**********************************\
* ИМПОРТЫ
\**********************************/

import './pages/index.css';
import { getInitialCards, getUserProfile } from './scripts/api.js';
import { createCard, handleLikeCard, handleDeleteCard } from './scripts/card.js';
import { openPopup, closePopup } from './scripts/modals.js';
import { enableValidation, clearValidation } from './scripts/validation.js';

/**********************************\
* DOM ЭЛЕМЕНТЫ
\**********************************/

export const cardTemplate = document.querySelector('#card-template');

const cardsContainer = document.querySelector('.places__list');

const avatarEdit = {
  button: document.querySelector('.profile__edit-avatar-button'),
  image: document.querySelector('.profile__image'),
  popup: document.querySelector('.popup_type_edit-avatar'),
  form: document.forms['edit-avatar'],
}

const profileEdit = {
  button: document.querySelector('.profile__edit-button'),
  popup: document.querySelector('.popup_type_edit'),
  title: document.querySelector('.profile__title'),
  description: document.querySelector('.profile__description'),
  form: document.forms['edit-profile'],
}

const newCardAdd = {
  button: document.querySelector('.profile__add-button'),
  popup: document.querySelector('.popup_type_new-card'),
  form: document.forms['new-place'],
}

const fullImageCard = {
  popup: document.querySelector('.popup_type_image'),
  image: document.querySelector('.popup__image'),
  caption: document.querySelector('.popup__caption'),
}

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error',
}

let userId;

/**********************************\
* ЛОГИКА РАБОТЫ ПРИЛОЖЕНИЯ
\**********************************/

const setUserAvatar = ( { altName, imageUrl } ) => {
  avatarEdit.image.src = imageUrl;
  avatarEdit.image.alt = `Аватар пользователя ${altName}`;
}
const setUserInfo = ( { titleName, descriptionAbout } ) => {
  profileEdit.title.textContent = titleName;
  profileEdit.description.textContent = descriptionAbout;
}

const handleAvatarFormSubmit = (event) => {
  event.preventDefault();
  setUserAvatar({
    altName: profileEdit.title.textContent,
    imageUrl: avatarEdit.form.link.value
  });
  closePopup(avatarEdit.popup);
};

const handleProfileFormSubmit = (event) => {
  event.preventDefault();
  setUserInfo({
    titleName: profileEdit.form.name.value,
    descriptionAbout: profileEdit.form.description.value
  });
  closePopup(profileEdit.popup);
};

const handleNewCardFormSubmit = (event) => {
  event.preventDefault();
  const newCardData = {
    name: newCardAdd.form['place-name'].value,
    link: newCardAdd.form.link.value
  };
  renderCard( { cardData: newCardData } );
  closePopup(newCardAdd.popup);
};

const handleImageClick = ( { name, link } ) => {
  fullImageCard.image.src = link;
  fullImageCard.image.alt = name;
  fullImageCard.caption.textContent = name;
  openPopup(fullImageCard.popup);
};

const callbacks = {
  handleLikeCard,
  handleDeleteCard,
  handleImageClick
};

const renderCard = ( { cardData, method = 'prepend'} ) => {
  const cardElement = createCard(cardData, userId, callbacks);
  cardsContainer[ method ](cardElement);
};

avatarEdit.form.addEventListener('submit', handleAvatarFormSubmit);
profileEdit.form.addEventListener('submit', handleProfileFormSubmit);
newCardAdd.form.addEventListener('submit', handleNewCardFormSubmit);

avatarEdit.button.addEventListener('click', () => {
  clearValidation(avatarEdit.form, validationConfig);
  avatarEdit.form.link.value = avatarEdit.image.src;
  openPopup(avatarEdit.popup);
});

profileEdit.button.addEventListener('click', () => {
  clearValidation(profileEdit.form, validationConfig);
  profileEdit.form.name.value = profileEdit.title.textContent;
  profileEdit.form.description.value = profileEdit.description.textContent;
  openPopup(profileEdit.popup);
});

newCardAdd.button.addEventListener('click', () => {
  newCardAdd.form.reset();
  clearValidation(newCardAdd.form, validationConfig);
  openPopup(newCardAdd.popup);
});

enableValidation(validationConfig);

Promise.all([getInitialCards(), getUserProfile()])
  .then(([cards, user]) => {
    userId = user._id;
    console.log({cards});

    cards.forEach((card) => {
      renderCard({
        cardData: card,
        method: 'append'
      });
    });

    setUserAvatar({
      altName: user.name,
      imageUrl: user.avatar
    });

    setUserInfo({
      titleName: user.name,
      descriptionAbout: user.about
    });
  })
  .catch((err) => {
    console.log(err);
  });