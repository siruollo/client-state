'use strict';

const form = document.getElementById('signin');
const login = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const loginBtn = document.getElementById('signin__btn');
const id = document.getElementById('user_id');

form.classList.add('signin_active');

window.onload = function() {
  if (localStorage.user) {
    welcome.classList.add('welcome_active');
    form.classList.remove('signin_active');
    id.innerText = localStorage.user;
  }
};

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const formData = new FormData(login);
  const request = new XMLHttpRequest();

  request.open('POST', ' https://netology-slow-rest.herokuapp.com/auth.php');
  request.send(formData);
  request.addEventListener('readystatechange', function() {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      if (data.success) {
        welcome.classList.add('welcome_active');
        form.classList.remove('signin_active');
        id.innerText = data.user_id;
        localStorage.setItem('user', data.user_id);
      } else {
        alert('Неверный логин/пароль');
      }
    }
  });
});