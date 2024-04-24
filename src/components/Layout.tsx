import React from "react";

import Logo from "@/assets/logo.png";
import { useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const navigate = useNavigate();
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
          <p
            className="cursor-pointer hover:underline"
            onClick={() => navigate("/support")}
          >
            Need help?
          </p>
        </header>
        {children}
      </div>
    </div>
  );
}
