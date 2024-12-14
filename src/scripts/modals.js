export const openPopup = (popup, classVisible = 'popup_is-opened') => {
  const openedPopupCheck = document.querySelector(`.${classVisible}`);
  if (openedPopupCheck) return;

  popup.classList.add(classVisible);
  document.addEventListener('keydown', handleEscapeKey);
  popup.addEventListener('click', handleOverlayAndCloseButtonClick);
};

export const closePopup = (popup, classVisible = 'popup_is-opened') => {
  popup.classList.remove(classVisible);
  document.removeEventListener('keydown', handleEscapeKey);
  popup.removeEventListener('click', handleOverlayAndCloseButtonClick);
};

const handleEscapeKey = (event) => {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
  };
};

const handleOverlayAndCloseButtonClick = (event) => {
  if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close')) {
    closePopup(event.currentTarget);
  };
};