import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/shared/SectionHeader";
import CertificationBadge from "@/components/shared/CertificationBadge";
import { ShieldCheck, Award, Users, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

const About = () => {
  const values = [
    {
      name: "Innovation",
      description:
        "We continuously embrace new technologies and approaches to drive efficiency and service excellence.",
    },
    {
      name: "Integrity",
      description:
        "We operate with complete transparency and honesty in all our interactions with clients, partners, and employees.",
    },
    {
      name: "Reliability",
      description:
        "We deliver on our promises and maintain consistent service quality across all operations.",
    },
    {
      name: "Sustainability",
      description:
        "We are committed to reducing our environmental footprint and implementing eco-friendly logistics practices.",
    },
    {
      name: "Customer-Centricity",
      description:
        "We place our customers at the heart of everything we do, tailoring solutions to meet their specific needs.",
    },
  ];

  const certifications = [
    { name: "RTA Approved", icon: <ShieldCheck size={16} /> },
    { name: "GIG Insured", icon: <ShieldCheck size={16} /> },
  ];

  const chunkArray = (arr: any[], size: number) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  // Responsive chunking logic for values
  const getChunksForScreen = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return chunkArray(values, 3); // lg
      if (window.innerWidth >= 768) return chunkArray(values, 2);  // md
    }
    return chunkArray(values, 1); // sm
  };

  const [chunks, setChunks] = useState(() => getChunksForScreen());

  useEffect(() => {
    const handleResize = () => {
      setChunks(getChunksForScreen());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      {/* Page Header */}
      <div className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center text-center"
      //  style={{
      //   backgroundImage: "url('/lovable-uploads/homeBanner.png')",
      // }}
      >
        <img
          src="/banner.jpg"
          alt="Banner"
          className="top-0 left-0 absolute -z-10 w-full h-full object-cover brightness-50"
        />
        <div className="section-container">
          <SectionHeader
            title="About GravityShift"
            subtitle="ABOUT US"
            description="Born to Move What Others Can't – A narrative of innovation and technology in logistics."
            align="center"
            className="text-white"
          />
        </div>
      </div>

      {/* Our Story */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="heading-2 mb-6 text-brand-navy">About Us</h2>
            <p className="text-gray-600 mb-4">
              At GravityShift, we specialize in delivering smart, reliable, and
              efficient logistics solutions across the UAE and beyond. From
              freight forwarding and customs clearance to warehousing and
              last-mile delivery, our integrated services are designed to keep
              your supply chain moving smoothly.
            </p>
            <p className="text-gray-600">
              Headquartered in Dubai, we combine local expertise with global
              reach, using technology-driven processes to ensure transparency,
              speed, and cost-effectiveness at every stage. Whether you’re
              shipping regionally or internationally, GravityShift is your
              trusted logistics partner for end-to-end solutions that adapt to
              your business needs.
            </p>
          </div>
          <div className="order-1 lg:order-2 bg-gray-100 rounded-lg overflow-hidden  flex items-center justify-center">
            <div className="flex justify-center items-center h-full">
              <img
                src="/lovable-uploads/aboutBanner.png"
                alt="GravityShift Symbol"
                // className="w-96 h-96 animate-spin duration-custom ease-linear infinite origin-center"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission and Values */}
      <section className="section-container bg-gray-50">
        <SectionHeader
          title="Vision, Mission & Values"
          subtitle="OUR FOUNDATION"
          description="The principles that guide our operations and define our approach to logistics."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-brand-navy">
              Our Vision
            </h3>
            <p className="text-gray-600 italic">
              "To be the most trusted logistics partner globally, setting new
              standards for efficiency and sustainability."
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-brand-navy">
              Our Mission
            </h3>
            <p className="text-gray-600 italic">
              "Revolutionizing freight through digital transformation with
              precision, speed, and transparency."
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-6 text-brand-navy">
          Our Core Values
        </h3>
        <div className="space-y-6">
          {chunks.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex flex-wrap gap-6 ${row.length < 3 ? "justify-center" : "justify-start lg:justify-between"
                }`}
            >
              {row.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col w-full max-w-[380px] mx-auto"
                >
                  <div className="text-brand-orange bg-brand-orange/10 p-2 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-brand-navy">
                    {value.name}
                  </h4>
                  <p className="text-gray-600 flex-grow">{value.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

      </section>

      {/* Certifications */}
      <section className="section-container bg-gray-50">
        <SectionHeader
          title="Compliance & Approvals"
          subtitle="OUR CERTIFICATIONS"
          description="GravityShift maintains the highest standards of quality and compliance across all operations."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {certifications.map((cert, index) => (
            <CertificationBadge
              key={index}
              name={cert.name}
              icon={cert.icon}
              className="flex justify-center"
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default About;
