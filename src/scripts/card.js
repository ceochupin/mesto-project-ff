// функция создания карточек
export const createCard = (
  cardData,
  {
    cardTemplate,
    handleLikeCard,
    handleDeleteCard,
    handleImageClick 
  }
) => {

  // клонируем шаблон
  const cardElement = cardTemplate.content.querySelector('.card').cloneNode(true);

  // находим нужные элементы карточки
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  const cardLikeButton = cardElement.querySelector('.card__like-button');

  // заполняем данные
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  // добавляем слушатель клика на кнопку удаления карточки
  cardDeleteButton.addEventListener('click', () => handleDeleteCard(cardElement));

  // добавляем слушатель клика на кнопку лайка
  cardLikeButton.addEventListener('click', () => handleLikeCard(cardLikeButton));

  cardImage.addEventListener('click', () => handleImageClick(cardData)); 

  // возвращаем готовую карточку
  return cardElement;
};

// функция лайков на карточке
export const handleLikeCard = (button) => button.classList.toggle('card__like-button_is-active');

// функция удаления карточки
export const handleDeleteCard = (card) => card.remove();