import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/shared/SectionHeader";
import ContactForm from "@/components/forms/ContactForm";
import MapComponent from "@/components/shared/MapComponent";
import { MapPin, Phone, Mail, Clock, MessageSquare, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [activeTab, setActiveTab] = useState("contact");
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL to determine which tab to show
    if (location.hash === "#quote") {
      setActiveTab("quote");
    }
  }, [location]);

  const offices = [
    {
      city: "Dubai",
      country: "UAE",
      address: "Park Office 4, Office S1 -59, Dubai Investment Park 1 , Dubai",
      phone: "+97-155-154-4123",
      email: "info@gravityshift.ae",
      hours: "8:00 AM - 6:00 PM (Sun-Thu)",
    },
  ];

  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-transparent relative text-white py-20">
        <img
          src="/banner.jpg"
          alt="Banner"
          className="top-0 left-0 absolute -z-10 w-full h-full object-cover brightness-50"
        />
        <div className="section-container">
          <SectionHeader
            title="Contact GravityShift"
            subtitle="GET IN TOUCH"
            description="Have questions or need a quote? We're ready to assist with all your logistics needs across the GCC."
            align="center"
            className="text-white"
          />
        </div>
      </div>

      {/* Contact Form and Info */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 bg-gray-50 rounded-lg p-6 h-fit">
            <h3 className="text-xl font-semibold mb-6 text-brand-navy">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-brand-orange bg-brand-orange/10 p-2 rounded-full mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-brand-navy">Headquarters</h4>
                  <p className="text-gray-600">
                    Dubai Silicon Oasis, Dubai, UAEOffice 4, S1-59, Property
                    Investment Park, DIP-1, Dubai – 500001, UNITED ARAB EMIRATES
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-brand-orange bg-brand-orange/10 p-2 rounded-full mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-brand-navy">Phone</h4>
                  {/* <p className="text-gray-600">+971 4 123 4567</p> */}
                  <p className="text-gray-600 flex flex-row items-center gap-2">
                    +971 52 934 9419 <FaWhatsapp />
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-brand-orange bg-brand-orange/10 p-2 rounded-full mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-brand-navy">Email</h4>
                  <p className="text-gray-600">info@gravityshift.ae</p>
                  {/* <p className="text-gray-600">support@gravityshift.ae</p> */}
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-brand-orange bg-brand-orange/10 p-2 rounded-full mr-4">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-brand-navy">Working Hours</h4>
                  <p className="text-gray-600">
                    Monday to Sunday, 8:00 AM – 7:00 PM (GMT)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="contact" className="text-base">
                  Contact Us
                </TabsTrigger>
                <TabsTrigger value="quote" className="text-base">
                  Request a Quote
                </TabsTrigger>
              </TabsList>

              <TabsContent value="contact" className="mt-0">
                <h3 className="text-2xl font-semibold mb-6 text-brand-navy">
                  Send Us a Message
                </h3>
                <ContactForm type="contact" />
              </TabsContent>

              <TabsContent value="quote" className="mt-0">
                <h3 className="text-2xl font-semibold mb-6 text-brand-navy">
                  Request a Quote
                </h3>
                <ContactForm type="quote" />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Branch Offices */}
      <section className="section-container bg-gray-50">
        <SectionHeader
          title="Our Branch Offices"
          subtitle="GCC LOCATIONS"
          description="With strategic locations across the GCC, we ensure efficient service delivery and local expertise."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2 text-brand-navy">
                {office.city}, {office.country}
              </h3>
              <div className="space-y-4 mt-4">
                <div className="flex items-start">
                  <MapPin
                    size={18}
                    className="text-brand-orange mr-3 flex-shrink-0 mt-1"
                  />
                  <p className="text-gray-600">{office.address}</p>
                </div>
                <div className="flex items-center">
                  <Phone
                    size={18}
                    className="text-brand-orange mr-3 flex-shrink-0"
                  />
                  <p className="text-gray-600">{office.phone}</p>
                </div>
                <div className="flex items-center">
                  <Mail
                    size={18}
                    className="text-brand-orange mr-3 flex-shrink-0"
                  />
                  <p className="text-gray-600">{office.email}</p>
                </div>
                <div className="flex items-center">
                  <Clock
                    size={18}
                    className="text-brand-orange mr-3 flex-shrink-0"
                  />
                  <p className="text-gray-600">{office.hours}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="section-container">
        <SectionHeader
          title="Find Us Across the GCC"
          subtitle="BRANCH LOCATOR"
          description="Explore our network of offices and distribution centers across the GCC region."
        />
        <MapComponent className="h-96" />
      </section>

      {/* Customer Support */}
      {/* <section className="section-container bg-brand-navy text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-white/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MessageSquare size={24} className="text-brand-orange" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
            <p className="text-gray-300 mb-4">
              Instant support via our live chat during business hours.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-white/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Phone size={24} className="text-brand-orange" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Hotline</h3>
            <p className="text-gray-300 mb-4">
              Round-the-clock support for urgent matters.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-white/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users size={24} className="text-brand-orange" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
            <p className="text-gray-300 mb-4">
              Assigned account managers for enterprise clients.
            </p>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default Contact;
