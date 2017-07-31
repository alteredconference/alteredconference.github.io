function initMap() {
  var essentis = {lat: 52.457185, lng: 13.540074};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: essentis
  });
  var marker = new google.maps.Marker({
    position: essentis,
    map: map
  });
}
