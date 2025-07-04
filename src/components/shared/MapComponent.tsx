import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { MapPin } from "lucide-react";
import "leaflet/dist/leaflet.css";

// Fix default icon issue in Leaflet (important!)
// delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const countries = [
  { name: "UAE", city: "Dubai", coords: [25.276987, 55.296249] },
  { name: "KSA", city: "Riyadh", coords: [24.7136, 46.6753] },
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
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {countries.map(({ name, city, coords } : any) => (
          <Marker key={name} position={coords}>
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
