import React from "react";

interface SectionProps {
  classNames?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ classNames, children }) => {
  return <section className={`mb-10 ${classNames}`}>{children}</section>;
};

export default Section;
