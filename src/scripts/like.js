export const liked = (card) => {
  const likeButton = card.querySelector('.card__like-button');
  likeButton.classList.toggle('card__like-button_is-active');
};