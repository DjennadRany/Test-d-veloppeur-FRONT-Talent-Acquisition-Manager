const carouselItems = document.querySelectorAll('.carousel-item');
const removeActiveButtons = document.querySelectorAll('.removeActiveButton');

// Ajouter la classe "active" au premier élément
carouselItems[0].classList.add('active');

carouselItems.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    if (!item.classList.contains('active')) {
      closeAllItems();
      item.classList.add('active');
    }
  });

});

removeActiveButtons.forEach((button) => {
  button.addEventListener('click', closeAllItems);
});

function closeAllItems() {
  carouselItems.forEach((item) => {
    item.classList.remove('active');
  });
}
