
const VehicleShimmerCard = () => {
  return (
    <div className="animate-pulse bg-gray-800 rounded-lg p-4 w-full sm:w-[300px] h-[320px] flex flex-col gap-4">
      <div className="bg-gray-700 rounded-md h-40 w-full"></div>

      <div className="bg-gray-700 h-4 w-3/4 rounded"></div>

      <div className="bg-gray-700 h-4 w-2/3 rounded"></div>

      <div className="bg-gray-700 h-4 w-1/2 rounded"></div>

      <div className="bg-gray-700 h-10 w-full rounded-md mt-auto"></div>
    </div>
  );
};

export default VehicleShimmerCard;