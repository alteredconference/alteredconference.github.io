function init_map(){
  var myOptions = {
    zoom:14,
    center:new google.maps.LatLng(52.4796351,13.4330946),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById('agora-rollberg-gmaps'), myOptions);
  marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(52.4796351,13.4330946)});
  infowindow = new google.maps.InfoWindow({content:"<b>Agora Rollberg</b><br/>Rollbergstr 26<br/>12053 Berlin" });

  google.maps.event.addListener(marker, "click", function(){
    infowindow.open(map,marker);
  });

  infowindow.open(map,marker);
}

google.maps.event.addDomListener(window, 'load', init_map);
