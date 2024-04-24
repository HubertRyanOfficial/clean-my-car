import { Route, Routes } from "react-router-dom";

import { Toaster } from "@/components/ui/toaster";

import Login from "./Auth/Login";
import User from "./User";
import ForgotPassword from "./Auth/ForgotPassword";
import Support from "./Auth/Support";

function Root() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/recovery" element={<ForgotPassword />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default Root;
