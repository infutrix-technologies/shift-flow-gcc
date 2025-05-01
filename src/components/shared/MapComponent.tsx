const MapComponent = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`relative w-full h-64 md:h-80 bg-gray-100 rounded-lg overflow-hidden ${className}`}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28931.14292262838!2d55.14478759561374!3d24.9867631814215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f728492c989b3%3A0xacfcb5c405ca278!2sDubai%20Investments%20Park%20Office!5e0!3m2!1sen!2sin!4v1746097566542!5m2!1sen!2sin"
        width={"100%"}
        height={"100%"}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default MapComponent;
