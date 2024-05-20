export function ErrorView() {
  return (
    <div className="h-full flex justify-center items-center flex-col">
      <img width={200} src="/alarm-sign.png" alt="error" />
      <b className="mt-5 text-slate-600">Something went wrong</b>
    </div>
  );
}
