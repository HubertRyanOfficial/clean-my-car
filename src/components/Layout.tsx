import React from "react";

import Logo from "@/assets/logo.png";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="w-full min-h-[100vh] bg-white flex flex-row">
      <aside className="w-[450px] bg-magnata flex flex-col items-center justify-center">
        <img src={Logo} alt="Clean My Card Logo" className="w-[200px]" />
        <p className="text-lg text-black">
          India's first waterless
          <br />
          car cleaning company
        </p>
      </aside>
      <div className="w-full flex flex-col">
        <header className="w-full py-4 px-8 flex justify-end">
          <a href="">Need help?</a>
        </header>
        {children}
      </div>
    </div>
  );
}
