/* MAP BOX */
mapboxgl.accessToken =
  "pk.eyJ1Ijoia29zc2luIiwiYSI6ImNrbnJ1aXVjNjBxZWEycHBmc2p4dDR5MHYifQ.bRuk5Mrn6N9WDUVIHSvbBw";
const lachowskiLocation = [21.73293, 50.62261];

async function setupMap(location) {
  const map = await new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: location,
    zoom: 12,
  });

  const nav = await new mapboxgl.NavigationControl();
  map.addControl(nav);

  map.on("load", () => {
    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
    });
    map.addControl(directions, "top-left");

    directions.setDestination(location);
  });

  /* custom point */
  const defaultMarker = await new mapboxgl.Marker()
    .setLngLat(location)
    .addTo(map);
}

setupMap(lachowskiLocation);
