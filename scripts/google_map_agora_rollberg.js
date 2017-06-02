function initMap() {
  var rollberg = {lat: 52.4796351, lng: 13.4330946};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: rollberg
  });
  var marker = new google.maps.Marker({
    position: rollberg,
    map: map
  });
}
