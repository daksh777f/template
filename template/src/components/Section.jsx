import React from "react";

const Section = ({ title, children, className = "", id, ...props }) => {
  return (
    <section 
      id={id}
      className={`py-20 px-6 md:px-20 ${className}`}
      {...props}
    >
      {title && <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
