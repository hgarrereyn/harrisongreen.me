var map;
var panorama;

var locations = {
    "emoryUniversity": {
        title: "Emory University",
        position: new google.maps.LatLng(33.7925459, -84.3240992),
        zoom: 17,
        heading: 90,
        pitch: 0
    },
    
    "lakeMeadNationalRecreationArea": {
        title: "Lake Mead NRA",
        position: new google.maps.LatLng(36.0162157, -114.7372666),
        zoom: 6,
        heading: 54.87,
        pitch: 15
    },
    
    "callvilleBay": {
        title: "Callville Bay",
        position: new google.maps.LatLng(36.1405001,-114.721735),
        zoom: 6,
        heading: 100,
        pitch:0
    },
    
    "lakeTahoe": {
        title: "Lake Tahoe",
        position: new google.maps.LatLng(39.092802,-120.0449687),
        zoom: 10
    },
    
    "sierraNevadaMountains": {
        title: "Sierra Nevada",
        position: new google.maps.LatLng(39.7876979,-120.9633119),
        zoom:10
    },
    
    "cascadeMountains": {
        title: "Cascade mountains",
        position: new google.maps.LatLng(46.9502936,-120.8634863),
        zoom: 10
    },
    
    "lavaBeds": {
        title: "Columbia Lava Beds",
        position: new google.maps.LatLng(45.9276761,-121.5389423),
        zoom: 10
    },
    
    "acrossPanhandle": {
        position: new google.maps.LatLng(48.0236886,-113.8078197)   
    },
    
    "willowCreek": {
        title: "Willow Creek",
        position: new google.maps.LatLng(40.867474,-123.6572996),
        zoom: 10
    },
    
    "needlesCalifornia": {
        title: "Needles, California",
        position: new google.maps.LatLng(34.8518874,-114.6089252),
        zoom: 11,
        heading: 308,
        pitch: 0
    },
    
    "topockArizona": {
        title: "Topock, Arizona",
        position: new google.maps.LatLng(34.7788893,-114.4827851),
        zoom:11,
        heading: 236,
        pitch: 0
    },
    
    "lakeHavasu": {
        title: "Lake Havasu",
        position: new google.maps.LatLng(34.46735,-114.37574),
        zoom:11
    },
    
    "billWilliamsRiver": {
        title: "Bill Williams River",
        position: new google.maps.LatLng(34.303747, -114.122973),
        zoom:11
    },
    
    "coloradoRiverReservation": {
        title: "Colorado River Reservation",
        position: new google.maps.LatLng(34.046692, -114.439174),
        zoom:11
    },
    
    "cibolaNationalWildlifeRefuge": {
        title: "Cibola Wildlife Refuge",
        position: new google.maps.LatLng(33.332081, -114.700776),
        zoom:11
    },
    
    "imperialNationalWildlifeRefuge": {
        title: "Imperial Wildlife Refuge",
        position: new google.maps.LatLng(33.144282, -114.685842),
        zoom:11
    },
    
    "yumaProvingGround": {
        title: "Yuma Proving Ground",
        position: new google.maps.LatLng(32.861046, -114.448113),
        zoom:11
    },
    
    "morelosDam": {
        title: "Morelos Dam",
        position: new google.maps.LatLng(32.7053029,-114.7288298),
        zoom:15
    },
    
    "gulfOfCalifornia": {
        title: "Gulf of California",
        position: new google.maps.LatLng(31.873902, -114.921606),
        zoom:11
    },
    
    "elGolfoDeSantaClara": {
        title: "El Golfo de Santa Clara",
        position: new google.maps.LatLng(31.6871375,-114.4954137),
        zoom:13
    },
    
    "houston": {
        title: "Houston",
        position: new google.maps.LatLng(29.7409681,-95.3700491),
        zoom:8
    },
    
    "losAngeles": {
        title: "Los Angeles",
        position: new google.maps.LatLng(34.0439006,-118.2579239),
        zoom:8
    },
    
    "grandCanyon": {
        title: "Grand Canyon",
        position: new google.maps.LatLng(36.1068189,-112.112796),
        zoom:8
    },
    
    "lakeMeadNationalRecreationArea2": {
        position: new google.maps.LatLng(36.0162157, -114.7372666),
    },
    
    "lasVegas": {
        title: "Las Vegas",
        position: new google.maps.LatLng(36.125,-115.175),
        zoom:10
    },
    
    "costalOregon": {
        title: "Costal Oregon",
        position: new google.maps.LatLng(44.5648929,-123.8920741),
        zoom:10
    },
    
    "bullheadCity": {
        title: "Bullhead City",
        position: new google.maps.LatLng(35.1230365,-114.5519721),
        zoom:10
    },
    
    "slabCity": {
        title: "Slabs Campground",
        position: new google.maps.LatLng(33.257979,-115.4631561),
        zoom:12
    },
    
    "saltonSea": {
        title: "Salton Sea",
        position: new google.maps.LatLng(33.420364, -115.820074),
        zoom:10
    },
    
    "sanDiego": {
        title: "San Diego",
        position: new google.maps.LatLng(32.8245525,-117.0951632),
        zoom:10
    },
    
    "seattleWashington": {
        title: "Seattle, Washington",
        position: new google.maps.LatLng(47.6030723,-122.3365066),
        zoom:10
    },
    
    "coachellaCalifornia": {
        title: "Coachella, California",
        position: new google.maps.LatLng(33.6819211,-116.1695502),
        zoom:10
    },
    
    "grandJunctionColorado": {
        title: "Grand Junction, Colorado",
        position: new google.maps.LatLng(39.085692,-108.5698355),
        zoom:10
    },
    
    "carthageSouthDakota": {
        title: "Carthage, South Dakota",
        position: new google.maps.LatLng(44.168634,-97.7149843),
        zoom:10
    },
    
    "alaskaHighway": {
        title: "Alaska Highway",
        position: new google.maps.LatLng(55.758471,-120.228723),
        zoom:14,
        heading: 177,
        pitch: 0
    },
    
    "liardHotSprings": {
        title: "Liard Hot Springs",
        position: new google.maps.LatLng(59.4224368,-126.0954558),
        zoom:10
    },
    
    "universityOfAlaskaFairbanks": {
        title: "U of A, Fairbanks",
        position: new google.maps.LatLng(64.8570673,-147.8231178),
        zoom:14
    },
    
    "bus142": {
        title: "Bus 142",
        position: new google.maps.LatLng(63.868401,-149.7693157),
        zoom:18
    }
}

