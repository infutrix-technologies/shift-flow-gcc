import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Package,
  MapPin,
  Truck,
  FileText,
  Users,
  ChevronDown,
  Search,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Disable real tracking form toggle, show coming soon message instead
  const toggleTracking = () => {
    // setIsTrackingOpen(!isTrackingOpen);
    // Do nothing or optionally alert about coming soon
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-20 w-auto transition-transform duration-300"
                src="/lovable-uploads/c414fd89-7210-4891-8b3e-b4be72fdb25d.png"
                alt="GravityShift Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="nav-link"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Home
            </Link>

            <div className="relative group">
              <button className="nav-link flex items-center">
                Services <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
                <Link
                  to="/services/land-freight"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Land Freight & Cross-Border Trucking
                </Link>
                <Link
                  to="/services/multi-modal"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Multi-Modal Logistics Solutions
                </Link>
                <Link
                  to="/services/temperature-controlled"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Temperature-Controlled Logistics
                </Link>
                <Link
                  to="/services/warehousing"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Warehousing & Distribution
                </Link>
                <Link
                  to="/services/contract-logistics"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Contract Logistics & Fleet Leasing
                </Link>
              </div>
            </div>

            <Link to="/about" className="nav-link">
              About Us
            </Link>
            <Link to="/sops" className="nav-link">
              SOPs
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* Showing track button as disabled with coming soon */}
            <Button
              disabled
              variant="outline"
              className="flex items-center cursor-not-allowed"
              title="Tracking facility coming soon"
            >
              <Search size={16} className="mr-1" /> Track (Coming Soon)
            </Button>
            <Button asChild>
              <Link to="/contact#quote">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-brand-orange focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium nav-link"
            >
              Home
            </Link>
            <div>
              <div className="px-3 py-2 rounded-md text-base font-medium nav-link">
                Services
              </div>
              <div className="pl-6 space-y-1">
                <Link
                  to="/services/land-freight"
                  className="block px-3 py-2 rounded-md text-sm font-medium nav-link"
                >
                  Land Freight & Cross-Border Trucking
                </Link>
                <Link
                  to="/services/multi-modal"
                  className="block px-3 py-2 rounded-md text-sm font-medium nav-link"
                >
                  Multi-Modal Logistics Solutions
                </Link>
                <Link
                  to="/services/temperature-controlled"
                  className="block px-3 py-2 rounded-md text-sm font-medium nav-link"
                >
                  Temperature-Controlled Logistics
                </Link>
                <Link
                  to="/services/warehousing"
                  className="block px-3 py-2 rounded-md text-sm font-medium nav-link"
                >
                  Warehousing & Distribution
                </Link>
                <Link
                  to="/services/contract-logistics"
                  className="block px-3 py-2 rounded-md text-sm font-medium nav-link"
                >
                  Contract Logistics & Fleet Leasing
                </Link>
              </div>
            </div>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium nav-link"
            >
              About Us
            </Link>
            <Link
              to="/sops"
              className="block px-3 py-2 rounded-md text-base font-medium nav-link"
            >
              SOPs
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium nav-link"
            >
              Contact
            </Link>
          </div>
          <div className="px-2 py-3 flex flex-col space-y-2">
            {/* Disabled track shipment button with "Coming Soon" label */}
            <Button
              disabled
              variant="outline"
              size="sm"
              className="flex items-center justify-center cursor-not-allowed"
              title="Tracking facility coming soon"
            >
              <Search size={16} className="mr-1" /> Track Shipment (Coming Soon)
            </Button>
            <Button asChild size="sm">
              <Link to="/contact#quote">Get a Quote</Link>
            </Button>
          </div>
        </div>
      )}

      {/* Hide current tracking form dropdown as feature is not active */}
      {/* {isTrackingOpen && (
        <div className="absolute top-20 right-4 sm:right-6 lg:right-8 bg-white shadow-xl rounded-md p-4 w-full max-w-md z-50 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-brand-navy">Track Your Shipment</h3>
            <button onClick={toggleTracking} className="text-gray-500 hover:text-gray-700">
              <X size={18} />
            </button>
          </div>
          <form className="space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="Enter tracking number" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange" 
              />
            </div>
            <Button type="submit" className="w-full">
              Track Now
            </Button>
          </form>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
