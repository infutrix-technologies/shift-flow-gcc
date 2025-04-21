
import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  children?: ReactNode;
}

const SectionHeader = ({ 
  title, 
  subtitle, 
  description, 
  align = 'center', 
  className = '',
  children
}: SectionHeaderProps) => {
  const alignClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`max-w-3xl ${alignClass[align]} mb-12 ${className}`}>
      {subtitle && (
        <span className="inline-block text-brand-orange font-semibold mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="heading-2 mb-4 text-brand-navy">{title}</h2>
      {description && (
        <p className="text-gray-600 text-lg">
          {description}
        </p>
      )}
      {children}
    </div>
  );
};

export default SectionHeader;
