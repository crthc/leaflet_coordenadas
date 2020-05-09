var mymap = L.map('mapid').setView([41.3869, 2.1699], 16);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data © OpenStreetMap contributors, ' +
  'CC-BY-SA, ' +
  'Imagery © Mapbox',
  id: 'mapbox.streets'
}).addTo(mymap);

var marker = L.marker([41.386975792251384, 2.1660232543945312]).addTo(mymap).bindPopup("<b>Restaurant Centfocs</b><br><br>Restaurante mediterráneo<br>Carrer de Balmes, 16, 08007 Barcelona");

var map2 = L.map('map2').setView([41.3869, 2.1699], 16);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data © OpenStreetMap contributors, ' +
  'CC-BY-SA, ' +
  'Imagery © Mapbox',
  id: 'mapbox.streets'
}).addTo(map2);

var theMarker = {};

  map2.on('click',function(e){
    lat = e.latlng.lat;
    lon = e.latlng.lng;

        //Borra el marker anterior, 

        if (theMarker != undefined) {
              map2.removeLayer(theMarker);
        };

    //Se añade marker donde hay un click,
     theMarker = L.marker([lat,lon]).addTo(map2).bindPopup("<b>Coordenadas</b>:<br><br> <b>Lat</b>: "+ lat+" <br> <b>Long</b>: "+lon ).openPopup();  
});

