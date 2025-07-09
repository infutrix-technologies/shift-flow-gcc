import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  icon?: ReactNode;
  features: {
    title: string;
    description: string;
  }[];
  benefits: string[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  relatedServices?: {
    title: string;
    link: string;
  }[];
}

const ServicePage = ({
  title,
  subtitle,
  description,
  image,
  icon,
  features,
  benefits,
  faqs,
  relatedServices,
}: ServicePageProps) => {
  return (
    <Layout>
      {/* Page Header */}
    <div
  className="relative bg-brand-navy text-white py-20"
  style={{
    backgroundImage: "url('/lovable-uploads/picture3.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-brand-navy/80 z-0"></div>

  <div className="relative z-10 section-container">
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="md:w-2/3">
        <p className="text-brand-orange font-medium mb-2">{subtitle}</p>
        <h1 className="heading-1 mb-4">{title}</h1>
        <p className="text-lg text-gray-300 mb-8">{description}</p>
        <div className="flex flex-wrap gap-4">
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
            variant="outline"
            size="lg"
            className="border-white text-black hover:bg-white/10"
          >
            <Link to="/contact" className="flex items-center">
              Contact Us <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="md:w-1/3 flex justify-center">
        <div className="w-32 h-32 bg-brand-orange/20 rounded-full flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="section-container">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-brand-orange">
              Home
            </Link>
            <ChevronRight size={16} className="mx-2" />
            <Link to="/services/land-freight" className="hover:text-brand-orange">
              Services
            </Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-brand-orange">{title}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-2 mb-6 text-brand-navy">How It Works</h2>
            <p className="text-gray-600 mb-6">
              Our {title} service provides comprehensive solutions tailored to
              your specific needs. With advanced technology and experienced
              personnel, we ensure efficient and reliable service delivery.
            </p>
            <div className="space-y-4 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-brand-orange bg-brand-orange/10 p-1 rounded-full mr-3 mt-1">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-brand-navy">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild>
              <Link to="/contact#quote" className="flex items-center">
                Request Service <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden h-full flex items-center justify-center">
            {image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex justify-center items-center h-full">
                <img
                  src="/lovable-uploads/picture3.jpg"
                  alt="GravityShift Symbol"
                  // className="w-96 h-96 animate-spin duration-custom ease-linear infinite origin-center"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-container bg-gray-50">
        <SectionHeader
          title={`Benefits of Our ${title} Service`}
          subtitle="WHY CHOOSE US"
          description="Discover how our services can transform your logistics operations and deliver tangible business value."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex items-start"
            >
              <div className="text-brand-orange bg-brand-orange/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle2 size={18} />
              </div>
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <section className="section-container">
          <SectionHeader
            title={`Frequently Asked Questions`}
            subtitle="FAQ"
            description="Find answers to common questions about our services and operations."
          />

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold mb-2 text-brand-navy">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="section-container bg-gray-50">
          <SectionHeader
            title="Related Services"
            subtitle="EXPLORE MORE"
            description="Discover other services that complement our offerings and enhance your logistics experience."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 text-brand-navy">
                  {service.title}
                </h3>
                <Button asChild variant="outline">
                  <Link to={service.link} className="flex items-center">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-brand-navy py-16">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-2 text-white mb-6">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8">
              Contact us today to discuss your specific requirements and
              discover how our {title} services can benefit your business.
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
                className="border-white text-black hover:bg-white/10"
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

export default ServicePage;
