const carouselItems = document.querySelectorAll('.carousel-item');
const removeActiveButton = document.getElementById('removeActiveButton');

// Ajouter la classe "active" au premier élément
carouselItems[0].classList.add('active');

carouselItems.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    } else {
      closeAllItems();
      item.classList.add('active');
    }
  });
});

removeActiveButton.addEventListener('click', (event) => {
  event.stopPropagation();
  closeAllItems();
});

function closeAllItems() {
  carouselItems.forEach((item) => {
    item.classList.remove('active');
  });
}


