import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  children?: ReactNode;
}

const SectionHeader = ({
  title,
  subtitle,
  description,
  align = "center",
  className = "",
  children,
}: SectionHeaderProps) => {
  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={`${alignClass[align]} mb-12 ${className}`}>
      {subtitle && (
        <span className="inline-block text-brand-orange font-semibold mb-2">
          {subtitle}
        </span>
      )}
      <h2 className={`heading-1 mb-4 text-[#1A1F2C] ${className}`}>{title}</h2>
      {description && <p className={`text-[#1A1F2C] ${className} text-lg`}>{description}</p>}
      {children}
    </div>
  );
};

export default SectionHeader;
