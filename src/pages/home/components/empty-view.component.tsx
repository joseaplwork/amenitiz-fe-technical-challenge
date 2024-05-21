export function EmptyView() {
  return (
    <div className="flex items-center flex-col pt-20">
      <img width={200} src="/empty-box.png" alt="empty" />
      <b className="mt-5 text-slate-600">No results</b>
    </div>
  );
}
