'use strict';

const editor = document.getElementById('editor');
const reset = document.getElementById('reset');

if (localStorage.getItem('text')) {
  editor.value = localStorage.getItem('text');
}

editor.addEventListener('input', () => {
  const text = editor.value;
  localStorage.setItem('text', text);
});

reset.addEventListener('click', () => {
  localStorage.clear();
  editor.value = '';
});