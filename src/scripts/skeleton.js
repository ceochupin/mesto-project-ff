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
    };
  } else {
    cardsContainer.querySelectorAll('.skeleton').forEach(card => card.remove());
  };
};

const setSkeletonProfile = (isLoading) => {
  userAvatar.avatar.style.display = (isLoading) ? 'none' : 'block';
  userInfo.name.style.display = (isLoading) ? 'none' : 'block';
  userInfo.about.style.display = (isLoading) ? 'none' : 'block';

  userAvatar.avatarSkeleton.style.display = (isLoading) ? 'block' : 'none';
  userInfo.nameSkeleton.style.display = (isLoading) ? 'block' : 'none';
  userInfo.aboutSkeleton.style.display = (isLoading) ? 'block' : 'none';
};

export const renderSkeleton = (isLoading) => {
  const countCards = 9;

  setSkeletonCards(countCards, 'append', isLoading);
  setSkeletonProfile(isLoading);
};