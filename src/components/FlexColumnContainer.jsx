import React from "react";

const FlexColumnContainer = ({ children }) => {
  return (
    <div className="container mx-auto md flex flex-col items-center">
      {children}
    </div>
  );
};

export default FlexColumnContainer;
