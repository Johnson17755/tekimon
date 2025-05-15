"use client";

const ShowMore = () => {
  return (
    <div className="flex  items-center justify-between py-12 px-4 sm:px-6 lg:px-22 max-w-7xl mx-auto bg-gray-50">
      <button className="mx-auto bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
        Show more car
      </button>
      <span className="font-medium text-[14px] leading-[150%] tracking-[-0.02em] text-[rgba(144,163,191,1)]">
        T20 Car
      </span>
    </div>
  );
};

export default ShowMore;
