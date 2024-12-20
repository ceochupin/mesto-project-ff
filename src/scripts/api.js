const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-29',
  headers: {
    authorization: '5d315a5a-e4dc-4da1-9d07-966fd5ba0f35',
    'Content-Type': 'application/json'
  }
};

const checkResponse = (res) => {
  return (res.ok) ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(checkResponse);
};

export const getUserProfile = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then(checkResponse);
};

export const updateUserInfo = ( { name, about } ) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name,
      about
    })
  })
    .then(checkResponse);
};

export const addNewCard = ( { name, link } ) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name,
      link
    })
  })
    .then(checkResponse);
};

export const deleteCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(checkResponse);
};

export const getLikedCard = (cardId, method = 'PUT') => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method,
    headers: config.headers
  })
    .then(checkResponse);
};

export const updateUserAvatar = (avatar) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar
    })
  })
    .then(checkResponse);
};