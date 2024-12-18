import {
  skeletonCardTemplate,
  cardsContainer,
  avatarEdit,
  profileEdit
} from "../index.js";

export const setSkeletonCards = (countCards = 1, method = 'prepend') => {
  for (let i = 0; i < countCards; i++) {
    const card = skeletonCardTemplate.content.cloneNode(true);
    cardsContainer[method](card);
  }
}

export const deleteSkeletonCards = () => {
  cardsContainer.querySelectorAll('.skeleton').forEach(card => card.remove());
}

const setSkeletonProfile = (isLoading) => {
  avatarEdit.image.style.display = (isLoading) ? 'none' : 'block';
  avatarEdit.imageSkeleton.style.display = (isLoading) ? 'block' : 'none';

  profileEdit.title.style.display = (isLoading) ? 'none' : 'block';
  profileEdit.titleSkeleton.style.display = (isLoading) ? 'block' : 'none';

  profileEdit.description.style.display = (isLoading) ? 'none' : 'block';
  profileEdit.descriptionSkeleton.style.display = (isLoading) ? 'block' : 'none';
};

export const renderSkeleton = (isLoading) => {
  const countCards = 9;

  (isLoading) ? setSkeletonCards(countCards, 'append') : deleteSkeletonCards();
  setSkeletonProfile(isLoading);
}