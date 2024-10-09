import React from "react";

const SkeletonCard: React.FC = () => {
  return (
    <div className="shadow-inner shadow-primary rounded-xl p-4 animate-pulse">
      <div className="h-48 bg-primary rounded-xl mb-4"></div>
      <div className="h-6 bg-primary rounded-xl mb-2"></div>
      <div className="h-4 bg-primary rounded-xl "></div>
    </div>
  );
};

export default SkeletonCard;
