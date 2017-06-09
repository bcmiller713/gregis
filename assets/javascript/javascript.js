var map, infoWindow;
var markers = [];
var searchpin=[];
var searchlat;
var searchlng;
var markerArray=[];
      function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
          center: {lat: 32.8800604, lng: -117.2340135},
          zoom: 12,
          mapTypeId: 'roadmap'
        });
        infoWindow = new google.maps.InfoWindow;

        //markers
        var iconBase = 'assets/images/icons/';
        var icons = {
          Hiking: {
            icon: iconBase + 'hiker.svg'
          },
            FarmersMarket: {
            icon: iconBase + 'basket.svg'
          },
          Beach: {
            icon: iconBase + 'sandals.svg'
          },
          Bar: {
            icon: iconBase + 'cocktail.svg'
          },
          Breweries: {
            icon: iconBase + 'beer.svg'
          },
          Club: {
            icon: iconBase + 'disco-ball.svg'
          }
        };

        var features = [
          {
            name: 'Three Sister Falls Trailhead',
            position: new google.maps.LatLng(33.033379, -116.634983),
            address: "Boulder Creek Rd, Santa Ysabel, CA 92070",
            type: 'Hiking'
          }, {
            name: 'Torrey Pines State Reserve',
            position: new google.maps.LatLng(32.933677, -117.260678),
            address:  "12600 N Torrey Pines Rd, La Jolla, CA 92037",
            type: 'Hiking'
          }, {
            name: 'Cowles Mountain Trail',
            position: new google.maps.LatLng(32.803483, -117.038017),
            address: "7027, 7001 Golfcrest Dr, San Diego, CA 92119",
            type: 'Hiking'
          }, {
            name: 'Cedar Creek Falls Trailhead',
            position: new google.maps.LatLng(32.996999, -116.756133),
            address: "15519 Thornbush Rd, Ramona, CA 92065",
            type: 'Hiking'
          }, 
          {
            name: "La Jolla",
            position: new google.maps.LatLng(32.838456, -117.271468),
            address: "7335 Girard Ave, La Jolla, CA 92037",
            type: 'FarmersMarket'
          }, {
            name: 'Hillcrest',
            position: new google.maps.LatLng(32.75055, -117.149296),
            address: "3960 Normal St, San Diego, CA 92103",
            type: 'FarmersMarket'
          }, {
            name: 'Little Italy',
            position: new google.maps.LatLng(32.721947, -117.167558),
            address: "519 W Cedar St, San Diego, CA 92101",
            type: 'FarmersMarket'
          }, {
            name: 'Ocean Beach',
            position: new google.maps.LatLng(32.745802, -117.249336),
            address: "4900 Newport Ave, San Diego, CA 92107",
            type: 'FarmersMarket'
          }, {
            name: 'Liberty Station',
            position: new google.maps.LatLng(32.740159, -117.211195),
            address: "2820 Historic Decatur Rd, San Diego, CA 92106",
            type: 'FarmersMarket'
          }, 
          { 
            name: 'La Jolla Shores',
            position: new google.maps.LatLng(32.856793, -117.256385),
            address: "8300 Camino Del Oro, La Jolla, CA 92037",
            type: 'Beach'
          }, {
            name: 'Pacific Beach',
            position: new google.maps.LatLng(32.794685, -117.251303),
            address: "974 Thomas Ave, San Diego, CA 92109",
            type: 'Beach'
          }, {
            name: 'Moonlight Beach',
            position: new google.maps.LatLng(33.048509, -117.297114),
            address: "400 B St, Encinitas, CA 92024",
            type: 'Beach'
          }, {
            name: 'Wind n Sea Beach',
            position: new google.maps.LatLng(32.830936, -117.280595),
            address: "6800 Neptune Pl, San Diego, CA 92039",
            type: 'Beach'
          }, {
            name: 'Coronado Beach',
            position: new google.maps.LatLng(32.684183, -117.184432),
            address: "838 Ocean Blvd, Coronado, CA 92118",
            type: 'Beach'
          }, 
          {
            name: 'False Idol',
            position: new google.maps.LatLng(32.720727, -117.168865),
            address: " 675 W Beech St, San Diego, CA 92101",
            type: 'Bar'
          }, {
            name: 'PB Alehouse',
            position: new google.maps.LatLng(32.794261, -117.255312),
            address: "721 Grand Ave, San Diego, CA 92109",
            type: 'Bar'
          }, {
            name: "Noble's Exeriment",
            position: new google.maps.LatLng(32.712393, -117.157611),
            address: "777 G St, San Diego, CA 92101",
            type: 'Bar'
          }, {
            name: 'Coin-Op',
            position: new google.maps.LatLng(32.749033, -117.130377),
            address: "3926 30th St, San Diego, CA 92104",
            type: 'Bar'
          }, {
            name: "Winson's",
            position: new google.maps.LatLng(32.747129, -117.250661),
            address: "1921 Bacon St, San Diego, CA 92107",
            type: 'Bar'
          },
            {
            name: 'Ballast Point',
            position: new google.maps.LatLng(32.888162, -117.158014),
            address: "9045 Carroll Way, San Diego, CA 92121",
            type: 'Breweries'
          }, {
            name: 'Stone Brewing',
            position: new google.maps.LatLng(32.740155, -117.211195),
            address: "2816 Historic Decatur Rd #116, San Diego, CA 92106",
            type: 'Breweries'
          }, {
            name: "Modern Times",
            position: new google.maps.LatLng(32.754247, -117.206219),
            address: "3725 Greenwood St, San Diego, CA 92110",
            type: 'Breweries'
          }, {
            name: 'Green Flash',
            position: new google.maps.LatLng(32.907057, -117.177778),
            address: "6550 Mira Mesa Blvd, San Diego, CA 92121",
            type: 'Breweries'
          }, {
            name: "Coronado Brewing Company",
            position: new google.maps.LatLng(32.771864, -117.204548),
            address: "1205 Knoxville St, San Diego, CA 92110",
            type: 'Breweries'
          },
        {
            name: 'Oxford SD',
            position: new google.maps.LatLng(32.709914, -117.160134),
            address: "435 Fifth Ave, San Diego, CA 92101",
            type: 'Club'
          }, {
            name: 'Fluxx',
            position: new google.maps.LatLng(32.710677, -117.161332),
            address: "500 Fourth Ave, San Diego, CA 92101",
            type: 'Club'
          }, {
            name: "Omnia",
            position: new google.maps.LatLng(32.710179, -117.159496),
            address: "454 Sixth Ave, San Diego, CA 92101",
            type: 'Club'
          }, {
            name: 'Bang Bang',
            position: new google.maps.LatLng(32.711788, -117.159597),
            address: "526 Market St, San Diego, CA 92101",
            type: 'Club'
          }
        ];
      
      $(".hiking").on('click', function(){
        forclicks("Hiking")
      });
      $(".restaurant").on('click', function(){
        forclicks("Restaurant")
      });
      $(".beach").on('click', function(){
        forclicks("Beach");
      });
      $(".farmer").on('click', function(){
        forclicks("FarmersMarket");
      });
      $(".bar").on('click', function(){
        forclicks("Bar");
      });
      $(".brewery").on('click', function(){
        forclicks("Breweries");
      });
      $(".club").on('click', function(){
        forclicks("Club");
      });

      map.addListener('click', function(event){
        for(var i = 0; i < searchpin.length; i++){
          searchpin[i].setMap(null);
        }
        searchpin = [];
        radiusSearch(event.latLng);
        console.log(event.latLng.lat() + " " + event.latLng.lng());
        searchlat = event.latLng.lat();
        searchlng = event.latLng.lng();
        searchcall();
        console.log(event.target);
      });


      function forclicks(args){
          clearMarkers();
          var temp =[];
          markers =[];
          for(var i = 0; i < features.length; i++){
          if(features[i].type == args){
            console.log("sand");
            temp.push(features[i]);
            console.log(temp);
          };}
         markers = temp;
          
          makemarks();
          console.log(markers);
      };

      function makemarks(){
        for(var i = 0; i < markers.length; i++){
        var marker = new google.maps.Marker({
            position: markers[i].position,
            icon: {
                url: icons[markers[i].type].icon,
                scaledSize: new google.maps.Size(100,100),
                strokeWeight: 100,
                strokeColor: 'black'
                },
                name: markers[i].name,
                map: map,
                address: markers[i].address
              });
      marker.addListener('click', function(){
          console.log(marker.name);
          console.log(marker.address);
        });

        markerArray.push(marker);
        }
      }


