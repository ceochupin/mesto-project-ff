const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-29',
  headers: {
    authorization: '5d315a5a-e4dc-4da1-9d07-966fd5ba0f35',
    'Content-Type': 'application/json'
  }
};

// const checkResponse = (res) => {
//   if (res.ok) {
//     return res.json();
//   }

//   return Promise.reject(`Ошибка: ${res.status}`);
// };

const checkResponse = (res) => {
  return (res.ok) ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then((res) => checkResponse(res));
};

export const getUserProfile = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then((res) => checkResponse(res));
};

export const updateUserInfo = ( { titleName, descriptionAbout } ) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: titleName,
      about: descriptionAbout
    })
  })
    .then((res) => checkResponse(res));
};

export const addNewCard = ( { name, link } ) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link
    })
  })
    .then((res) => checkResponse(res));
};

export const deleteCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(checkResponse);
};

export const likedCard = (cardId, method = 'PUT') => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: method,
    headers: config.headers
  })
    .then((res) => checkResponse(res));
};

export const updateUserAvatar = (imageUrl) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: imageUrl
    })
  })
    .then((res) => checkResponse(res));
};