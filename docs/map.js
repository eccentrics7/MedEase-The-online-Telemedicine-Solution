// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 17.6868, lng: 83.2185 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 13,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru

  addMarker({ lat: 17.77985747423255, lng: 83.36243543777212 });
  addMarker({ lat: 18.10745511525509, lng: 83.4018204330664 });

  function addMarker(loc) {
    const marker = new AdvancedMarkerView({
      map: map,
      position: loc,
    });
  }
}

initMap();
