var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var modal = document.querySelector(".modal");
var modalOverlay = document.querySelector(".modal-overlay");
var orderLink = document.querySelector(".product-item__order");
var map = document.querySelector(".contacts__map");
var myMap;
var myPlacemark0;

navMain.classList.remove("main-nav--nojs");
if (map) {
  map.classList.remove("contacts__map--nojs");
}

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});
if (orderLink) {
  orderLink.addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.add("modal-show");
    modalOverlay.classList.add("modal-overlay-show");
  });
}
if (modalOverlay) {
  modalOverlay.addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.remove("modal-show");
    modalOverlay.classList.remove("modal-overlay-show");
  });
}
if (modal) {
  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (modal.classList.contains("modal-show")) {
        modal.classList.remove("modal-show");
      }
    }
  });
}

ymaps.ready(init); // карта соберется после загрузки скрипта и элементов

function init() { // функция - собиралка карты и фигни
  myMap = new ymaps.Map(map, { // создаем и присваиваем глобальной переменной карту и суем её в див с id="map"
    center: [59.938631, 30.323055], // ну тут центр
    behaviors: ["default", "scrollZoom"], // скроллинг колесом
    zoom: 17 // тут масштаб
  });
  myMap.controls // добавим всяких кнопок, в скобках их позиции в блоке
    .add("zoomControl", {left: 5, top: 5}) //Масштаб
  myPlacemark0 = new ymaps.Placemark([59.938631, 30.323055],
    {
      balloonContent: 'Маленькая иконка'
    },
    {
      iconLayout: 'default#image',
      iconImageHref: "img/icon-map-pin.svg", // картинка иконки
      iconImageSize: [67, 100], // размер иконки
      iconImageOffset: [-20, -100], // позиция иконки
    });
  /* Добавляем метки на карту */
  myMap.geoObjects.add(myPlacemark0);
}
