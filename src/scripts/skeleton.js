import {
  skeletonCardTemplate,
  cardsContainer,
  avatarEdit,
  profileEdit
} from "../index.js";

const setSkeletonCards = () => {
  for (let i = 0; i < 9; i++) {
    const card = skeletonCardTemplate.content.cloneNode(true);
    cardsContainer.prepend(card);
  }
}

const deleteSkeletonCards = () => {
  cardsContainer.querySelectorAll('.skeleton__card').forEach(card => card.remove());
}

const setSkeletonProfile = () => {
  avatarEdit.image.style.display = 'none';
  avatarEdit.imageSkeleton.style.display = 'block';

  profileEdit.title.style.display = 'none';
  profileEdit.titleSkeleton.style.display = 'block';

  profileEdit.description.style.display = 'none';
  profileEdit.descriptionSkeleton.style.display = 'block';
};

const deleteSkeletonProfile = () => {
  avatarEdit.image.style.display = 'block';
  avatarEdit.imageSkeleton.style.display = 'none';

  profileEdit.title.style.display = 'block';
  profileEdit.titleSkeleton.style.display = 'none';

  profileEdit.description.style.display = 'block';
  profileEdit.descriptionSkeleton.style.display = 'none';
};

export const renderSkeleton = (isLoading) => {
  if (isLoading) {
    setSkeletonCards();
    setSkeletonProfile();
  } else {
    deleteSkeletonCards();
    deleteSkeletonProfile();
  }
}