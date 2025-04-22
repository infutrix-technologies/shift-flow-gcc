
const MapComponent = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`relative w-full h-64 md:h-80 bg-gray-100 rounded-lg overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1200x600/e5e7eb/64748b?text=GCC+Region+Map')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
    </div>
  );
};

export default MapComponent;
