import React, { Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ChekedLocalStorage from "./components/helper/ChekedLocalStorage";
import MainPage from "./components/MainPage";
import DeatelsPost from "./components/shared/DeatelsPost";

const App = () => {
  return (
    <Fragment>
      <ChekedLocalStorage />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<DeatelsPost />} />
      </Routes>
    </Fragment>
  );
};

export default App;
