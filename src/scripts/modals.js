// открытие модального окна
export const openPopup = (popup, classVisible = 'popup_is-opened') => {
  // проверяем, что модальное окно не открыто
  const openedPopupCheck = document.querySelector(`.${classVisible}`);
  if (openedPopupCheck) return;

  // показываем модальное окно
  popup.classList.add(classVisible);

  // добавляем обработчики нажатия Esc и клика на оверлей или кнопку закрытия
  document.addEventListener('keydown', handleEscapeKey);
  popup.addEventListener('click', handleOverlayAndCloseButtonClick);
};

// закрытие модального окна
export const closePopup = (popup, classVisible = 'popup_is-opened') => {
  popup.classList.remove(classVisible);
  document.removeEventListener('keydown', handleEscapeKey);
  popup.removeEventListener('click', handleOverlayAndCloseButtonClick);
};

// обработчик Esc
const handleEscapeKey = (event) => {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
  };
};

// обработчик клика на оверлей или кнопку закрытия
const handleOverlayAndCloseButtonClick = (event) => {
  if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close')) {
    closePopup(event.currentTarget);
  };
};