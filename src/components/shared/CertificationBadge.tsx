
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CertificationBadgeProps {
  icon?: ReactNode;
  name: string;
  className?: string;
  onClick?: () => void;
}

const CertificationBadge = ({ icon, name, className, onClick }: CertificationBadgeProps) => {
  return (
    <div 
      className={cn(
        "flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm",
        onClick && "cursor-pointer hover:shadow-md transition-shadow",
        className
      )}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span className="font-medium text-sm">{name}</span>
    </div>
  );
};

export default CertificationBadge;
