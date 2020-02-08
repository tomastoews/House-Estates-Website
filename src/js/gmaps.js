
document.addEventListener('DOMContentLoaded', () => {

    let map = new google.maps.Map(document.querySelector("#map"), {
        center: new google.maps.LatLng(37.757815, -122.50764,12),
        zoom: 12,
        mapTypeId: 'terrain' // google.maps.MapTypeId.HYBRID
    });
 
});
