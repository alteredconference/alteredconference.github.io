function initMap() {
  var topics = {lat: 52.48352, lng: 13.441180000000031};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: topics
  });
  var marker = new google.maps.Marker({
    position: topics,
    map: map
  });
}
