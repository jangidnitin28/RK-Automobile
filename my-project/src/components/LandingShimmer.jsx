
const VehicleShimmer = () => {
  return (
    <div className="animate-pulse bg-gray-800 rounded-md p-4 w-full md:w-[300px] h-[250px] space-y-4">
      <div className="bg-gray-700 h-32 w-full rounded"></div>
      <div className="bg-gray-700 h-4 w-3/4 rounded"></div>
      <div className="bg-gray-700 h-4 w-1/2 rounded"></div>
      <div className="bg-gray-700 h-4 w-full rounded"></div>
    </div>
  );
};
export default VehicleShimmer;