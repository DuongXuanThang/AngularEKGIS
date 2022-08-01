
mapboxgl.accessToken = 'pk.eyJ1IjoiZHVvbmd4dWFudGhhbmciLCJhIjoiY2w2YmQ5d3l5MDM3NTNjcnhnNThtaWozMCJ9.ck0G07sAAVKf3cL4uTicMQ';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9, // starting zoom
projection: 'globe' // display the map as a 3D globe
});
map.on('style.load', () => {
map.setFog({}); // Set the default atmosphere style
});
