/* what i will implement */
// image slider with 5 dots on the bottom to change
// (MAYBE) language selection PL/ENG
// (MAYBE) light/dark mode toggle
// grid with firm offer
// footer with current year date

/* change color button */
// const rootElement = document.querySelector(":root");
// const modeButton = document.querySelector(".toggle-mode");
// modeButton.addEventListener("click", (e) => {
//   console.log(rootElement);
//   rootElement.style.setProperty("--default-text-color", "red");
//   const defaultTextColor = rootElement.style.getPropertyValue(
//     "--default-text-color"
//   );
//   console.log(defaultTextColor);
// });

/* SCROLL TO TOP BUTTON */
const scrollBtn = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", function () {
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

/* MAP BOX */
mapboxgl.accessToken =
  "pk.eyJ1Ijoia29zc2luIiwiYSI6ImNrbnJ1aXVjNjBxZWEycHBmc2p4dDR5MHYifQ.bRuk5Mrn6N9WDUVIHSvbBw";
const lachowskiLocation = [21.73293, 50.62261];

function setupMap(location) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: location,
    zoom: 12,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  map.on("load", () => {
    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
    });
    map.addControl(directions, "top-left");

    directions.setDestination(lachowskiLocation);
  });

  /* custom point */
  const defaultMarker = new mapboxgl.Marker().setLngLat(location).addTo(map);
}
setupMap(lachowskiLocation);
