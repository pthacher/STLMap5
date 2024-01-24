var mymap = L.map('mapid').setView([38.6, -90.3], 10);

L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by Stamen Design, under CC BY 3.0.',
    maxZoom: 18
}).addTo(mymap);

var marker1 = L.marker([38.636, -90.22299]).addTo(mymap);
var marker2 = L.marker([38.627699, -90.251837]).addTo(mymap);
var marker3 = L.marker([38.691903, -90.235931]).addTo(mymap);
var marker4 = L.marker([38.611, -90.201332]).addTo(mymap);
var marker5 = L.marker([38.583350, -90.239860]).addTo(mymap);

marker1.bindPopup("Fountain on Locust").openPopup();
marker2.bindPopup("Everest Cafe").openPopup();
marker3.bindPopup("Bellefontaine Cemetery").openPopup();
marker4.bindPopup("Soulard Market").openPopup();
marker5.bindPopup("Marquette Park").openPopup();
