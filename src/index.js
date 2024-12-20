/**********************************\
* ИМПОРТЫ
\**********************************/

import './pages/index.css';

import {
  getInitialCards,
  getUserProfile,
  updateUserInfo,
  addNewCard,
  updateUserAvatar
} from './scripts/api.js';

import { createCard, handleLikeCard, handleDeleteCard } from './scripts/card.js';
import { openPopup, closePopup } from './scripts/modals.js';
import { enableValidation, clearValidation } from './scripts/validation.js';

import {
  renderSkeleton,
  setSkeletonCards
} from './scripts/skeleton.js';

/**********************************\
* DOM ЭЛЕМЕНТЫ
\**********************************/

export const skeletonCardTemplate = document.querySelector('#card-template-skeleton');

export const cardTemplate = document.querySelector('#card-template');

export const cardsContainer = document.querySelector('.places__list');

export const userAvatar = {
  button: document.querySelector('.profile__edit-avatar-button'),
  avatar: document.querySelector('.profile__image'),
  avatarSkeleton: document.querySelector('.skeleton__profile_avatar'),
  popup: document.querySelector('.popup_type_edit-avatar'),
  form: document.forms['edit-avatar'],
}

export const userInfo = {
  button: document.querySelector('.profile__edit-button'),
  popup: document.querySelector('.popup_type_edit'),
  name: document.querySelector('.profile__title'),
  nameSkeleton: document.querySelector('.skeleton__profile_title'),
  about: document.querySelector('.profile__description'),
  aboutSkeleton: document.querySelector('.skeleton__profile_description'),
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

let userId = '';

/**********************************\
* ЛОГИКА РАБОТЫ ПРИЛОЖЕНИЯ
\**********************************/

renderSkeleton(true);

const setUserAvatar = ( { name, avatar } ) => {
  userAvatar.avatar.src = avatar;
  userAvatar.avatar.alt = `Аватар пользователя ${name}`;
}
const setUserInfo = ( { name, about } ) => {
  userInfo.name.textContent = name;
  userInfo.about.textContent = about;
}

const loadingButtonState = (button, isLoading) => {
  button.textContent = (isLoading) ? 'Сохранение...' : 'Сохранить';
}

const handleAvatarFormSubmit = (event) => {
  event.preventDefault();

  loadingButtonState(userAvatar.form.button, true);

  const avatar = userAvatar.form.link.value;

  updateUserAvatar(avatar)
    .then((user) => {
      setUserAvatar({
        name: userInfo.name.textContent,
        avatar: user.avatar
      });
      closePopup(userAvatar.popup);
    })
    .catch((error) => console.log(error))
    .finally(() => loadingButtonState(userAvatar.form.button, false));
};

const handleProfileFormSubmit = (event) => {
  event.preventDefault();

  loadingButtonState(userInfo.form.button, true);

  const info = {
    name: userInfo.form.name.value,
    about: userInfo.form.about.value 
  }

  updateUserInfo(info)
    .then((user) => {
      setUserInfo({
        name: user.name,
        about: user.about
      });
      closePopup(userInfo.popup);
    })
    .catch((error) => console.log(error))
    .finally(() => loadingButtonState(userInfo.form.button, false));
};

const handleNewCardFormSubmit = (event) => {
  event.preventDefault();
  setSkeletonCards(true);
  loadingButtonState(newCardAdd.form.button, true);

  const newCardData = {
    name: newCardAdd.form['place-name'].value,
    link: newCardAdd.form.link.value
  };

  addNewCard(newCardData)
    .then((cardData) => {
      renderCard({ cardData });
      closePopup(newCardAdd.popup);
    })
    .catch((error) => console.log(error))
    .finally(() => {
      loadingButtonState(newCardAdd.form.button, false);
      setSkeletonCards(false);
    });
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
  const cardElement = createCard(cardData, cardTemplate, userId, callbacks);
  cardsContainer[ method ](cardElement);
};

userAvatar.form.addEventListener('submit', handleAvatarFormSubmit);
userInfo.form.addEventListener('submit', handleProfileFormSubmit);
newCardAdd.form.addEventListener('submit', handleNewCardFormSubmit);

userAvatar.button.addEventListener('click', () => {
  clearValidation(userAvatar.form, validationConfig);
  userAvatar.form.link.value = userAvatar.avatar.src;
  openPopup(userAvatar.popup);
});

userInfo.button.addEventListener('click', () => {
  clearValidation(userInfo.form, validationConfig);
  userInfo.form.name.value = userInfo.name.textContent;
  userInfo.form.about.value = userInfo.about.textContent;
  openPopup(userInfo.popup);
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

    cards.forEach((card) => {
      renderCard({
        cardData: card,
        method: 'append'
      });
    });

    setUserAvatar({
      name: user.name,
      avatar: user.avatar
    });

    setUserInfo({
      name: user.name,
      about: user.about
    });
  })
  .catch((err) => console.log(err))
  .finally(() => renderSkeleton(false));