const map = L.map('map').setView([10.4631, -73.2532], 14); // Coordenadas de Valledupar

// OpenStreetMap Estándar (Sin API Key)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap'
}).addTo(map);

// Marcadores de ejemplo
const intersecciones = [
  { nombre: "Intersección 1 (Norte)", lat: 10.468, lng: -73.255 },
  { nombre: "Intersección 2 (Sur)",   lat: 10.458, lng: -73.251 }
];

intersecciones.forEach(int => {
  L.marker([int.lat, int.lng]).addTo(map)
    .bindPopup(`<b>${int.nombre}</b>`);
});
