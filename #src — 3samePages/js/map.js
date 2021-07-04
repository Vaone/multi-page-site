ymaps.ready(init);

function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    center: [55.765, 37.623],
    zoom: 13,
    behaviors: ["drag"],
    controls: ["zoomControl"],
  });

}
