// функция создания карточек
export const createCard = (cardData, { cardTemplate, popupImage, likeCard, deleteCard, openPopupImage }) => {

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
  cardDeleteButton.addEventListener('click', () => deleteCard(cardElement));

  // добавляем слушатель клика на кнопку лайка
  cardLikeButton.addEventListener('click', () => likeCard(cardElement));

  // добавляем слушатель клика на картинку
  cardImage.addEventListener('click', () => {
    const imagePopup = popupImage.querySelector('.popup__image');
    const imagePopupCaption = popupImage.querySelector('.popup__caption');
    imagePopup.src = cardImage.src;
    imagePopupCaption.textContent = cardTitle.textContent;
    openPopupImage(popupImage);
  });

  // возвращаем карточку
  return cardElement;
};