import {
  skeletonCardTemplate,
  cardsContainer,
  userAvatar,
  userInfo
} from "../index.js";

export const setSkeletonCards = (countCards = 1, method = 'prepend', isLoading) => {
  if (isLoading) {
    for (let i = 0; i < countCards; i++) {
      const card = skeletonCardTemplate.content.cloneNode(true);
      cardsContainer[method](card);
    }
  } else {
    cardsContainer.querySelectorAll('.skeleton').forEach(card => card.remove());
  }
}

const setSkeletonProfile = (isLoading) => {
  userAvatar.image.style.display = (isLoading) ? 'none' : 'block';
  userAvatar.imageSkeleton.style.display = (isLoading) ? 'block' : 'none';

  userInfo.title.style.display = (isLoading) ? 'none' : 'block';
  userInfo.titleSkeleton.style.display = (isLoading) ? 'block' : 'none';

  userInfo.description.style.display = (isLoading) ? 'none' : 'block';
  userInfo.descriptionSkeleton.style.display = (isLoading) ? 'block' : 'none';
};

export const renderSkeleton = (isLoading) => {
  const countCards = 9;

  setSkeletonCards(countCards, 'append', isLoading);
  setSkeletonProfile(isLoading);
}