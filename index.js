var M = L.map("barbarian-map").setView([41.7493,-88.1539], 13)
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYXNwYWdlMTAiLCJhIjoiY2thYmR3NGt5MHlwdTJycGp6dnlqZ2prMyJ9.NcYbHp_ZdWfmVV0RQdCyow'
}).addTo(M);


var allBounds = [];
LATLNGS.forEach(pairlist => {
    const line = L.polyline(pairlist, {color: "red"}).addTo(M);
    allBounds.push(line.getBounds());
})

M.fitBounds(allBounds)

