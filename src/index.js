import logoImage from './images/logo.svg';
import avatarImage from './images/avatar.jpg';

const defaultImagesPage = [{ name: 'Логотип', link: logoImage }];

document.addEventListener('DOMContentLoaded', () => {
  const profileImage = document.querySelector('.profile__image');
  profileImage.style.backgroundImage = `url(${avatarImage})`;
});

import { initialCards } from './scripts/cards.js';

// Забираем шаблон
const cardTemplate = document.querySelector('#card-template');

// Находим контейнер для карточек
const cardsContainer = document.querySelector('.places__list');

// Функция для создания карточки
const createCard = (cardData, cardTemplate, deleteCard) => {
  // Проверяем наличие шаблона
  if (!cardTemplate) {
    console.error('Отсутствует шаблон');
    return;
  }

  // Выбираем карточку
  const cardElement = cardTemplate.content.querySelector('.card');

  // Проверяем наличие карточки
  if (!cardElement) {
    console.error('Отсутствует карточка');
    return;
  }

  // Клонируем карточку
  const clonedCardElement = cardElement.cloneNode(true);

  // Объявляем переменные элементов
  const cardImage = clonedCardElement.querySelector('.card__image');
  const cardTitle = clonedCardElement.querySelector('.card__title');
  const cardDeleteButton = clonedCardElement.querySelector('.card__delete-button');

  // Проверяем наличие элементов
  if (!(cardImage || cardTitle || cardDeleteButton)) {
    console.error('Отсутствуют важные элементы карточки');
    return;
  }

  // Устанавливаем значения элементов карточки
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  // Добавляем обработчик клика для кнопки удаления
  cardDeleteButton.addEventListener('click', () => deleteCard(clonedCardElement));

  // Возвращаем сгенерированную карточку
  return clonedCardElement;
};

// Функция удаления
const deleteElement = element => element.remove();

// Выводим все карточки из массива initialCards
initialCards.forEach(initialCard => {
  const cardElement = createCard(initialCard, cardTemplate, deleteElement);
  cardsContainer.appendChild(cardElement);
});

// Копирайт и текущий год в футере
const currentYear = new Date().getFullYear();
document.querySelector('.footer__copyright').textContent = `© ${currentYear} Mesto Russia`;
