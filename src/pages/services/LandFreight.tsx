
import ServicePage from "@/components/services/ServicePage";
import { Truck } from "lucide-react";

const LandFreight = () => {
  return (
    <ServicePage
      title="Land Freight & Cross-Border Trucking"
      subtitle="LOGISTICS SERVICES"
      description="Comprehensive GCC coverage with point-to-point routes, offering dedicated and shared fleets with flexible pricing models."
      icon={<Truck size={48} className="text-white" />}
      features={[
        {
          title: "GCC-Wide Coverage",
          description: "Seamless transportation across UAE, KSA, Qatar, Oman, Kuwait, and Bahrain with expert border clearance."
        },
        {
          title: "Dedicated & Shared Fleets",
          description: "Choose between dedicated vehicles for exclusive use or cost-effective shared options based on your needs."
        },
        {
          title: "Real-Time Tracking",
          description: "Advanced GPS tracking providing visibility of your shipments throughout the journey."
        },
        {
          title: "Flexible Pricing Models",
          description: "Per-trip, tonnage-based, or long-term contract options tailored to your business requirements."
        },
        {
          title: "Express & Standard Services",
          description: "Time-critical express deliveries or economical standard transport based on your priorities."
        }
      ]}
      benefits={[
        "Reduced transit times with optimized routing and border crossing expertise",
        "Cost savings through efficient load consolidation and backhaul opportunities",
        "Enhanced security with GPS-monitored vehicles and trained drivers",
        "Streamlined customs clearance with pre-approved documentation processes",
        "Complete visibility with real-time tracking and automated status updates",
        "Scalable capacity to accommodate seasonal peaks and business growth"
      ]}
      faqs={[
        {
          question: "What types of vehicles are available in your fleet?",
          answer: "Our diverse fleet includes light commercial vehicles, 3-ton trucks, 7-ton trucks, flatbed trailers, refrigerated vehicles, and specialized equipment for oversized cargo."
        },
        {
          question: "How do you handle cross-border documentation?",
          answer: "We have dedicated customs clearance specialists who prepare and process all required documentation, ensuring smooth border crossings with minimal delays."
        },
        {
          question: "What is the typical transit time for cross-border shipments?",
          answer: "Transit times vary based on origin, destination, and border processing. Typically, shipments between neighboring GCC countries take 1-2 days, while longer routes may require 2-4 days."
        },
        {
          question: "Do you offer cargo insurance for land freight?",
          answer: "Yes, we provide comprehensive cargo insurance options covering loss, damage, and delays, giving you complete peace of mind throughout the transportation process."
        }
      ]}
      relatedServices={[
        {
          title: "Multi-Modal Logistics Solutions",
          link: "/services/multi-modal"
        },
        {
          title: "Temperature-Controlled Logistics",
          link: "/services/temperature-controlled"
        },
        {
          title: "Warehousing & Distribution",
          link: "/services/warehousing"
        }
      ]}
    />
  );
};

export default LandFreight;
