// // mapboxgl.accessToken =
// //   "pk.eyJ1IjoiZHVvbmd4dWFudGhhbmciLCJhIjoiY2w2YmQ5d3l5MDM3NTNjcnhnNThtaWozMCJ9.ck0G07sAAVKf3cL4uTicMQ";
// // const map = new mapboxgl.Map({
// //   container: "map", // container ID
// //   style: "mapbox://styles/mapbox/streets-v11", // style URL
// //   center: [106.8986697, 18.3811674], // starting position [lng, lat]
// //   zoom: 6.09, // starting zoom
// //   projection: "globe", // display the map as a 3D globe
// //   hash: "map", // thêm tham số url=> chia sẻ mức độ zoom cho người dùng
// // });
// // // console.log(map);
// // map.on("style.load", () => {
// //   map.setFog({}); // Set the default atmosphere style
// // });

   
// dataGeoJson = {
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [108.202164, 16.054407],
//       },
//       properties: {
//         name: "Hà Nội",
//       },
//     },
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [115.5946907, 39.3228589],
//       },
//       properties: {
//         name: "Bắc Kinh",
//       },
//     },
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [100.1950261, 13.6716766],
//       },
//       properties: {
//         name: "Bangkok",
//       },
//     },
//   ],
// };
// map.on("load", (e) => {
//   map.addSource("capital", {
//     type: "geojson",
//     data: dataGeoJson,
//   });
//   map.addLayer({
//     // style cho vị trí
//     id: "capital-location",
//     type: "circle",
//     source: "capital",
//     paint: {
//       "circle-radius": 10,
//       "circle-color": "red",
//     },
//   });
//   map.addLayer({
//     // style cho text
//     id: "capital-name",
//     type: "symbol", // cho text
//     source: "capital",
//     layout: {
//       "text-field": "{name}",
//       "text-size": 12,
//       "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
//       "text-offset": [0, 1.2], // text cách dọc 1.2 pixel
//     },
//     paint: {
//       "text-color": "#000fff",
//     },
//   });
// //   const marker = new mapboxgl.Marker({draggable:true}).setLngLat([105.8194541, 21.0227788]).addTo(map);
//   const marker = new mapboxgl.Marker({draggable:true})
// .setLngLat([105.8194541, 21.0227788])
// .setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>"))
// .addTo(map);
// marker.on('dragend',()=>{
//     alert('dragend');
// })
 
// console.log(marker.getPopup());
// });
// listener = {};
// listener["evtClick"] = evtClick.bind(this);
// function evtClick(e) {
//   console.log(e);
//   var features = map.queryRenderedFeatures(e.point);
//   console.log(features);
// }

// //clear event
// map.on("click", listener["evtClick"]);
// function offEvent() {
//   map.off("click", listener["evtClick"]);
// }
// function getDataToHtml(data, elmParentId, fieldVisible) {
//     var content = "";
//     var elm = document.getElementById(elmParentId);
//     if (elm) {
//         for (const feature of data.features) {
//             content += '<li class="list-group-item">' + feature.properties[fieldVisible] + '</li>'
//         }
//         elm.innerHTML = content;
//     }
// }


// getDataToHtml(dataGeoJson, 'lstUnv', 'name');
// function closeLeftPanel() {
//     var elm = document.querySelector('.wrapper .left-panel');
//     if (elm) {
//         elm.style.left = '-100%';
//     }
//     document.querySelector('.wrapper .btn-open-leftpanel').style.display = 'flex';
// }

// function openLeftPanel() {
//     var elm = document.querySelector('.wrapper .left-panel');
//     if (elm) {
//         elm.style.left = '1rem';
//     }
//     document.querySelector('.wrapper .btn-open-leftpanel').style.display = 'none';
// }
// function closeRightPanel() {
//     var elm = document.querySelector('.wrapper .right-panel');
//     if (elm) {
//         elm.style.display = 'none';
//     }
// }

// function openRightPanel() {
//     var elm = document.querySelector('.wrapper .right-panel');
//     if (elm) {
//         elm.style.display = 'block';
//     }
// }

