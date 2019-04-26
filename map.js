var map;
var marker;
var current;

var chicago_il={lat: 41.844318, lng: -88.0768485}


function initMap() {
current={lat: 41.844318, lng: -88.0768485};
        map = new google.maps.Map(document.getElementById('map'), {
                zoom:15,
        center: chicago_il});
        marker = new google.maps.Marker({
                position:chicago_il,
                animation:google.maps.Animation.BOUNCE,
        map: map });
}

