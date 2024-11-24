// открытие модального окна
export const openPopup = (popup) => {
  // показываем модальное окно
  popup.classList.add('popup_is-opened');

  // добавляем обработчики нажатия Esc и клика на оверлей или кнопку закрытия
  document.addEventListener('keydown', handleEscapeKey);
  popup.addEventListener('click', handleOverlayAndCloseButtonClick);
};

// закрытие модального окна
export const closePopup = (popup) => {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleEscapeKey);
  popup.removeEventListener('click', handleOverlayAndCloseButtonClick);
};

// обработчик Esc
const handleEscapeKey = (event) => {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (openedPopup) closePopup(openedPopup);
  };
};

// обработчик клика на оверлей или кнопку закрытия
const handleOverlayAndCloseButtonClick = (event) => {
  if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close')) {
    closePopup(event.currentTarget);
  };
};