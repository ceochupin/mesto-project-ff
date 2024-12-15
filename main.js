(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{T:()=>d});var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-29",headers:{authorization:"5d315a5a-e4dc-4da1-9d07-966fd5ba0f35","Content-Type":"application/json"}},n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"popup_is-opened";document.querySelector(".".concat(e))||(t.classList.add(e),document.addEventListener("keydown",o),t.addEventListener("click",c))},r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"popup_is-opened";t.classList.remove(e),document.removeEventListener("keydown",o),t.removeEventListener("click",c)},o=function(t){if("Escape"===t.key){var e=document.querySelector(".popup_is-opened");r(e)}},c=function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__close"))&&r(t.currentTarget)},a=function(t,e){var n=Array.from(t.querySelectorAll(e.inputSelector)),r=t.querySelector(e.submitButtonSelector);n.forEach((function(n){return i(t,n,e)})),l(n,r)},i=function(t,e,n){var r=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(n.inputErrorClass),r.textContent=""},u=function(t,e,n){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorText):e.setCustomValidity(""),e.validity.valid?i(t,e,n):function(t,e,n){var r=t.querySelector(".".concat(e.id,"-error"));e.classList.add(n.inputErrorClass),r.textContent=e.validationMessage}(t,e,n)},l=function(t,e){e.disabled=function(t){return t.some((function(t){return!t.validity.valid}))}(t)};function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var d=document.querySelector("#card-template"),f=document.querySelector(".places__list"),p={button:document.querySelector(".profile__edit-avatar-button"),image:document.querySelector(".profile__image"),popup:document.querySelector(".popup_type_edit-avatar"),form:document.forms["edit-avatar"]},m={button:document.querySelector(".profile__edit-button"),popup:document.querySelector(".popup_type_edit"),title:document.querySelector(".profile__title"),description:document.querySelector(".profile__description"),form:document.forms["edit-profile"]},h={button:document.querySelector(".profile__add-button"),popup:document.querySelector(".popup_type_new-card"),form:document.forms["new-place"]},v={popup:document.querySelector(".popup_type_image"),image:document.querySelector(".popup__image"),caption:document.querySelector(".popup__caption")},y={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inputErrorClass:"popup__input_type_error",errorClass:"popup__error"},_="",b=function(t){var e=t.altName,n=t.imageUrl;p.image.src=n,p.image.alt="Аватар пользователя ".concat(e)},S=function(t){var e=t.titleName,n=t.descriptionAbout;m.title.textContent=e,m.description.textContent=n},g=function(t,e){t.textContent=e?"Сохранение...":"Сохранить"},k={handleLikeCard:function(t){var n=t.button,r=t.cardId,o=t.counter,c=function(t){return o.textContent=t.likes.length};n.classList.contains("card__like-button_is-active")?function(t){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(t),{method:"DELETE",headers:e.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}(r).then((function(t){return c(t)})).catch((function(t){return console.log(t)})):function(t){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(t),{method:"PUT",headers:e.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}(r).then((function(t){return c(t)})).catch((function(t){return console.log(t)})),n.classList.toggle("card__like-button_is-active")},handleDeleteCard:function(t){var n,r=t.card;(n=t.cardId,fetch("".concat(e.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:e.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))).then((function(){return r.remove()})).catch((function(t){return console.log(t)}))},handleImageClick:function(t){var e=t.name,r=t.link;v.image.src=r,v.image.alt=e,v.caption.textContent=e,n(v.popup)}},q=function(t){var e=t.cardData,n=t.method,r=void 0===n?"prepend":n,o=function(t,e,n){var r=t.name,o=t.link,c=t.likes,a=t.owner,i=t._id,u=n.handleLikeCard,l=n.handleDeleteCard,s=n.handleImageClick,f=d.content.querySelector(".card").cloneNode(!0),p=f.querySelector(".card__image"),m=f.querySelector(".card__title"),h=f.querySelector(".card__delete-button"),v=f.querySelector(".card__like-button"),y=f.querySelector(".card__like-counter");return p.src=o,p.alt=r,m.textContent=r,y.textContent=c.length,e!==a._id?h.remove():h.addEventListener("click",(function(){l({card:f,cardId:i})})),c.find((function(t){return t._id===e}))&&v.classList.add("card__like-button_is-active"),v.addEventListener("click",(function(){u({button:v,cardId:i,counter:y})})),p.addEventListener("click",(function(){s({name:r,link:o})})),f}(e,_,k);f[r](o)};p.form.addEventListener("submit",(function(t){var n;t.preventDefault(),g(p.form.button,!0),(n=p.form.link.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:n})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))).then((function(t){b({altName:m.title.textContent,imageUrl:t.avatar}),r(p.popup)})).catch((function(t){return console.log(t)})).finally((function(){return g(p.form.button,!1)}))})),m.form.addEventListener("submit",(function(t){var n,o,c;t.preventDefault(),g(m.form.button,!0),(n={titleName:m.form.name.value,descriptionAbout:m.form.description.value},o=n.titleName,c=n.descriptionAbout,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:o,about:c})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))).then((function(t){S({titleName:t.name,descriptionAbout:t.about}),r(m.popup)})).catch((function(t){return console.log(t)})).finally((function(){return g(m.form.button,!1)}))})),h.form.addEventListener("submit",(function(t){var n,o,c;t.preventDefault(),g(h.form.button,!0),(n={name:h.form["place-name"].value,link:h.form.link.value},o=n.name,c=n.link,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:o,link:c})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))).then((function(t){q({cardData:t}),r(h.popup)})).catch((function(t){return console.log(t)})).finally((function(){return g(h.form.button,!1)}))})),p.button.addEventListener("click",(function(){a(p.form,y),p.form.link.value=p.image.src,n(p.popup)})),m.button.addEventListener("click",(function(){a(m.form,y),m.form.name.value=m.title.textContent,m.form.description.value=m.description.textContent,n(m.popup)})),h.button.addEventListener("click",(function(){h.form.reset(),a(h.form,y),n(h.popup)})),function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){return function(t,e){var n=Array.from(t.querySelectorAll(e.inputSelector)),r=t.querySelector(e.submitButtonSelector);l(n,r),n.forEach((function(o){o.addEventListener("input",(function(){u(t,o,e),l(n,r)}))}))}(e,t)}))}(y),Promise.all([fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})),fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(e,n)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];console.log({cards:o}),_=c._id,o.forEach((function(t){q({cardData:t,method:"append"})})),b({altName:c.name,imageUrl:c.avatar}),S({titleName:c.name,descriptionAbout:c.about})})).catch((function(t){return console.log(t)}))})();