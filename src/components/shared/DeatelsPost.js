import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import fetchData from "../services/fetchData";
//Mui
import { Button } from "@mui/material";
//Styles
import Styles from "./DeatelsPost.module.css";
const DeatelsPost = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [data, setData] = useState([]);
  //fetch Data
  useEffect(() => {
    const getPhoto = async () => {
      setData(await fetchData(id, "photo"));
    };
    getPhoto();
  }, []);
  console.log(data);
  return (
    <div className={Styles.container}>
      <img src={data.url} />
      <strong>{data.title}</strong>
      <Button variant="contained" onClick={() => navigate("/")}>
        Back to Home
      </Button>
    </div>
  );
};

export default DeatelsPost;
