
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/shared/SectionHeader";
import CertificationBadge from "@/components/shared/CertificationBadge";
import { 
  ShieldCheck, 
  Award, 
  Users,
  CheckCircle2
} from 'lucide-react';

const About = () => {
  const leadership = [
    {
      name: 'Ahmed Al Mansouri',
      title: 'Chief Executive Officer',
      bio: 'With over 20 years of experience in logistics across the GCC, Ahmed leads our strategic vision and innovation initiatives.'
    },
    {
      name: 'Fatima Al Khouri',
      title: 'Chief Operations Officer',
      bio: 'Fatima brings 15+ years of expertise in optimizing logistics operations and implementing cutting-edge technologies.'
    },
    {
      name: 'Raj Mehta',
      title: 'Chief Technology Officer',
      bio: 'A pioneer in logistics technology, Raj leads our digital transformation initiatives and TMS integration efforts.'
    },
    {
      name: 'Sarah Johnson',
      title: 'Director of Sustainability',
      bio: 'Sarah champions our eco-friendly practices and carbon footprint reduction strategies across all operations.'
    }
  ];

  const certifications = [
    { name: 'RTA Approved', icon: <ShieldCheck size={16} /> },
    { name: 'GIG Insured', icon: <ShieldCheck size={16} /> },
    { name: 'ISO 9001:2015', icon: <Award size={16} /> },
    { name: 'ISO 14001:2015', icon: <Award size={16} /> },
    { name: 'HACCP Certified', icon: <Award size={16} /> },
    { name: 'GDP Compliant', icon: <Award size={16} /> },
  ];

  const values = [
    {
      name: 'Innovation',
      description: 'We continuously embrace new technologies and approaches to drive efficiency and service excellence.'
    },
    {
      name: 'Integrity',
      description: 'We operate with complete transparency and honesty in all our interactions with clients, partners, and employees.'
    },
    {
      name: 'Reliability',
      description: 'We deliver on our promises and maintain consistent service quality across all operations.'
    },
    {
      name: 'Sustainability',
      description: 'We are committed to reducing our environmental footprint and implementing eco-friendly logistics practices.'
    },
    {
      name: 'Customer-Centricity',
      description: 'We place our customers at the heart of everything we do, tailoring solutions to meet their specific needs.'
    }
  ];

  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-brand-navy text-white py-20">
        <div className="section-container">
          <SectionHeader
            title="About GravityShift"
            subtitle="OUR STORY"
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
            <h2 className="heading-2 mb-6 text-brand-navy">Our Journey</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2015, GravityShift emerged from a vision to revolutionize logistics across the GCC region. 
              We identified critical gaps in the market: limited technological integration, lack of transparency, and 
              inefficient multi-modal connections.
            </p>
            <p className="text-gray-600 mb-4">
              Starting with a small fleet of vehicles in Dubai, we quickly expanded by focusing on technology-driven 
              solutions that provided unparalleled visibility and efficiency. Today, we operate across all GCC countries 
              with a comprehensive suite of logistics services.
            </p>
            <p className="text-gray-600">
              Our name, GravityShift, represents our ability to overcome logistics challenges that seem as immovable as gravity itself. 
              We shift perspectives, bottlenecks, and boundaries to deliver exceptional logistics solutions.
            </p>
          </div>
          <div className="order-1 lg:order-2 bg-gray-100 rounded-lg overflow-hidden h-80 flex items-center justify-center">
            <div className="text-gray-500">Company History Image</div>
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
            <h3 className="text-xl font-semibold mb-4 text-brand-navy">Our Vision</h3>
            <p className="text-gray-600 italic">
              "To be the most trusted logistics partner globally, setting new standards for efficiency and sustainability."
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-brand-navy">Our Mission</h3>
            <p className="text-gray-600 italic">
              "Revolutionizing freight through digital transformation with precision, speed, and transparency."
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-6 text-brand-navy">Our Core Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <div className="text-brand-orange bg-brand-orange/10 p-2 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <CheckCircle2 size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-brand-navy">{value.name}</h4>
              <p className="text-gray-600 flex-grow">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-container">
        <SectionHeader
          title="Leadership Team"
          subtitle="OUR EXPERTS"
          description="Meet the experienced professionals who drive our company's success and innovation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadership.map((leader, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <Users size={48} className="text-gray-400" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-brand-navy">{leader.name}</h3>
                <p className="text-brand-orange mb-2">{leader.title}</p>
                <p className="text-sm text-gray-600">{leader.bio}</p>
              </div>
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
        
        <div className="mt-12 bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4 text-brand-navy">Download Certificates</h3>
          <p className="text-gray-600 mb-6">
            Access our official certifications and compliance documents. All documents are provided in PDF format.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <a href="#" className="flex items-center p-3 border border-gray-200 rounded-md hover:border-brand-orange hover:bg-brand-orange/5 transition-colors">
              <ShieldCheck size={20} className="text-brand-orange mr-2" />
              <span>RTA Certificate</span>
            </a>
            <a href="#" className="flex items-center p-3 border border-gray-200 rounded-md hover:border-brand-orange hover:bg-brand-orange/5 transition-colors">
              <ShieldCheck size={20} className="text-brand-orange mr-2" />
              <span>GIG Insurance Certificate</span>
            </a>
            <a href="#" className="flex items-center p-3 border border-gray-200 rounded-md hover:border-brand-orange hover:bg-brand-orange/5 transition-colors">
              <Award size={20} className="text-brand-orange mr-2" />
              <span>ISO 9001:2015</span>
            </a>
            <a href="#" className="flex items-center p-3 border border-gray-200 rounded-md hover:border-brand-orange hover:bg-brand-orange/5 transition-colors">
              <Award size={20} className="text-brand-orange mr-2" />
              <span>ISO 14001:2015</span>
            </a>
            <a href="#" className="flex items-center p-3 border border-gray-200 rounded-md hover:border-brand-orange hover:bg-brand-orange/5 transition-colors">
              <Award size={20} className="text-brand-orange mr-2" />
              <span>HACCP Certification</span>
            </a>
            <a href="#" className="flex items-center p-3 border border-gray-200 rounded-md hover:border-brand-orange hover:bg-brand-orange/5 transition-colors">
              <Award size={20} className="text-brand-orange mr-2" />
              <span>GDP Compliance</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
