import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ServiceCard from "@/components/home/ServiceCard";
import TestimonialCard from "@/components/home/TestimonialCard";
import SectionHeader from "@/components/shared/SectionHeader";
import MapComponent from "@/components/shared/MapComponent";
import CertificationBadge from "@/components/shared/CertificationBadge";

import {
  Truck,
  PackageCheck,
  Building2,
  Thermometer,
  FileText,
  Users,
  MapPin,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Land Freight & Cross-Border Trucking",
      description:
        "Comprehensive GCC coverage with dedicated and shared fleets, providing efficient land transport solutions.",
      icon: <Truck size={24} />,
      link: "/services/land-freight",
    },
    {
      title: "Multi-Modal Logistics Solutions",
      description:
        "Seamlessly combining road, sea, and air transport for optimal cargo handling and project management.",
      icon: <PackageCheck size={24} />,
      link: "/services/multi-modal",
    },
    {
      title: "Temperature-Controlled Logistics",
      description:
        "Real-time temperature monitoring and compliance with international standards for sensitive cargo.",
      icon: <Thermometer size={24} />,
      link: "/services/temperature-controlled",
    },
    {
      title: "Warehousing & Distribution",
      description:
        "Short-term and long-term storage options with integrated inventory management and last-mile delivery.",
      icon: <Building2 size={24} />,
      link: "/services/warehousing",
    },
    {
      title: "Contract Logistics & Fleet Leasing",
      description:
        "Long-term deployment plans with AI-driven optimization for maximum efficiency and cost savings.",
      icon: <FileText size={24} />,
      link: "/services/contract-logistics",
    },
  ];

  const chunkArray = (arr: any[], size: number) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const ServiceCardGrid = ({ services }: { services: any[] }) => {
    const getChunked = () => {
      const width = window.innerWidth;
      if (width >= 1024) return chunkArray(services, 3);
      if (width >= 768) return chunkArray(services, 2);
      return chunkArray(services, 1);
    };

    const [chunkedServices, setChunkedServices] = useState(getChunked());

    useEffect(() => {
      const handleResize = () => setChunkedServices(getChunked());
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [services]);

    return (
      <div className="space-y-8">
        {chunkedServices.map((chunk, idx) => (
          <div
            key={idx}
            className={`flex flex-wrap gap-6 ${chunk.length < 3 ? "justify-center" : "justify-between"
              }`}
          >
            {chunk.map((service, i) => (
              <div key={i} className="w-full max-w-[380px]">
                <div className="h-full flex flex-col">
                  <ServiceCard {...service} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  const testimonials = [
    {
      quote:
        "GravityShift transformed our logistics operations across the GCC, reducing delivery times by 30% and providing unmatched visibility into our shipments.",
      name: "Ahmed Al Fahim",
      title: "Supply Chain Director",
      company: "Gulf Trading Corp.",
    },
    {
      quote:
        "The temperature-controlled logistics service from GravityShift has been a game-changer for our pharmaceutical distribution. Complete compliance and zero temperature excursions.",
      name: "Fatima Al Mansouri",
      title: "Operations Manager",
      company: "MediHealth Distributors",
    },
    {
      quote:
        "As we expanded across multiple GCC countries, GravityShift provided seamless multi-modal solutions that adapted to our changing needs. Truly a strategic partner.",
      name: "Raj Mehta",
      title: "CEO",
      company: "Emerald Retail Group",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="section-container bg-gray-50">
        <SectionHeader
          title="Our Logistics Services"
          subtitle="WHAT WE OFFER"
          description="We provide comprehensive logistics solutions across the GCC region, leveraging technology and innovation to optimize your supply chain."
        />
        <ServiceCardGrid services={services} />
      </section>

      {/* About Section */}
      <section className="section-container bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-brand-orange font-semibold">
              ABOUT GRAVITYSHIFT
            </span>
            <h2 className="heading-2 mb-6 text-brand-navy">
              Born to Move What Others Can't
            </h2>
            <p className="text-gray-600 mb-6">
              GravityShift is revolutionizing freight through digital
              transformation, bringing precision, speed, and transparency to
              logistics across the GCC region. Our technology-driven approach
              and commitment to sustainability sets new standards in the
              industry.
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  title: "RTA Approved & GIG Insured",
                  desc: "Fully compliant with all regulatory requirements across the GCC.",
                },
                {
                  title: "Advanced Technology Integration",
                  desc: "Real-time tracking, AI-powered route optimization, and seamless API connectivity.",
                },
                {
                  title: "Sustainability Commitment",
                  desc: "Eco-friendly practices and carbon footprint reduction initiatives.",
                },
              ].map((item, i) => (
                <div className="flex items-start" key={i}>
                  <div className="text-brand-orange bg-brand-orange/10 p-1 rounded-full mr-3 mt-1">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-brand-navy">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild>
              <Link to="/about" className="flex items-center">
                Learn More About Us <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>

          <div className="rounded-lg p-6 h-full">
            <div className="flex flex-wrap gap-3 mb-6">
              {["RTA Approved", "GIG Insured", "ISO 9001", "ISO 14001"].map(
                (badge, idx) => (
                  <CertificationBadge name={badge} key={idx} />
                )
              )}
            </div>
            <div className="flex justify-center items-center h-full">
              <img
                src="/lovable-uploads/picture1.png"
                alt="GravityShift Symbol"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-container bg-gray-50">
        <SectionHeader
          title="Our Service Areas"
          subtitle="GCC COVERAGE"
          description="We provide comprehensive logistics services across all GCC countries, with strategic hubs in major cities."
        />
        <div className="relative">
          <MapComponent />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
            {["UAE", "KSA", "Oman", "Qatar", "Kuwait", "Bahrain", "Jordan", "Egypt", "Syria", "Yemen"].map(
              (country) => (
                <div
                  key={country}
                  className="bg-white shadow rounded-lg p-4 text-center"
                >
                  <div className="flex flex-col items-center">
                    <MapPin className="text-brand-orange mb-2" size={24} />
                    <span className="font-medium">{country}</span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-container bg-white">
        <SectionHeader
          title="Client Success Stories"
          subtitle="TESTIMONIALS"
          description="Hear from our satisfied clients about how GravityShift has transformed their logistics operations."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              company={testimonial.company}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60 bg-no-repeat"
          style={{ backgroundImage: "url('/lovable-uploads/CTAPoster.png')" }}
        />
        {/* Dark overlay (optional) */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-2 text-white mb-6">
              Ready to Transform Your Logistics?
            </h2>
            <p className="text-gray-300 mb-8">
              Contact us today to discuss your logistics needs and discover how
              GravityShift can optimize your supply chain across the GCC region.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90"
              >
                <Link to="/contact#quote">Get a Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#1A1F2C1] text-[#1A1F2C] hover:bg-white/10"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Index;
