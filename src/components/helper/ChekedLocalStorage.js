import React, { useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../../functions/localStorage";
const ChekedLocalStorage = () => {
  useEffect(() => {
    //Cheked number page
    if (!getLocalStorage("page")) setLocalStorage("page", 1);
  }, []);
  return;
};

export default ChekedLocalStorage;
