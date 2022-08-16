import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//services
import fetchData from "./services/fetchData";
//func
import topScroll from "../functions/topScroll";
import { getLocalStorage, setLocalStorage } from "../functions/localStorage";
//Components
import Post from "./shared/Post";
//mui
import { Pagination, CircularProgress } from "@mui/material";
//Styles
import Styles from "./MainPage.module.css";
const MainPage = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    //fetch Data
    const getUsers = async () => {
      setData(await fetchData(getLocalStorage("page")));
    };

    getUsers();
    topScroll();
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value);
    setLocalStorage("page", value);
  };

  if (!data.length) {
    return (
      <div className={Styles.loading}>
        <CircularProgress color="secondary" />
      </div>
    );
  }

  return (
    <main>
      <section className={Styles.posts}>
        {data.map((item) => (
          <div className={Styles.post} onClick={() => navigate(`/${item.id}`)}>
            <Post key={item.id} {...item} />
          </div>
        ))}
      </section>
      <footer>
        <Pagination count={10} page={page} onChange={handleChange} />
      </footer>
    </main>
  );
};

export default MainPage;
