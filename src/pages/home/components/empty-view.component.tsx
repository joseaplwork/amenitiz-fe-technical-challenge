export function EmptyView() {
  return (
    <div className="h-full flex justify-center items-center flex-col">
      <img width={200} src="/empty-box.png" alt="empty" />
      <b className="mt-5 text-slate-600">No results</b>
    </div>
  );
}
