/**
 * Main scripts file
 * @author Rebeca Machado
 * @author Javier Lopez
 **/

 function initGauges(event) {

  var electricity, water, recycling, co2emissions;

  var electricity = new JustGage({
    id: "electricity",
    value: 20,
    min: 0,
    max: 100,
    title: "",
    label: "KW/h consumidos",
    gaugeWidthScale: 0.5,
    hideMinMax: true
  });

  var water = new JustGage({
    id: "water",
    value: 20,
    min: 0,
    max: 100,
    title: "",
    label: "litros consumidos",
    gaugeWidthScale: 0.5,
    hideMinMax: true
  });

  var recycling = new JustGage({
    id: "recycling",
    value: 20,
    min: 0,
    max: 20,
    title: "",
    label: "kilogramos recliclados",
    gaugeWidthScale: 0.5,
    hideMinMax: true,
    levelColors: [
    "#ff0000",
    "#f4f442",
    "#00ff00"
    ]
  });

  var co2emissions = new JustGage({
    id: "co2emissions",
    value: 20,
    min: 0,
    max: 100,
    title: "",
    label: "gramos expulsados",
    gaugeWidthScale: 0.5,
    hideMinMax: true
  });        

  setInterval(function() {
    electricity.refresh(getRandomInt(0, 100));
    water.refresh(getRandomInt(0, 100));
    recycling.refresh(getRandomInt(0, 20));
    co2emissions.refresh(getRandomInt(0, 100));          
  }, 2500);

}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 6
  });
  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}