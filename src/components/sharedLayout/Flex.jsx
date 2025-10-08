import React from "react";

const Flex = ({ className, children }) => {
  return (
    <>
      <div className={`flex flex-col md:flex-row gap-6 ${className}`}>
        {children}
      </div>
    </>
  );
};

export default Flex;
