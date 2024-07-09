import React from "react";
import Nabar from "../component/Nabar";
import { Outlet } from "react-router-dom";

function Root({ authenticate, setAuthenticate }) {
  return (
    <div>
      <Nabar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Outlet />
    </div>
  );
}

export default Root;
