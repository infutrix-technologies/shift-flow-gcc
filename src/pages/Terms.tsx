import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/shared/SectionHeader";
import CertificationBadge from "@/components/shared/CertificationBadge";
import { ShieldCheck, Award, Users, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

const Terms = () => {
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
   <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          GravityShift - Terms and Conditions
        </h1>
        <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
          <div>
            <h2 className="font-semibold text-lg text-gray-800">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the GravityShift website, platform, or associated services (collectively, the “Platform”), you agree to be bound by these Terms and Conditions (“Terms”). If you do not accept these Terms, you must refrain from using the Platform.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-gray-800">2. Services Provided</h2>
            <p>
              GravityShift is a digital marketplace connecting businesses and individuals with third-party logistics, trucking, and warehousing service providers. GravityShift facilitates booking, pricing, communication, and tracking tools, but does not itself provide transportation or warehousing services. All logistics services are performed by independent third-party providers.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-gray-800">3. User Obligations</h2>
            <h3 className="font-medium mt-2">3.1 Registration & Account Security</h3>
            <ul className="list-disc list-inside ml-4">
              <li>You may be required to register and create an account to access certain Platform features.</li>
              <li>You must provide accurate, current, and complete information.</li>
              <li>You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
            </ul>
            <h3 className="font-medium mt-4">3.2 Prohibited Activities</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Violate any applicable local, national, or international laws or third-party rights.</li>
              <li>Use the Platform for fraudulent or deceptive activities, including false bookings or payment fraud.</li>
              <li>Interfere with the security, performance, or availability of the Platform.</li>
              <li>Attempt to reverse engineer, hack, introduce malware, or disrupt Platform systems.</li>
              <li>Use automated means to access or scrape the Platform without written consent.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-gray-800">4. User-Generated Content</h2>
            <h3 className="font-medium mt-2">4.1 Submissions</h3>
            <p>
              You may post content (e.g., reviews, comments, feedback). By submitting content, you grant GravityShift a royalty-free, perpetual, irrevocable, and worldwide license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content for promotional, operational, or analytical purposes.
            </p>
            <h3 className="font-medium mt-4">4.2 Content Restrictions</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Defamatory, obscene, offensive, harassing, or hateful.</li>
              <li>Infringing on any intellectual property or proprietary rights.</li>
              <li>Misleading, deceptive, or fraudulent.</li>
              <li>In violation of any applicable law or regulation.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-gray-800">5. Pricing & Payment</h2>
            <ul className="list-disc list-inside ml-4">
              <li>All prices on the Platform are provided by third-party vendors and may be subject to change without notice.</li>
              <li>Prices may include additional charges such as taxes, VAT, fuel surcharges, tolls, or accessorial fees.</li>
              <li>GravityShift is not responsible for pricing discrepancies, service delays, or additional charges imposed by service providers.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-gray-800">6. Limitation of Liability</h2>
            <h3 className="font-medium mt-2">6.1 Disclaimer of Warranties</h3>
            <p>
              The Platform and all related services are provided “as-is” and “as available” without warranties of any kind, express or implied. GravityShift does not guarantee uninterrupted service, absolute accuracy, or complete security.
            </p>
            <h3 className="font-medium mt-4">6.2 Third-Party Services</h3>
            <p>
              GravityShift is not liable for acts, omissions, delays, damages, or losses caused by third-party service providers. Your use of services arranged through the Platform is at your own risk.
            </p>
            <h3 className="font-medium mt-4">6.3 Indemnification</h3>
            <p>
              You agree to indemnify and hold harmless GravityShift, its affiliates, employees, and agents from any claims, damages, liabilities, costs, or expenses arising from your use of the Platform, your content submissions, or your violation of these Terms.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-gray-800">7. Intellectual Property</h2>
            <ul className="list-disc list-inside ml-4">
              <li>All Platform content, including text, graphics, logos, software, and UI elements, is owned or licensed by GravityShift and protected by applicable intellectual property laws.</li>
              <li>You may not copy, modify, distribute, or use any content for commercial purposes without prior written consent from GravityShift.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-gray-800">8. Termination</h2>
            <p>GravityShift reserves the right to suspend or terminate any user account or access to the Platform, with or without notice, for any reason, including but not limited to:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Violation of these Terms.</li>
              <li>Fraudulent or abusive activity.</li>
              <li>Legal or regulatory requirements.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-gray-800">9. Dispute Resolution</h2>
            <ul className="list-disc list-inside ml-4">
              <li>Any disputes arising from or related to these Terms or the Platform shall first be attempted to be resolved amicably between the parties.</li>
              <li>If unresolved, disputes shall be subject to the exclusive jurisdiction of the courts of the United Arab Emirates.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-gray-800">10. Force Majeure</h2>
            <p>
              GravityShift is not liable for any failure or delay in performance due to circumstances beyond its reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, labor disputes, or network failures.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-gray-800">11. Changes to Terms</h2>
            <p>
              GravityShift may update these Terms at any time. Changes will be effective upon posting to the Platform. Continued use of the Platform after changes are posted constitutes acceptance of the revised Terms.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-gray-800">12. Contact Information</h2>
            <p>Email: <a href="mailto:info@gravityshift.ae" className="text-blue-600 underline">info@gravityshift.ae</a></p>
            <p>Address: DIP, Dubai</p>
          </div>
        </div>
      </div>
    </section>

    </Layout>
  );
};

export default Terms
