// 1. Inicializar el mapa (centrado por ejemplo en coordenadas latitud, longitud y nivel de zoom)
const map = L.map('map').setView([10.4631, -73.2532], 14); // Cambia por tus coordenadas reales

// 2. Capa oscura de Stadia / Alidade Smooth Dark (Gratis sin API Key)
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
  maxZoom: 20,
  attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

// 3. Agregar marcadores interactivos para tus 4 intersecciones
const intersecciones = [
  { nombre: "Intersección 1 (Norte)", lat: 10.468, lng: -73.255, topic: "interseccion1" },
  { nombre: "Intersección 2 (Sur)",   lat: 10.458, lng: -73.251, topic: "interseccion2" },
  { nombre: "Intersección 3 (Este)",  lat: 10.463, lng: -73.245, topic: "interseccion3" },
  { nombre: "Intersección 4 (Oeste)", lat: 10.462, lng: -73.260, topic: "interseccion4" }
];

intersecciones.forEach(int => {
  // Crear un marcador para cada semáforo
  const marker = L.marker([int.lat, int.lng]).addTo(map);

  // Cuadro emergente al hacer clic en el marcador
  marker.bindPopup(`
    <div style="color: #000;">
      <strong>${int.nombre}</strong><br>
      Topic: <code>proyecto/${int.topic}</code><br><br>
      <button onclick="console.log('Ver estado de ${int.topic}')">Ver Detalle</button>
    </div>
  `);
});
