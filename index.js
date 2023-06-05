const carouselItems = document.querySelectorAll('.carousel-item');

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

function closeAllItems() {
  carouselItems.forEach((item) => {
    item.classList.remove('active');
  });
}

