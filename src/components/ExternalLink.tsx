import React from "react";

interface ExternalLinkProps {
  classNames?: string;
  href: string;
  children: React.ReactNode;
}

export default function ExternalLink({
  href,
  children,
  classNames,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${classNames}`}
    >
      {children}
    </a>
  );
}
