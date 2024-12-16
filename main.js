(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{im:()=>v,Tp:()=>m,vY:()=>y,UK:()=>h,wY:()=>f});var t={baseUrl:"https://nomoreparties.co/v1/wff-cohort-29",headers:{authorization:"5d315a5a-e4dc-4da1-9d07-966fd5ba0f35","Content-Type":"application/json"}},n=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"popup_is-opened";document.querySelector(".".concat(t))||(e.classList.add(t),document.addEventListener("keydown",c),e.addEventListener("click",a))},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"popup_is-opened";e.classList.remove(t),document.removeEventListener("keydown",c),e.removeEventListener("click",a)},c=function(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");o(t)}},a=function(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__close"))&&o(e.currentTarget)},i=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){return u(e,n,t)})),d(n,r)},u=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.textContent=""},l=function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorText):t.setCustomValidity(""),t.validity.valid?u(e,t,n):function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),r.textContent=t.validationMessage}(e,t,n)},d=function(e,t){t.disabled=function(e){return e.some((function(e){return!e.validity.valid}))}(e)},s=function(e){e?(function(){for(var e=0;e<9;e++){var t=f.content.cloneNode(!0);y.prepend(t)}}(),v.image.style.display="none",v.imageSkeleton.style.display="block",h.title.style.display="none",h.titleSkeleton.style.display="block",h.description.style.display="none",h.descriptionSkeleton.style.display="block"):(y.querySelectorAll(".skeleton__card").forEach((function(e){return e.remove()})),v.image.style.display="block",v.imageSkeleton.style.display="none",h.title.style.display="block",h.titleSkeleton.style.display="none",h.description.style.display="block",h.descriptionSkeleton.style.display="none")};function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var f=document.querySelector("#card-template-skeleton"),m=document.querySelector("#card-template"),y=document.querySelector(".places__list"),v={button:document.querySelector(".profile__edit-avatar-button"),image:document.querySelector(".profile__image"),imageSkeleton:document.querySelector(".skeleton__profile_avatar"),popup:document.querySelector(".popup_type_edit-avatar"),form:document.forms["edit-avatar"]},h={button:document.querySelector(".profile__edit-button"),popup:document.querySelector(".popup_type_edit"),title:document.querySelector(".profile__title"),titleSkeleton:document.querySelector(".skeleton__profile_title"),description:document.querySelector(".profile__description"),descriptionSkeleton:document.querySelector(".skeleton__profile_description"),form:document.forms["edit-profile"]},_={button:document.querySelector(".profile__add-button"),popup:document.querySelector(".popup_type_new-card"),form:document.forms["new-place"]},b={popup:document.querySelector(".popup_type_image"),image:document.querySelector(".popup__image"),caption:document.querySelector(".popup__caption")},S={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inputErrorClass:"popup__input_type_error",errorClass:"popup__error"},k="";document.addEventListener("DOMContentLoaded",(function(){s(!0),Promise.all([fetch("".concat(t.baseUrl,"/cards"),{headers:t.headers}).then((function(e){return n(e)})),fetch("".concat(t.baseUrl,"/users/me"),{headers:t.headers}).then((function(e){return n(e)}))]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];k=c._id,o.forEach((function(e){L({cardData:e,method:"append"})})),g({altName:c.name,imageUrl:c.avatar}),q({titleName:c.name,descriptionAbout:c.about})})).catch((function(e){return console.log(e)})).finally((function(){return s(!1)}))}));var g=function(e){var t=e.altName,n=e.imageUrl;v.image.src=n,v.image.alt="Аватар пользователя ".concat(t)},q=function(e){var t=e.titleName,n=e.descriptionAbout;h.title.textContent=t,h.description.textContent=n},E=function(e,t){e.textContent=t?"Сохранение...":"Сохранить"},C={handleLikeCard:function(e){var r=e.button,o=e.cardId,c=e.counter,a=function(e){c.textContent=e.likes.length,r.classList.toggle("card__like-button_is-active")};r.classList.contains("card__like-button_is-active")?function(e){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:t.headers}).then((function(e){return n(e)}))}(o).then((function(e){return a(e)})).catch((function(e){return console.log(e)})):function(e){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:t.headers}).then((function(e){return n(e)}))}(o).then((function(e){return a(e)})).catch((function(e){return console.log(e)}))},handleDeleteCard:function(e){var r,o=e.card;(r=e.cardId,fetch("".concat(t.baseUrl,"/cards/").concat(r),{method:"DELETE",headers:t.headers}).then(n)).then((function(){return o.remove()})).catch((function(e){return console.log(e)}))},handleImageClick:function(e){var t=e.name,n=e.link;b.image.src=n,b.image.alt=t,b.caption.textContent=t,r(b.popup)}},L=function(e){var t=e.cardData,n=e.method,r=void 0===n?"prepend":n,o=function(e,t,n){var r=e.name,o=e.link,c=e.likes,a=e.owner,i=e._id,u=n.handleLikeCard,l=n.handleDeleteCard,d=n.handleImageClick,s=m.content.querySelector(".card").cloneNode(!0),p=s.querySelector(".card__image"),f=s.querySelector(".card__title"),y=s.querySelector(".card__delete-button"),v=s.querySelector(".card__like-button"),h=s.querySelector(".card__like-counter");return p.src=o,p.alt=r,f.textContent=r,h.textContent=c.length,t!==a._id?y.remove():y.addEventListener("click",(function(){l({card:s,cardId:i})})),c.find((function(e){return e._id===t}))&&v.classList.add("card__like-button_is-active"),v.addEventListener("click",(function(){u({button:v,cardId:i,counter:h})})),p.addEventListener("click",(function(){d({name:r,link:o})})),s}(t,k,C);y[r](o)};v.form.addEventListener("submit",(function(e){var r;e.preventDefault(),E(v.form.button,!0),(r=v.form.link.value,fetch("".concat(t.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:r})}).then((function(e){return n(e)}))).then((function(e){g({altName:h.title.textContent,imageUrl:e.avatar}),o(v.popup)})).catch((function(e){return console.log(e)})).finally((function(){return E(v.form.button,!1)}))})),h.form.addEventListener("submit",(function(e){var r,c,a;e.preventDefault(),E(h.form.button,!0),(r={titleName:h.form.name.value,descriptionAbout:h.form.description.value},c=r.titleName,a=r.descriptionAbout,fetch("".concat(t.baseUrl,"/users/me"),{method:"PATCH",headers:t.headers,body:JSON.stringify({name:c,about:a})}).then((function(e){return n(e)}))).then((function(e){q({titleName:e.name,descriptionAbout:e.about}),o(h.popup)})).catch((function(e){return console.log(e)})).finally((function(){return E(h.form.button,!1)}))})),_.form.addEventListener("submit",(function(e){var r,c,a;e.preventDefault(),E(_.form.button,!0),(r={name:_.form["place-name"].value,link:_.form.link.value},c=r.name,a=r.link,fetch("".concat(t.baseUrl,"/cards"),{method:"POST",headers:t.headers,body:JSON.stringify({name:c,link:a})}).then((function(e){return n(e)}))).then((function(e){L({cardData:e}),o(_.popup)})).catch((function(e){return console.log(e)})).finally((function(){return E(_.form.button,!1)}))})),v.button.addEventListener("click",(function(){i(v.form,S),v.form.link.value=v.image.src,r(v.popup)})),h.button.addEventListener("click",(function(){i(h.form,S),h.form.name.value=h.title.textContent,h.form.description.value=h.description.textContent,r(h.popup)})),_.button.addEventListener("click",(function(){_.form.reset(),i(_.form,S),r(_.popup)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){return function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);d(n,r),n.forEach((function(o){o.addEventListener("input",(function(){l(e,o,t),d(n,r)}))}))}(t,e)}))}(S)})();