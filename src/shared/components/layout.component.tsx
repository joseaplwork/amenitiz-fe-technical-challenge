import { ReactNode } from 'react';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="p-5 bg-primary-500 text-white font-bold text-center text-2xl shadow-xl sticky top-0 z-10">
        Chess master wiki
      </header>
      <main className="mx-auto pt-5 flex-1 container px-5 lg:px-60">
        {children}
      </main>
    </>
  );
}
