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

  var infoWindow = 0;

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
      // handleLocationError(true, infoWindow, map.getCenter());
      Console.log("exploté un poquito :(")
    });
  } else {
    // Browser doesn't support Geolocation
    // handleLocationError(false, infoWindow, map.getCenter());
    Console.log("exploté un poquito :(")
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
    google.maps.event.addListener(marker, 'click', function(event) {
      openModal(icons[feature.type].icon, feature.name);
    });
  }

  var features = [
    {
      position: new google.maps.LatLng(10.410358, -66.882411),
      type: 'battery',
      name: 'BATERÍAS'
    }, {
      position: new google.maps.LatLng(10.410104, -66.883641),
      type: 'battery',
      name: 'BATERÍAS'
    }, {
      position: new google.maps.LatLng(10.411402, -66.881002),
      type: 'battery',
      name: 'BATERÍAS'
    }, {
      position: new google.maps.LatLng(10.410442, -66.880535),
      type: 'battery',
      name: 'BATERÍAS'
    }, {
      position: new google.maps.LatLng(10.409698, -66.881721),
      type: 'paper',
      name: 'PAPEL'
    }, {
      position: new google.maps.LatLng(10.409830, -66.883298),
      type: 'paper',
      name: 'PAPEL'
    }, {
      position: new google.maps.LatLng(10.410658, -66.882295),
      type: 'paper',
      name: 'PAPEL'
    }, {
      position: new google.maps.LatLng(10.412046, -66.882102),
      type: 'paper',
      name: 'PAPEL'
    }, {
      position: new google.maps.LatLng(10.410479, -66.880321),
      type: 'paper',
      name: 'PAPEL'
    }, {
      position: new google.maps.LatLng(10.410152, -66.880643),
      type: 'glass',
      name: 'VIDRIO'
    }, {
      position: new google.maps.LatLng(10.411059, -66.881689),
      type: 'glass',
      name: 'VIDRIO'
    }, {
      position: new google.maps.LatLng(10.409998, -66.882579),
      type: 'glass',
      name: 'VIDRIO'
    }, {
      position: new google.maps.LatLng(10.408911, -66.882831),
      type: 'glass',
      name: 'VIDRIO'
    }, {
      position: new google.maps.LatLng(10.411544, -66.882488),
      type: 'glass',
      name: 'VIDRIO'
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

function set_color_for(tag){
  // console.log(tag);
  // console.log(document.getElementById(tag).className);
  // document.getElementById(tag).className = "cool-link";
  // console.log(document.getElementById(tag).className);
  document.addEventListener('DOMContentLoaded', function() {
    alert("Ready!");
    console.log(document.getElementById(tag))
  }, false);
}

function create_menu(blue) {
/* This is what we are building    
  <div id="flex-item1">
    <a href="inicio.html" class="cool-link" id="ic-home"> 
      <i class="fa fa-home fa-2x" aria-hidden="true"></i>
    </a>
  </div>
  <div id="flex-item2">
    <a href="mapa.html" class="nigga-link" id="ic-map"> 
      <i class="fa fa-map-o fa-2x" aria-hidden="true"></i>
    </a>
  </div>
  <div id="flex-item3">
    <a href="ranking.html" class="nigga-link" id="ic-ranking"> 
      <i class="fa fa-trophy fa-2x" aria-hidden="true"></i>
    </a>
  </div>
  <div id="flex-item4" class="nigga-link" id="ic-conf">
    <i class="fa fa-cog fa-2x" aria-hidden="true"></i>
  </div>*/

  var tags = [
    { link:"inicio.html" , icon:"fa-home"  , id:"ic-home"},
    { link:"mapa.html"   , icon:"fa-map-o" , id:"ic-map" },
    { link:"ranking.html", icon:"fa-trophy", id:"ic-ranking" },
    { link:"conf.html"   , icon:"fa-cog"   , id:"ic-conf" }
  ]

  for (var i = 0 ; i <= tags.length; i++) {
    /* Creating div */
    var ext_tag = document.createElement("div");
    ext_tag.setAttribute("id","flex-item" + (i+1));

    /* Creating link for icon */
    var link    = document.createElement("a");
    console.log(tags[i].id);
    link.setAttribute("id",tags[i].id);
    link.setAttribute("href",tags[i].link);
    if (tags[i].id == blue){
      console.log("blue link!");
      link.setAttribute("class","cool-link");
    }
    else {
      console.log("gray link!");
      link.setAttribute("class","nigga-link");
    }
    
    /* Finally the icon*/
    var icon    = document.createElement("i");
    icon.setAttribute("class","fa " + tags[i].icon + " fa-2x");
    icon.setAttribute("aria-hidden","true");

    /* Now we assemble */
    link.appendChild(icon);
    ext_tag.appendChild(link);
    document.getElementById("menu-container").appendChild(ext_tag);
  }

}

function openModal(icon, name) {
  // Get the modal
  var modal = document.getElementById('myModal');
  var check = document.getElementById('check');
  var code = document.getElementById('code');

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
      code.value = '';
  }

  if (check) {
    check.onclick = function() {
        modal.style.display = "none";
        code.value = '';
    }
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }

  document.getElementById("point").src = icon;

  if (name !== 'none') {
    document.getElementsByTagName("b")[0].innerHTML = "PUNTO DE RECICLAJE DE " + name;
  }
}