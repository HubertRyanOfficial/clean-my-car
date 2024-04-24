import { Route, Routes } from "react-router-dom";

import Login from "./Auth/Login";

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default Root;
