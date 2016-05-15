// (function(){
// код
// }());
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 59.93623512, lng: 30.32167125}
  });
setMarkers(map);
}

  var points = [
  ['ФлугерЪ', 59.93623512, 30.32167125],
];

function setMarkers(map) {
  // Добавляем маркер на карту
  var image = {
    url: "../img/icon-map-marker.svg",
    // Эта картинка 36×36 пикселей.
    // Точка «упора» нарисованного маркера по горизонтали — середина
    // Точка «упора» нарисованного маркера по вертикали в 11 пикселях от нижнего края картинки
    size: new google.maps.Size(36, 36),
    anchor: new google.maps.Point(18, 25) // 36 / 2 (горизонталь) и 36 - 11 (вертикаль)
  };

  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    var marker = new google.maps.Marker({
      position: {lat: point[1], lng: point[2]},
      map: map,
      icon: image,
      title: point[0]
    });
  }
}