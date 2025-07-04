
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
   <div className="bg-white h-full p-6 rounded-lg shadow-md flex flex-col">
      <div className="text-brand-orange bg-brand-orange/10 p-2 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="text-lg font-semibold mb-2 text-brand-navy">{title}</h4>
      <p className="text-gray-600 flex-grow">{description}</p>
      <Link to={link} className="mt-4 text-brand-orange font-medium">
        Learn More →
      </Link>
    </div>
  );
};

export default ServiceCard;
