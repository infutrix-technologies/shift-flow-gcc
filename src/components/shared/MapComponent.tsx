import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ✅ Red marker icon from external source
const redMarkerIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// ✅ Countries list with full English names
type Country = {
  name: string;
  city: string;
  coords: [number, number];
};

const countries: Country[] = [
  { name: "United Arab Emirates", city: "Dubai", coords: [25.276987, 55.296249] },
  { name: "Saudi Arabia", city: "Riyadh", coords: [24.7136, 46.6753] },
  { name: "Oman", city: "Muscat", coords: [23.588, 58.3829] },
  { name: "Qatar", city: "Doha", coords: [25.276987, 51.520008] },
  { name: "Kuwait", city: "Kuwait City", coords: [29.3759, 47.9774] },
  { name: "Bahrain", city: "Manama", coords: [26.2285, 50.5861] },
  { name: "Jordan", city: "Amman", coords: [31.9454, 35.9284] },
  { name: "Egypt", city: "Cairo", coords: [30.0444, 31.2357] },
  { name: "Syria", city: "Damascus", coords: [33.5138, 36.2765] },
  { name: "Yemen", city: "Sana'a", coords: [15.3694, 44.191] },
];

const MapComponent = () => {
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg mt-8">
      <MapContainer
        center={[25.276987, 55.296249]}
        zoom={5}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        {/* ✅ English tile layer from CartoDB */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a> & OpenStreetMap contributors'
        />

        {/* ✅ Markers with red icons */}
        {countries.map(({ name, city, coords }) => (
          <Marker key={name} position={coords} icon={redMarkerIcon}>
            <Popup>
              <div className="text-sm font-medium">
                {city}, {name}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
