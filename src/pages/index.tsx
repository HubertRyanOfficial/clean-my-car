import { Route, Routes } from "react-router-dom";

import Login from "./Auth/Login";
import User from "./User";
import ForgotPassword from "./Auth/ForgotPassword";
import { Toaster } from "@/components/ui/toaster";

function Root() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/recovery" element={<ForgotPassword />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default Root;
