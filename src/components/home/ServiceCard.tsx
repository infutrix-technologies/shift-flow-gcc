
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
    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:-translate-y-2">
      <div className="text-brand-orange mb-4 w-12 h-12 flex items-center justify-center bg-brand-orange/10 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-brand-navy">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button asChild variant="ghost" className="p-0 hover:bg-transparent text-brand-orange hover:text-brand-orange/90">
        <Link to={link} className="flex items-center">
          Learn more <ArrowRight size={16} className="ml-1" />
        </Link>
      </Button>
    </div>
  );
};

export default ServiceCard;