var lineSymbol = {
    path: 'M 0,-1 0,1',
    strokeOpacity: 0.4,
    strokeColor: "#000",
    scale: 4
  };

var route = [];
for (var loc in locations)
    route.push(locations[loc].position);

var polyline = new google.maps.Polyline({
    path: route,
    strokeColor: "#000",
    strokeOpacity: 0.3,
    strokeWeight: 5,
    /*icons: [{
      icon: lineSymbol,
      offset: '0',
      repeat: '20px'
    }],*/
});

var customMarker = "images/marker.png";
var markers = {};
for (var loc in locations){
    markers[loc] = new google.maps.Marker({position: locations[loc].position, title:getName(loc), icon:customMarker})
}

function getName(camel){
    return camel.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){return str.toUpperCase();})
}

function removeMarkers(){
    for (var m in markers){
        markers[m].setMap(null);   
    }
}

function locationMark(loc){
    var container = $("#content-container");
    container.removeClass("showing");
    container.fadeOut(100);
    
    var l = locations[loc];
    var m = markers[loc]
    map.panTo(l.position);
    map.setZoom(l.zoom);
    m.setMap(map);
    
    $("#current").html(l.title + " <i class='fa fa-map-marker'></i>");
}

function launchStreetview(loc){
    $("#streetview-container").show();
    $("#picture-container").hide();
    $("#info-container").hide();
    
    var l = locations[loc];
    panorama = new google.maps.StreetViewPanorama(
        document.getElementById("streetview-container"), {
            position: {lat: l.position.lat(), lng: l.position.lng()},
            pov: {heading: l.heading, pitch: l.pitch},
            disableDefaultUI: true,
            zoom: 1,
            linksControl:true
        }
    );
    
    var container = $("#content-container");
    container.addClass("showing");
    container.fadeIn(100);
    
    $("#current").html(l.title + " <i class='fa fa-street-view'></i>");
}

function showPic(url){
    $("#streetview-container").hide();
    $("#info-container").hide();
    $("#picture-container").show();
    
    $("#picture-container").css({"backgroundImage":"url('/intothewild/"+url+"')"});
    
    var container = $("#content-container");
    container.addClass("showing");
    container.fadeIn(100);
}

$(document).ready(function(){
    $("#events-sidebar-btn").click(function(){
        var side = $("#events-sidebar");
        var content = $("#content-container");
        var header = $("#header");

        if (side.hasClass("expanded")){
            side.removeClass("expanded");
            side.stop(true).animate({"right":"-352px"}, 100);
            content.stop(true).animate({"right":"30px"}, 100, function(){
                if (panorama != null)
                    google.maps.event.trigger(panorama, 'resize');
            });
            header.stop(true).animate({"right":"0px"}, 100);
            $(this).text("<<");
        } else {
            side.addClass("expanded");
            side.stop(true).animate({"right":"0px"}, 100);
            content.stop(true).animate({"right":"382px"}, 100, function(){
                if (panorama != null)
                    google.maps.event.trigger(panorama, 'resize');   
            });
            header.stop(true).animate({"right":"352px"}, 100);
            $(this).text(">>");
        }
    });
    
    $("#content-container-btn").click(function(){
        var container = $("#content-container");
        container.removeClass("showing");
        container.fadeOut(100);
        $("#current").html("");
    });
    
    $(".loc").click(function(){
        var loc = $(this).attr("loc");
        removeMarkers();
        locationMark(loc);
    });
    
    $(".street").click(function(){
        var loc = $(this).attr("loc");
        launchStreetview(loc);
        google.maps.event.trigger(panorama, 'resize');
    });
    
    $(".pic").click(function(){
        var url = $(this).attr("url");
        showPic(url);
        $("#current").html($(this).attr("title") + " <i class='fa fa-camera'></i>");
    });
    
    $("#info").click(function(){
        $("#info-container").show();
        $("#streetview-container").hide();
        $("#picture-container").hide();
        
        var container = $("#content-container");
        container.addClass("showing");
        container.fadeIn(100);
        
        $("#current").html("Information");
    });
});

google.maps.event.addDomListener(window, 'load', init);

function init() {
    var mapOptions = {
        zoom: 3,
        center: new google.maps.LatLng(52.2706103,-82.5692959),
        disableDefaultUI: true,
        styles: [
            {
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#00afff"
                    },
                    {
                        "lightness": "-15"
                    },
                    {
                        "saturation": "65"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#b5e6f0"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }
        ]
    };

    var mapElement = document.getElementById('map');

    map = new google.maps.Map(mapElement, mapOptions);
    
    polyline.setMap(map);
}   