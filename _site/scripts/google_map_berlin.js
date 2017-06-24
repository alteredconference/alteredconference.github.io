function initMap() {
  var berlin = {lat: 52.52437, lng: 13.41053};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: berlin
  });
  var marker = new google.maps.Marker({
    position: berlin,
    map: map
  });
}
