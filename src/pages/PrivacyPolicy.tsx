import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/shared/SectionHeader";
import CertificationBadge from "@/components/shared/CertificationBadge";
import { ShieldCheck, Award, Users, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

const PrivacyPolicy = () => {
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
          Privacy Policy – GravityShift
        </h1>

        <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
          <p>
            At GravityShift, your trust is our foundation. We are a technology-driven logistics platform focused on creating seamless freight, warehousing, and transport experiences across the GCC and beyond. Protecting your personal and business data is core to that mission.
          </p>
          <p>
            This Privacy Policy explains what information we collect, how we use it, and how we safeguard it across our website, mobile app, and operational systems. By using our services, you consent to the practices described herein. If you disagree, kindly discontinue platform use.
          </p>

          <div>
            <h2 className="font-semibold text-lg text-gray-800">1. What We Collect</h2>

            <h3 className="font-medium mt-2">1.1 Personal & Business Information</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Full name, mobile number, and email address</li>
              <li>Company details (legal name, VAT/TRN, license documents)</li>
              <li>Billing and bank account details for settlements</li>
            </ul>
            <p>We only collect what is necessary to verify identity, enable operations, and ensure compliance.</p>

            <h3 className="font-medium mt-4">1.2 Real-Time Location Data</h3>
            <ul className="list-disc list-inside ml-4">
              <li>We collect precise GPS data, Wi-Fi, and cellular metadata to power live tracking, route optimization, and ETA visibility for customers.</li>
              <li>Location is used only during active jobs and governed by your device settings.</li>
            </ul>

            <h3 className="font-medium mt-4">1.3 Technical & Usage Data</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Device details (OS, browser, IP, device model)</li>
              <li>Session duration, pages viewed, feature usage</li>
              <li>Crash logs, diagnostics, and performance indicators</li>
            </ul>
            <p>This helps us improve usability, speed, and platform uptime.</p>

            <h3 className="font-medium mt-4">1.4 Cookies & Analytics</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Remember your login and preferences</li>
              <li>Track performance and detect fraud</li>
              <li>Personalize your browsing and marketing experience (with consent)</li>
            </ul>
            <p>You can adjust cookie preferences through your browser.</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-gray-800">2. Why We Collect Data</h2>
            <ul className="list-disc list-inside ml-4">
              <li>Enabling bookings, dispatches, and invoicing</li>
              <li>Verifying identity and preventing fraudulent activity</li>
              <li>Providing real-time updates and notifications</li>
              <li>Enhancing platform performance through behavior analytics</li>
              <li>Complying with legal and tax regulations across jurisdictions</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-gray-800">3. Data Sharing – Controlled & Transparent</h2>
            <p>We do <strong>not</strong> sell your data.</p>
            <p>We share data selectively and securely with:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Logistics Providers: To execute transport and warehousing tasks</li>
              <li>Payment Gateways: For secure transaction processing</li>
              <li>Auditors & Regulators: If required under UAE or applicable data laws</li>
              <li>Technology Vendors: For hosting, analytics, or customer support tools</li>
            </ul>
            <p>All partners are vetted and contractually bound to confidentiality.</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-gray-800">4. Data Security Practices</h2>
            <ul className="list-disc list-inside ml-4">
              <li>Encryption: Data at rest and in transit is encrypted using industry-grade protocols</li>
              <li>Access Control: Limited access based on roles and multi-factor authentication (MFA)</li>
              <li>Monitoring: Continuous monitoring, periodic audits, and data breach protocols</li>
            </ul>
            <p>While no system is impenetrable, we are committed to minimizing risks with rigorous governance.</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-gray-800">5. Third-Party Links</h2>
            <p>
              GravityShift may contain links to third-party websites or platforms. We are not responsible for their content or privacy practices. We recommend reviewing their privacy terms before use.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-gray-800">6. Account Termination & Data Deletion</h2>
            <p>You may request to delete your account by writing to <span className="italic">[Insert Email]</span>.</p>
            <p>Account deletion is subject to:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Completion of any ongoing shipments</li>
              <li>Clearance of outstanding payments or disputes</li>
            </ul>
            <p>
              Post-deletion, we may retain minimal data as required for legal or financial compliance.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-gray-800">7. Your Rights</h2>
            <ul className="list-disc list-inside ml-4">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw app permissions (e.g., location, contacts)</li>
            </ul>
            <p>Contact us at <span className="italic">[Insert Email]</span> to initiate any data rights request.</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-gray-800">8. Policy Updates</h2>
            <p>
              This Privacy Policy may be updated periodically. We’ll notify you via email or app alerts if significant changes are made. Continued use of the platform post-update constitutes acceptance of the revised policy.
            </p>
          </div>
        </div>
      </div>
    </section>

    </Layout>
  );
};


export default PrivacyPolicy
