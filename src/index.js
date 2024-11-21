import './pages/index.css';
import { initialCards } from './scripts/cards.js';

const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = document.querySelector('.places__list');

const createCard = (cardData, deleteCard) => {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  cardDeleteButton.addEventListener('click', () => deleteCard(cardElement));

  return cardElement;
};

const deleteElement = element => element.remove();

initialCards.forEach(initialCard => {
  const cardElement = createCard(initialCard, deleteElement);
  cardsContainer.append(cardElement);
});

const editProfileButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const closeButton = document.querySelector('.popup__close');

const editProfileForm = document.forms['edit-profile'];

closeButton.addEventListener('click', () => {
  popupEdit.classList.remove('popup_is-opened');
});

editProfileButton.addEventListener('click', () => {
  popupEdit.classList.add('popup_is-opened');
});