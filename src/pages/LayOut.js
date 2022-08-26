import React from "react";
import { Outlet } from "react-router-dom";

import Main from "../components/Main";

const LayOut = () => {
  return (
    <>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default LayOut;
