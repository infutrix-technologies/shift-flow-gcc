import { Link, useNavigate } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/">
              <img
                src="/lovable-uploads/c414fd89-7210-4891-8b3e-b4be72fdb25d.png"
                alt="GravityShift Logo"
                className="w-2/3 mb-4 rounded-lg"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Revolutionizing freight through digital transformation with
              precision, speed, and transparency.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-orange">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/land-freight"
                  className="text-gray-400 hover:text-brand-orange flex items-center"
                >
                  <ArrowRight size={14} className="mr-1" /> Land Freight
                </Link>
              </li>
              <li>
                <Link
                  to="/services/multi-modal"
                  className="text-gray-400 hover:text-brand-orange flex items-center"
                >
                  <ArrowRight size={14} className="mr-1" /> Multi-Modal
                  Logistics
                </Link>
              </li>
              <li>
                <Link
                  to="/services/temperature-controlled"
                  className="text-gray-400 hover:text-brand-orange flex items-center"
                >
                  <ArrowRight size={14} className="mr-1" />{" "}
                  Temperature-Controlled
                </Link>
              </li>
              <li>
                <Link
                  to="/services/warehousing"
                  className="text-gray-400 hover:text-brand-orange flex items-center"
                >
                  <ArrowRight size={14} className="mr-1" /> Warehousing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/contract-logistics"
                  className="text-gray-400 hover:text-brand-orange flex items-center"
                >
                  <ArrowRight size={14} className="mr-1" /> Contract Logistics
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-brand-orange flex items-center"
                >
                  <ArrowRight size={14} className="mr-1" /> About Us
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/fleet"
                  className="text-gray-400 hover:text-brand-orange flex items-center"
                >
                  <ArrowRight size={14} className="mr-1" /> Fleet Capabilities
                </Link>
              </li> */}
              <li>
                <Link
                  to="/sops"
                  className="text-gray-400 hover:text-brand-orange flex items-center"
                >
                  <ArrowRight size={14} className="mr-1" /> SOPs
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/technology"
                  className="text-gray-400 hover:text-brand-orange flex items-center"
                >
                  <ArrowRight size={14} className="mr-1" /> Technology
                </Link>
              </li> */}
              <li>
                <Link
                  to="/contact#quote"
                  className="text-gray-400 hover:text-brand-orange flex items-center"
                >
                  <ArrowRight size={14} className="mr-1" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 flex items-start">
                <Link
                  to="https://www.google.com/maps?q=Park+Office+4,+Office+S1-59,+Dubai+Investment+Park+1,+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                   className="text-gray-400 hover:text-brand-orange flex items-center"
                >
                  <div className="flex">
                    <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                    Park Office 4, Office S1 -59, Dubai Investment Park 1, Dubai
                  </div>
                </Link>
              </li>
              <li className="text-gray-400 flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>+97-155-154-4123</span>
              </li>
              <li className="text-gray-400 flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>info@gravityshift.ae</span>
              </li>
              <li className="text-gray-400 flex items-center">
                <Globe size={18} className="mr-2 flex-shrink-0" />
                <span>www.gravityshift.ae</span>
              </li>
            </ul>
            <Button onClick={() => navigate("/contact#quote")} className="mt-4 bg-brand-orange hover:bg-brand-orange/90 w-full">
              Get a Quote
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} GravityShift. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/terms"
                className="text-gray-400 hover:text-brand-orange text-sm"
              >
                Terms of Service
              </Link>
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-brand-orange text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-brand-orange text-sm"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