var map = new mapboxgl.Map({
container: 'divMapId',
center: [105, 17],
zoom: 4
});
var measure = new ekmapplf.control.Measure();
map.addControl(measure, 'top-right');
measure.on('endMeasure', function (res) {
if (res.typeMeasure == 'Length') {
document.getElementById('contentMeasure').innerHTML =
res.length.toFixed(2) + ' ' + res.units;
openTabResult();
} else {
document.getElementById('contentMeasure').innerHTML =
res.area.toFixed(2) + ' ' + res.units + '<sup>2</sup>';
openTabResult();
}
});



map.on('click', (e) => {
const { lng, lat } = e.lngLat;
new mapboxgl.Popup()
.setLngLat(e.lngLat)
.setHTML(
'Vị trí:<br/> ' + 'Kinh độ:' + lng + '<br/>' + 'Vĩ độ: ' + lat
)
.addTo(map);
});
//khởi tạo
var direction = new ekmapplf.service.Direction({
apiKey: 'w1Dlh2wRon7mE6sL196TgvLS45fw02uon74pJ0rc'
});
 
//ví dụ click trên bản đồ để xác định 2 điểm
var startPoint, endPoint, markerStart, markerEnd;
map.on('click', function (evt) {
if (!startPoint) startPoint = evt.lngLat;
 
if (!endPoint) endPoint = evt.lngLat;
else {
startPoint = endPoint;
endPoint = evt.lngLat;
}
if (!markerStart)
markerStart = new mapboxgl.Marker()
.setLngLat(startPoint.toArray())
.addTo(map);
else markerStart.setLngLat(startPoint.toArray());
 
routing();
});
 
//gọi dịch vụ tìm đường
function routing() {
if (startPoint && endPoint && startPoint != endPoint) {
if (!markerEnd)
markerEnd = new mapboxgl.Marker({ color: 'red' })
.setLngLat(endPoint.toArray())
.addTo(map);
else markerEnd.setLngLat(endPoint.toArray());
direction.setOrigin(startPoint.toArray()); //thiết lập điểm đầu
console.log(startPoint.toArray());
direction.setDestination(endPoint.toArray()); //thiết lập điểm cuối
//xác định được đường đi
direction.run(function(error, data){
var featureData = {
'type': 'Feature',
'properties': {},
'geometry': data.routes[0].geometry
};
if (map.getSource('route')) {
map.getSource('route').setData(featureData);
} else {
map.addSource('route', {
'type': 'geojson',
'data': featureData
});
map.addLayer({
'id': 'route',
'type': 'line',
'source': 'route',
'paint': {
'line-color': '#4882c5',
'line-width': 7
}
});
}
});
}
}


map.on('load', () => {
map.addSource('places', {
'type': 'geojson',
'data': {
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
'properties': {
'description': '<p>Đây là thành phố Đà Nẵng</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [108.202164, 16.054407]
}
},
{
'type': 'Feature',
'properties': {
'description': '<p>Đây là thủ đô Hà Nội</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [105.853882, 21.02828]
}
},
{
'type': 'Feature',
'properties': {
'description': '<p>Đây là thành phố Hồ chí Minh</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [106.634588, 10.807779]
}
}
]
}
});
// Thêm layer hiển thị địa điểm
map.addLayer({
'id': 'places',
'type': 'circle',
'source': 'places',
'paint': {
'circle-radius': 10,
"circle-color": "red",
},
});
});
 
// Bắt sự kiện click để hiển thị popup ngay tại vị trí địa điểm cùng với thông
// tin từ thuộc tính description
map.on('click', 'places', (e) => {
var coordinates = e.features[0].geometry.coordinates.slice();
var description = e.features[0].properties.description;
 
new mapboxgl.Popup()
.setLngLat(coordinates)
.setHTML(description)
.addTo(map);
});
 
// Thay đổi con trỏ chuột thành pointer khi di chuyển qua địa điểm
map.on('mouseenter', 'places', () => {
map.getCanvas().style.cursor = 'pointer';
});
 
map.on('mouseleave', 'places', () => {
map.getCanvas().style.cursor = '';
});



