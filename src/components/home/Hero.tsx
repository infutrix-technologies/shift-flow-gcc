import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";

interface HeroProps {
  videoSrc?: string;
}

const Hero = ({ videoSrc }: HeroProps) => {
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleTrackingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Tracking number submitted:", trackingNumber);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat brightness-50 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/homeBanner.jpg')",
        }}
      ></div>

      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 z-0">
          {/* <img
            src="lovable-uploads/homeBanner.png"
            alt="GravityShift Symbol"
            className="w-96 h-96 invert grayscale opacity-10 animate-spin duration-custom ease-linear infinite origin-center"
          /> */}
        </div>
        {videoSrc ? (
          <video
            className="w-full h-full object-cover opacity-40"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full"></div>
        )}
      </div>

      <div className="relative z-10 section-container min-h-[calc(100vh-80px)] flex flex-col ">
        <div className="text-black">
          <div className="flex items-center mb-6">
            {/* <img
              src="/lovable-uploads/ae375e28-4351-41e5-8d71-ff77c43b924a.png"
              alt="GravityShift Logo"
              className="w-24 h-24 mr-4 invert grayscale animate-spin duration-custom infinite"
            /> */}
            <h1
              className="heading-1 text-[#ffffff] animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Transforming Logistics with Innovation and Reliability
            </h1>
          </div>

          <p
            className="text-xl mb-8 text-[#ffffff] animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            GravityShift delivers technology-driven, multi-modal logistics
            solutions across the GCC region, ensuring your cargo arrives safely,
            on time, and with complete transparency.
          </p>

          <div
            className="flex flex-wrap gap-4 mb-12 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange/90"
            >
              <Link to="/contact#quote" className="flex items-center">
                Get a Quote <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white/10 flex items-center gap-2"
            >
              <Link to="/about">
                Learn More About Our Services <ArrowRight size={18} />
              </Link>
            </Button>
          </div>

          <div
            className="bg-white p-4 rounded-lg shadow-lg max-w-md animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <h3 className="text-lg font-semibold mb-2 text-brand-navy">
              Track Your Shipment
            </h3>
            <form onSubmit={handleTrackingSubmit} className="flex flex-col space-y-2 sm:flex-row sm:space-y-0">
              <input
                type="text"
                placeholder="Enter tracking number"
                className="
                w-full
                px-4 py-0
                border border-gray-300
                rounded-md                     /* mobile: full rounding */
                sm:rounded-l-md sm:rounded-r-none /* sm+: left only */
               focus:outline-none focus:ring-2 focus:ring-brand-orange
    "
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                required
                disabled
              />
              <Button
                type="submit"
                disabled
                className="
      w-full
      px-4 py-4
      rounded-md                         /* mobile: full rounding */
      sm:rounded-l-none sm:rounded-r-md /* sm+: right only */
      flex items-center justify-center
    "
              >
                <Search size={18} className="mr-2" /> Track (Coming Soon)
              </Button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
