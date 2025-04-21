
import { useEffect, useRef } from 'react';

interface MapComponentProps {
  className?: string;
}

const MapComponent = ({ className = '' }: MapComponentProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This is a placeholder for a real map implementation
    // In a real app, you would integrate with a mapping service like Google Maps, Mapbox, etc.
    if (mapRef.current) {
      const mapElement = mapRef.current;
      // Apply custom styling to make it look like a map
      mapElement.style.backgroundImage = "url('https://via.placeholder.com/800x400?text=GCC+Region+Map')";
      mapElement.style.backgroundSize = "cover";
      mapElement.style.backgroundPosition = "center";
    }
  }, []);

  return (
    <div className={`w-full h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden ${className}`} ref={mapRef}>
      {/* Map will be loaded here */}
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-gray-600 text-center">Interactive GCC Region Map<br/>
        <span className="text-sm">(Map integration would be implemented with an actual mapping service)</span>
        </p>
      </div>
    </div>
  );
};

export default MapComponent;
