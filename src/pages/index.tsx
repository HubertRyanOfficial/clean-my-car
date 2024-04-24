import { Route, Routes } from "react-router-dom";

import Login from "./Auth/Login";
import User from "./User";

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
}

export default Root;
