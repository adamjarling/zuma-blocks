import React from "react";

interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ className, children }) => {
  return <section className={`mb-10 ${className || ""}`}>{children}</section>;
};

export default Section;
