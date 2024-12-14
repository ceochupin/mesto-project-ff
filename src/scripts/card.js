import { cardTemplate } from '../index.js';

export const createCard = (
  {
    name,
    link,
  },
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

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  cardDeleteButton.addEventListener('click', () => handleDeleteCard(cardElement));
  cardLikeButton.addEventListener('click', () => handleLikeCard(cardLikeButton));
  cardImage.addEventListener('click', () => handleImageClick( { name, link } ));

  return cardElement;
};

export const handleLikeCard = (button) => button.classList.toggle('card__like-button_is-active');

export const handleDeleteCard = (card) => card.remove();