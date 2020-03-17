'use strict';

const modalSubscribe = document.getElementById("subscribe-modal");

const getCookie = (name) => {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts
      .pop()
      .split(";")
      .shift();
  }
};

const closeModal = (e) => {
  if (e.target.classList.contains('modal__close')) {
    modalSubscribe.classList.remove("modal_active");
    document.cookie = "modalclose=true";
  }
};

if (getCookie("modalclose")) {
  modalSubscribe.classList.remove("modal_active");
  modalSubscribe.removeEventListener('click', closeModal);
} else {
  modalSubscribe.classList.add("modal_active");
}

modalSubscribe.addEventListener('click', closeModal);