import React from "react";
import SkeletonCard from "./SkeletonCard";

type SkeletonGridProps = {
  count: number;
};

const SkeletonGrid: React.FC<SkeletonGridProps> = ({ count }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6 w-full">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default SkeletonGrid;
