var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var modal = document.querySelector('.modal');
var modalOverlay  = document.querySelector(".modal-overlay");
var orderLink = document.querySelector(".product-item__order");

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

orderLink.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.add("modal-show");
  modalOverlay.classList.add("modal-overlay-show");
});

modalOverlay.addEventListener("click", function (event) {
  event.preventDefault();
  modal.classList.remove("modal-show");
  modalOverlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (feedback.classList.contains("modal-show")) {
      feedback.classList.remove("modal-show");
    }
  }
});
