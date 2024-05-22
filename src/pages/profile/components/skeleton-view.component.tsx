export function SkeletonView() {
  return (
    <div className="flex flex-col animate-pulse">
      <div className="flex items-center">
        <div className="w-12 h-12 mr-5 bg-gray-200 rounded-full" />
        <div className="w-40 h-7 bg-gray-200" />
      </div>
      <div className="mt-5">
        <div className="w-40 h-5 mb-3 bg-gray-200" />
        <div className="w-48 h-5 mb-3 bg-gray-200" />
        <div className="w-40 h-5 mb-3 bg-gray-200" />
        <div className="w-44 h-5 mb-3 bg-gray-200" />
        <div className="w-52 h-5 mb-3 bg-gray-200" />
        <div className="w-40 h-5 mb-3 bg-gray-200" />
        <div className="w-40 h-5 mb-3 bg-gray-200" />
        <div className="w-52 h-5 mb-3 bg-gray-200" />
      </div>
    </div>
  );
}
