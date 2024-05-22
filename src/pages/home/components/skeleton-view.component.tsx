export function SkeletonView() {
  return (
    <div data-testid="skeleton-loader" className="grid lg:grid-cols-2 gap-5">
      {Array.from({ length: 14 }).map((_, index) => (
        <div
          key={index}
          className="block p-5 w-full bg-primary-50 border border-gray-200 rounded-lg shadow animate-pulse"
        >
          <div className="w-20 h-5 bg-slate-200" />
          <h3 className="mb-2 text-lg font-bold tracking-tight">
            <div className="mt-2 w-50 h-5 bg-slate-200" />
          </h3>
        </div>
      ))}
    </div>
  );
}
