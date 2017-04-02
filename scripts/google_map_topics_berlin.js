function init_map(){
  var myOptions = {
    zoom:14,
    center:new google.maps.LatLng(52.48352,13.441180000000031),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById('topics-gmaps'), myOptions);
  marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(52.48352, 13.441180000000031)});
  infowindow = new google.maps.InfoWindow({content:"<b>Topics Berlin</b><br/>Weserstr 166<br/>12045 Berlin" });

  google.maps.event.addListener(marker, "click", function(){
    infowindow.open(map,marker);
  });

  infowindow.open(map,marker);
}

google.maps.event.addDomListener(window, 'load', init_map);
