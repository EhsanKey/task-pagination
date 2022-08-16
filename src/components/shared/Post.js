import React from "react";
//Styles
import Styles from "./Post.module.css";
const Post = ({ body, email, name, id }) => {
  return (
    <div className={Styles.container}>
      <div>
        <strong>{name}</strong>
        <p>{email}</p>
      </div>
      <p>{body}</p>
      <span>{id}</span>
    </div>
  );
};

export default Post;