// // searches local areas for activities using google places api         //
    var query = "food"
    function placeAddressNameAndPicture(name, lat, lng, photoID, photo) {
      this.name = name;
      this.lat = lat;
      this.lng = lng;
      this.photoID = photoID
      this.photo = photo
    }
function searchcall(){

$.ajax({
  url: "https://maps.googleapis.com/maps/api/place/textsearch/json?query="+ query +"&location=" + searchlat + "," + searchlng + "&radius=50000&key=AIzaSyBSmftseE9huym0ariNTCamMnQmMZYaDYw&limit=5"
}).done(function(response){
  var nameArray =  [];
  var photoIDArray = [];
  var coordArray = [];
  var coord = [];
  var lat;
  var lng;
  var photoID;
  var name;
  var items = response.results
  console.log(items[0].photos[0].photo_reference)
  for (let value of items) {
    lat = value.geometry.location.lat 
    lng = value.geometry.location.lng
    photoID = value.photos[0].photo_reference
    name = value.name 
    coord = [lat,lng]
    nameArray.push(name)
    photoIDArray.push(photoID)
    coordArray.push(coord)
  }
  console.log(this);
  console.log(nameArray)
  console.log(photoIDArray)
  console.log(coordArray)
});
        //
      }

      function radiusSearch(location){
        var marker = new google.maps.Marker({
          position: location,
          map: map
        });
        searchpin.push(marker);
      };

      function setMapOnAll(map){
        for(var i = 0; i < markerArray.length; i++){
          markerArray[i].setMap(map);
        }
      }

      function clearMarkers(){
        setMapOnAll(null);
      }

      function showMarkers(){
        setMapOnAll(map);
      }
      //
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
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
        infoWindow.open(map);
      }
    

