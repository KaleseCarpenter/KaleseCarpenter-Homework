const btn = document.getElementById('switchIt');

let index = 0;

const colors = ['red', 'orange', 'blue', 'yellow'];

switchIt.addEventListener('click', function onClick() {
  switchIt.style.backgroundColor = colors[index];
  switchIt.style.color = 'lavender';

  index = index >= colors.length - 1 ? 0 : index + 1;
});