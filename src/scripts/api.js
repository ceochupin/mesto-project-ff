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

const handleFetch = (method, url, body = {}) => {
  const options = {
    method,
    headers: config.headers,
  };

  if (Object.keys(body).length) {
    options.body = JSON.stringify(body);
  };

  return fetch(`${config.baseUrl}${url}`, options)
    .then(checkResponse);
};

export const mestoAPI = {
  getInitialCards() {
    return handleFetch('GET', '/cards');
  },

  getUserProfile() {
    return handleFetch('GET', '/users/me');
  },

  updateUserAvatar(avatar) {
    return handleFetch('PATCH', '/users/me/avatar', { avatar });
  },

  updateUserInfo({ name, about }) {
    return handleFetch('PATCH', '/users/me', { name, about });
  },

  addNewCard({ name, link }) {
    return handleFetch('POST', '/cards', { name, link });
  },

  deleteCard(cardId) {
    return handleFetch('DELETE', `/cards/${cardId}`);
  },

  itLikedCard(cardId) {
    return handleFetch('PUT', `/cards/likes/${cardId}`);
  },

  unLikedCard(cardId) {
    return handleFetch('DELETE', `/cards/likes/${cardId}`);
  }
};