//--------------------------------------------------------------
//
// Zumato Seach by Name, returns address, lat, long, and name 
//
//--------------------------------------------------------------
// var searchQuery = "poke";
// var passArray = [];

// function attachToPin(name, lat, long) {
//     this.name = name;
//     this.lat = lat;
//     this.long = long;
// }

// $.ajax({
//     url: "https://developers.zomato.com/api/v2.1/search?entity_id=302&entity_type=city&q=" + searchQuery + "&start=0&count=5",
//     beforeSend: function(request) {
//         request.setRequestHeader("user-key", "4131e850ec76a23e63ba6bbf9570ed93");
//     }
// }).done(function(response) {
//     var name = [];
//     var address = [];
//     var coord = [];
//     var tempArray = [];
//     var lat;
//     var long;
//     var tempCoord;

//     console.log(response);
//     console.log(response.restaurants);
//     for (let value of response.restaurants) {
//         var eachName = value.restaurant.name
//         console.log(eachName);
//         name.push(eachName);
//         console.log(name);
//         var eachAddress = value.restaurant.location.address;
//         address.push(eachAddress);
//     }

//     for (let value of address) {
//       console.log(value)
//         $.ajax({
//             url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + value,
//             method: "GET"
//         }).done(function(response) {
//             for (let value of response.results) {
//                 console.log(value.geometry.location);
//                 lat = value.geometry.location.lat;
//                 long = value.geometry.location.lng;
//                 tempCoord = [lat, long];
//                 tempArray.push(tempCoord);
//             }
//             console.log(tempArray);

//         }).done(function() {
//           if (tempArray.length !== 5 ){
//             return;
//           }
//             console.log(name);
//             console.log(tempArray);
//             for (i = 0; i < name.length; i++) {
//                 var mapPinAddressAndName = new attachToPin(name, lat, long);
//                 mapPinAddressAndName.name = name[i];
//                 mapPinAddressAndName.lat = tempArray[i][0];
//                 mapPinAddressAndName.long = tempArray[i][1];
//                 passArray.push(mapPinAddressAndName);
//             }
//         })
//     }


// })
//             console.log(passArray);
