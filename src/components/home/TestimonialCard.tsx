
import { ReactNode } from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar?: string;
  rating?: number;
}

const TestimonialCard = ({ quote, name, title, company, avatar, rating = 5 }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
      {/* Stars */}
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>
      
      {/* Quote */}
      <p className="text-gray-600 italic mb-4">"{quote}"</p>
      
      {/* Author */}
      <div className="flex items-center">
        {avatar ? (
          <img 
            src={avatar} 
            alt={name}
            className="w-10 h-10 rounded-full mr-3 object-cover" 
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center mr-3">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-medium text-brand-navy">{name}</h4>
          <p className="text-sm text-gray-500">{title}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
