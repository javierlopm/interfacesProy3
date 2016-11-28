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
    center: {lat: 10.410482, lng: -66.881218},
    zoom: 17,
    zoomControl: false,
    scaleControl: false,
    streetViewControl: false
  });

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      
      map.setCenter(pos);

      var myloc = new google.maps.Marker({
        position: pos,
        clickable: false,
        icon: new google.maps.MarkerImage('http://maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
                                          new google.maps.Size(22,22),
                                          new google.maps.Point(0,18),
                                          new google.maps.Point(11,11)),
        shadow: null,
        zIndex: 999,
        map: map
      });    

    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  } 

  var icons = {
    glass: {
      icon: 'http://icons.veryicon.com/png/System/Glyphish/142%20wine%20bottle.png'
    },
    paper: {
      icon: 'http://www.totalshareware.com/ApplicationIcons/68510-1-Icon.gif'
    },
    battery: {
      icon: 'http://findicons.com/files/icons/1588/farm_fresh_web/32/battery.png'
    }
  };

  function addMarker(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
      alert("Presionaste un icono");
    });
  }

  var features = [
    {
      position: new google.maps.LatLng(10.410358, -66.882411),
      type: 'battery'
    }, {
      position: new google.maps.LatLng(10.410104, -66.883641),
      type: 'battery'
    }, {
      position: new google.maps.LatLng(10.411402, -66.881002),
      type: 'battery'
    }, {
      position: new google.maps.LatLng(10.410442, -66.880535),
      type: 'battery'
    }, {
      position: new google.maps.LatLng(10.409698, -66.881721),
      type: 'paper'
    }, {
      position: new google.maps.LatLng(10.409830, -66.883298),
      type: 'paper'
    }, {
      position: new google.maps.LatLng(10.410658, -66.882295),
      type: 'paper'
    }, {
      position: new google.maps.LatLng(10.412046, -66.882102),
      type: 'paper'
    }, {
      position: new google.maps.LatLng(10.410479, -66.880321),
      type: 'paper'
    }, {
      position: new google.maps.LatLng(10.410152, -66.880643),
      type: 'glass'
    }, {
      position: new google.maps.LatLng(10.411059, -66.881689),
      type: 'glass'
    }, {
      position: new google.maps.LatLng(10.409998, -66.882579),
      type: 'glass'
    }, {
      position: new google.maps.LatLng(10.408911, -66.882831),
      type: 'glass'
    }, {
      position: new google.maps.LatLng(10.411544, -66.882488),
      type: 'glass'
    }
  ];

  for (var i = 0, feature; feature = features[i]; i++) {
    addMarker(feature);
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}
