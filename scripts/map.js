var map;
var marker;
var marker2;
var marker3;
var current;

var rice={lat:41.844318, lng: -88.0768485}
var warren={lat:41.835410, lng: -88.100781}
var mai={ lat: 41.866067, lng: -88.106979}
function initMap() {
current={lat: 41.831725,lng: -88.095260};
        map = new google.maps.Map(document.getElementById('map'), {
                zoom:12,
        center: rice});
        marker = new google.maps.Marker({
                position:rice,
        map: map });
        marker2 = new google.maps.Marker({
        position:warren,
        map: map });
        marker3 = new google.maps.Marker({
        position:mai,
        map: map });
}

