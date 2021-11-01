// 1. Develop a web app in which:


// i. Test if geolocation is available.

function encuentra_pos(pos){
    var crd= pos.coords;

// ii. If it's available, show the current position (latitude and longitude)

    document.write('Your current position is: <br>' );
    document.write('Latitude : ' + crd.latitude + '<br>');
    document.write('Longitude: ' + crd.longitude + '<br>');
    document.write('Altitude: ' + crd.altitude + '<br>');
    document.write('More or less ' + crd.accuracy + ' meters. <br>');
};

// iii. If it isn't available, show a message for each and everyone of the possible errors.

function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
};

//navigator.geolocation.getCurrentPosition(encuentra_pos, error)

// iv. Improve your code so you show the position continuously (although the user could be in moving, so it could change)

navigator.geolocation.watchPosition(encuentra_pos, error);

// v. Find the way to meassure the distance traveled.

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

console.log(getDistanceFromLatLonInKm(50,40,40,50))


