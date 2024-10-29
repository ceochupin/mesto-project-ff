// Функция для создания карточки
function createCard(cardData, deleteCard) {
  // Клонируем шаблон
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  // Объявляем переменные элементов
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');

  // Устанавливаем значения элементов карточки
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  // Добавляем обработчик клика для кнопки удаления
  cardDeleteButton.addEventListener('click', () => deleteCard(cardElement));

  // Возвращаем сгенерированную карточку
  return cardElement;
}

// Функция удаления карточки
function deleteCard(cardElement) {
  cardElement.remove();
}

// Находим контейнер для карточек
const cardsContainer = document.querySelector('.places__list');

// Выводим все карточки из массива initialCards
initialCards.forEach(cardData => {
  const cardElement = createCard(cardData, deleteCard);
  cardsContainer.appendChild(cardElement);
});
