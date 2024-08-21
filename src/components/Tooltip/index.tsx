import React, { useState } from "react";

interface PropTypes {
  text: String;
  children: React.ReactNode;
}

const Tooltip: React.FC<PropTypes> = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <div
      className="relative transition-all duration-500 ease-in-out"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {isVisible && (
        <figure className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-sm font-medium py-1 px-2 rounded-md">
          {text}
        </figure>
      )}
      {children}
    </div>
  );
};

export default Tooltip;
