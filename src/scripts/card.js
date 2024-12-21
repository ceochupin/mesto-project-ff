export const createCard = (
  {
    name,
    link,
    likes,
    owner,
    _id,
  },
  cardTemplate,
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

  if (userId !== owner._id) {
    cardDeleteButton.remove();
  } else {
    cardDeleteButton.addEventListener('click', () => {
      handleDeleteCard({
        card: cardElement,
        cardId: _id
      });
    });
  };

  if (likes.find((like) => like._id === userId)) {
    cardLikeButton.classList.add('card__like-button_is-active');
  };

  cardLikeButton.addEventListener('click', () => {
    handleLikeCard({
      button: cardLikeButton,
      cardId: _id,
      counter: cardLikeCounter
    });
  });

  cardImage.addEventListener('click', () => {
    handleImageClick( { name, link } );
  });

  return cardElement;
};