import { useState, useEffect, useRef } from "react";
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
  const tabSectionRef = useRef<HTMLDivElement>(null); // 👈 Ref to scroll
  useEffect(() => {
    if (location.hash === "#quote") {
      setActiveTab("quote");

      // Scroll after slight delay to allow tab change/render
      setTimeout(() => {
        tabSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location]);

  const offices = [
    {
      city: "Dubai",
      country: "UAE",
      address: "Dubai Investments Park Office",
      phone: "+971-4-123-4567",
      email: "dubai@example.com",
      hours: "Mon–Fri: 9am–6pm",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28931.14292262838!2d55.14478759561374!3d24.9867631814215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f728492c989b3%3A0xacfcb5c405ca278!2sDubai%20Investments%20Park%20Office!5e0!3m2!1sen!2sin!4v1746097566542!5m2!1sen!2sin",
    },
    // Add more offices as needed
  ];


  const getEmbedUrl = (address: string) => {
    const base = "https://www.google.com/maps/embed/v1/place";
    const apiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your actual key
    return `${base}?key=${apiKey}&q=${encodeURIComponent(address)}`;
  };


  return (
    <Layout>
      {/* Page Header */}
      <div className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center text-center"
        // style={{
        //   backgroundImage: "url('/lovable-uploads/homeBanner.png')",
        // }}
        >
        <img
          src="/lovable-uploads/homeBanner.png"
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
      <section ref={tabSectionRef} className="section-container">
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

        <div className="space-y-12">
          {offices.map((office, index) => (
            <div
              className="flex flex-col md:flex-row items-start gap-6"
              key={index}
            >
              {/* Office Details */}
              <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/4">
                <h3 className="text-xl font-semibold mb-2 text-brand-navy">
                  {office.city}, {office.country}
                </h3>
                <div className="space-y-4 mt-4">
                  <div className="flex items-start">
                    <a
                      href={`https://www.google.com/maps?q=${encodeURIComponent(
                        office.address
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-brand-orange transition-colors"
                    >
                      <div className="flex">
                        <MapPin
                          size={18}
                          className="text-brand-orange mr-3 flex-shrink-0 mt-1"
                        />
                        {office.address}
                      </div>
                    </a>
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

              {/* Static Embedded Map */}
              <div className="w-full  h-auto md:h-80 rounded-lg overflow-hidden">
                <iframe
                  src={office.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
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
