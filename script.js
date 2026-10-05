const toggleButton = document.getElementById('toggleButton');
const menu = document.getElementById('menu');

toggleButton.addEventListener('click', () => {
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block';
    toggleButton.textContent = 'Esconder Menu';
  } else {
    menu.style.display = 'none';
    toggleButton.textContent = 'Mostrar Menu';
  }
});
