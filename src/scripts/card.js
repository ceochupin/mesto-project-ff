import { cardTemplate } from '../index.js';

export const createCard = (
  {
    name,
    link,
    likes = [],
    _id = userId,
  },
  userId,
  {
    handleLikeCard,
    handleDeleteCard,
    handleImageClick,
  }
) => {
  const cardElement = cardTemplate.content.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  const cardLikeButton = cardElement.querySelector('.card__like-button');
  const cardLikeCounter = cardElement.querySelector('.card__like-counter');

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;
  cardLikeCounter.textContent = likes.length;

  if (userId !== _id) {
    cardDeleteButton.remove();
  } else {
    cardDeleteButton.addEventListener('click', () => handleDeleteCard(cardElement));
  }

  if (likes.includes(userId)) {
    cardLikeButton.classList.add('card__like-button_is-active');
  }

  cardLikeButton.addEventListener('click', () => handleLikeCard(cardLikeButton));
  cardImage.addEventListener('click', () => handleImageClick( { name, link } ));

  return cardElement;
};

export const handleLikeCard = (button) => button.classList.toggle('card__like-button_is-active');

export const handleDeleteCard = (card) => card.remove();