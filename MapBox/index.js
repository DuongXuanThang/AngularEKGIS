// mapboxgl.accessToken =
//   "pk.eyJ1IjoiZHVvbmd4dWFudGhhbmciLCJhIjoiY2w2YmQ5d3l5MDM3NTNjcnhnNThtaWozMCJ9.ck0G07sAAVKf3cL4uTicMQ";
// const map = new mapboxgl.Map({
//   container: "map", // container ID
//   style: "mapbox://styles/mapbox/streets-v11", // style URL
//   center: [106.8986697, 18.3811674], // starting position [lng, lat]
//   zoom: 6.09, // starting zoom
//   projection: "globe", // display the map as a 3D globe
//   hash: "map", // thêm tham số url=> chia sẻ mức độ zoom cho người dùng
// });
// // console.log(map);
// map.on("style.load", () => {
//   map.setFog({}); // Set the default atmosphere style
// });

   
dataGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [108.202164, 16.054407],
      },
      properties: {
        name: "Hà Nội",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [115.5946907, 39.3228589],
      },
      properties: {
        name: "Bắc Kinh",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [100.1950261, 13.6716766],
      },
      properties: {
        name: "Bangkok",
      },
    },
  ],
};
map.on("load", (e) => {
  map.addSource("capital", {
    type: "geojson",
    data: dataGeoJson,
  });
  map.addLayer({
    // style cho vị trí
    id: "capital-location",
    type: "circle",
    source: "capital",
    paint: {
      "circle-radius": 10,
      "circle-color": "red",
    },
  });
  map.addLayer({
    // style cho text
    id: "capital-name",
    type: "symbol", // cho text
    source: "capital",
    layout: {
      "text-field": "{name}",
      "text-size": 12,
      "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
      "text-offset": [0, 1.2], // text cách dọc 1.2 pixel
    },
    paint: {
      "text-color": "#000fff",
    },
  });
//   const marker = new mapboxgl.Marker({draggable:true}).setLngLat([105.8194541, 21.0227788]).addTo(map);
  const marker = new mapboxgl.Marker({draggable:true})
.setLngLat([105.8194541, 21.0227788])
.setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>"))
.addTo(map);
marker.on('dragend',()=>{
    alert('dragend');
})
 
console.log(marker.getPopup());
});
listener = {};
listener["evtClick"] = evtClick.bind(this);
function evtClick(e) {
  console.log(e);
  var features = map.queryRenderedFeatures(e.point);
  console.log(features);
}

//clear event
map.on("click", listener["evtClick"]);
function offEvent() {
  map.off("click", listener["evtClick"]);
}
function getDataToHtml(data, elmParentId, fieldVisible) {
    var content = "";
    var elm = document.getElementById(elmParentId);
    if (elm) {
        for (const feature of data.features) {
            content += '<li class="list-group-item">' + feature.properties[fieldVisible] + '</li>'
        }
        elm.innerHTML = content;
    }
}


getDataToHtml(dataGeoJson, 'lstUnv', 'name');
function closeLeftPanel() {
    var elm = document.querySelector('.wrapper .left-panel');
    if (elm) {
        elm.style.left = '-100%';
    }
    document.querySelector('.wrapper .btn-open-leftpanel').style.display = 'flex';
}

function openLeftPanel() {
    var elm = document.querySelector('.wrapper .left-panel');
    if (elm) {
        elm.style.left = '1rem';
    }
    document.querySelector('.wrapper .btn-open-leftpanel').style.display = 'none';
}
function closeRightPanel() {
    var elm = document.querySelector('.wrapper .right-panel');
    if (elm) {
        elm.style.display = 'none';
    }
}

function openRightPanel() {
    var elm = document.querySelector('.wrapper .right-panel');
    if (elm) {
        elm.style.display = 'block';
    }
}
