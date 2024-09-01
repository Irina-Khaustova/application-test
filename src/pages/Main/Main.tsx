import React from "react";
import { useGetPostsQuery } from "../../api/MyApi";
import Header from "../../components/Header/Header";
import styles from "./Main.module.css";

function Main() {
  interface PostsTypes {
    userId?: number;
    id?: number;
    title: string;
    body: string;
  }

  const { data: posts, error, isLoading } = useGetPostsQuery("");

  return (
    <div className={styles.main}>
      <Header />
      <div className="main__header">
        <h2>Application</h2>
        <div className="main__header__text"></div>
      </div>
      <div className={styles.postsContainer}>
        {error && <div>error</div>}
        {isLoading && <div>Loading...</div>}
            {posts && posts.map((elem: PostsTypes) => (
                <div className={styles.item} key={elem.id}>{elem.title}</div>))}
      </div>
    </div>
  );
}

export default Main;
