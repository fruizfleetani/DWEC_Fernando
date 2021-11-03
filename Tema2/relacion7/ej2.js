

function encuentra_pos(pos){
    var crd= pos.coords;

    //console.log('Your current position is:');
    //console.log('Latitude : ' + crd.latitude);
    //console.log('Longitude: ' + crd.longitude);
    //console.log('More or less ' + crd.accuracy + ' meters.');


    // Initialize the platform object:
    var platform = new H.service.Platform({
        'apikey': '2PdrGhTQHCIJJVgkzWquVqH2RSKTQNuj3ubAFX3x01I'
    });

    // Obtain the default map types from the platform object
    var maptypes = platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    var map = new H.Map(
        document.getElementById('mapContainer'),
        maptypes.vector.normal.map,
        {
        zoom: 15,
        center: { lng: crd.longitude, lat: crd.latitude }
        });
 

    //coords = {lng: crd.longitude, lat: crd.latitude}


    var marker = new H.map.Marker(
    {
        lng: crd.longitude, lat: crd.latitude
    },
    {   icon: new H.map.Icon('<svg width="24" height="24" ' +
    'xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
    'height="22" /><text x="12" y="18" font-size="12pt" ' +
    'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
    'fill="white">H</text></svg>')}
   
        //title: 'Your location'    
    );

    map.addObject(marker);
    map.setCenter({lng: crd.longitude, lat: crd.latitude});


/*
    var svgMarkup = '<svg width="24" height="24" ' +
    'xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
    'height="22" /><text x="12" y="18" font-size="12pt" ' +
    'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
    'fill="white">H</text></svg>';

// Create an icon, an object holding the latitude and longitude, and a marker:
    var icon = new H.map.Icon(svgMarkup),
        coords = {lng: crd.longitude, lat: crd.latitude},
        marker = new H.map.Marker(coords, {icon: icon});

// Add the marker to the map and center the map at the location of the marker:
map.addObject(marker);
map.setCenter(coords);
*/
}
function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };


navigator.geolocation.getCurrentPosition(encuentra_pos, error)