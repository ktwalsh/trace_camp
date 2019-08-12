

// Get element references
var confirmBtn = document.getElementById('confirmPosition');
var onClickPositionView = document.getElementById('onClickPositionView');
var onIdlePositionView = document.getElementById('onIdlePositionView');
var onClickAddressView = document.getElementById('onClickAddressView')

// Initialize locationPicker plugin
var lp = new locationPicker('map', {
    setCurrentPosition: true, // You can omit this, defaults to true
}, {
        zoom: 15 // You can set any google map options here, zoom defaults to 15
    });

// Listen to button onclick event
confirmBtn.onclick = function () {
    // Get current location and show it in HTML
    var location = lp.getMarkerPosition();
    onClickPositionView.innerHTML = 'The chosen location is ' + location.lat + ',' + location.lng;
    // onClickAddressView.innerHTML
    var API_URL = `http://api.geonames.org/findNearestAddress?lat=${location.lat}&lng=${location.lng}&username=klevinw`
    fetch(API_URL).then(response => {
        console.log(API_URL)
        console.log(response)
        onClickAddressView.innerHTML = JSON.stringify(response)
    })
};

// Listen to map idle event, listening to idle event more accurate than listening to ondrag event
google.maps.event.addListener(lp.map, 'idle', function (event) {
    // Get current location and show it in HTML
    var location = lp.getMarkerPosition();
    onIdlePositionView.innerHTML = 'The chosen location is ' + location.lat + ',' + location.lng;
});