var geocoder = new ekmapplf.control.GeoCoder({
apiKey: 'w1Dlh2wRon7mE6sL196TgvLS45fw02uon74pJ0rc'
});
map.addControl(geocoder, 'top-left');
var zooningLayer = new ekmapplf.layer.Zoning({
'apiKey': 'w1Dlh2wRon7mE6sL196TgvLS45fw02uon74pJ0rc'
});
var lumLayer = new ekmapplf.layer.LandUse({
'apiKey': 'w1Dlh2wRon7mE6sL196TgvLS45fw02uon74pJ0rc'
});
var mapOSMBrigth = new ekmapplf.VectorBaseMap(
'OSM:Bright',
'w1Dlh2wRon7mE6sL196TgvLS45fw02uon74pJ0rc'
);
var mapOSMGray = new ekmapplf.VectorBaseMap('OSM:Gray', 'w1Dlh2wRon7mE6sL196TgvLS45fw02uon74pJ0rc');
var mapOSMDark = new ekmapplf.VectorBaseMap('OSM:Dark', 'w1Dlh2wRon7mE6sL196TgvLS45fw02uon74pJ0rc');
var mapOSMNight = new ekmapplf.VectorBaseMap('OSM:Night', 'w1Dlh2wRon7mE6sL196TgvLS45fw02uon74pJ0rc');
mapOSMNight.addTo(map);


var checkBox = document.getElementById("lumlayer");
var checkBox2 = document.getElementById("zooningLayer");
function changeStyleMap(styleMap) {
switch (styleMap) {
case 'bright':
mapOSMBrigth.addTo(map);
checkBox.checked = false;
checkBox2.checked = false;
break;
case 'gray':
mapOSMGray.addTo(map);
checkBox.checked = false;
checkBox2.checked = false;
break;
case 'dark':
mapOSMDark.addTo(map);
checkBox.checked = false;
checkBox2.checked = false;
break;
case 'night':
mapOSMNight.addTo(map);
checkBox.checked = false;
checkBox2.checked = false;
break;
case 'lumlayer':


if (checkBox.checked === true){
lumLayer.addTo(map);}
else {
  
  var checkbox1 = document.getElementsByName("styleOSM");
  for (var i = 0; i < checkbox1.length; i++){
                    if (checkbox1[i].checked === true){
                       if(checkbox1[i].value == "bright" ){
                         mapOSMBrigth.addTo(map);
                       
                       }if (checkbox1[i].value  == "gray") {
                         mapOSMGray.addTo(map);
                        
                       } if(checkbox1[i].value == "dark"){
                         mapOSMDark.addTo(map);
                       } if(checkbox1[i].value == "night"){
                         mapOSMNight.addTo(map);
                       }
                        
                       
                    }
                }
}
              




break;
case 'zooningLayer':


if (checkBox2.checked == true){
  zooningLayer.addTo(map);
}
else {
  
  var checkbox1 = document.getElementsByName("styleOSM");
  for (var i = 0; i < checkbox1.length; i++){
                    if (checkbox1[i].checked === true){
                       if(checkbox1[i].value == "bright"){
                         mapOSMBrigth.addTo(map);

                       }if (checkbox1[i].value  == "gray") {
                         mapOSMGray.addTo(map);
                        
                       } if(checkbox1[i].value == "dark"){
                         mapOSMDark.addTo(map);
                       } if(checkbox1[i].value == "night"){
                         mapOSMNight.addTo(map);
                       }
                        
                       
                    }
                }
}
break;
}
}
function openTabResult() {
  var elm = document.querySelector('.displayMeasure');
  if (elm) {
      elm.style.display = 'block';
  }
}
function closeTabResult() {
  var elm = document.querySelector('.displayMeasure');
  if (elm) {
      elm.style.display = 'none';
  }
}
function closeTab() {
    var elm = document.querySelector('.right-panel-raster');
    if (elm) {
        elm.style.display = 'none';
    }
}
function openTab() {
  var elm = document.querySelector('.right-panel-raster');
  if (elm) {
      elm.style.display = 'flex';
  }
}


function closeTabLeft() {
    var elm = document.querySelector('.wrraper');
    var elm2 = document.querySelector('.btn-open-leftpanel');
    if (elm) {
        elm.style.display = 'none';
        elm2.style.display = 'flex';
    }
}
function openTabLeft() {
  var elm = document.querySelector('.wrraper');
  var elm2 = document.querySelector('.btn-open-leftpanel');
  if (elm) {
      elm.style.display = 'block';
      elm2.style.display = 'none';
  }
}
var header = document.getElementById("list-group");
var btns = document.getElementsByClassName("list-group-item list-group-item-action");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}