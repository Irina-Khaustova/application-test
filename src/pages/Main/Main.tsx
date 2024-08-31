import React, { useEffect, useState } from "react";
import { useGetPostsQuery } from "../../api/MyApi";
import Header from "../../components/Header/Header";
import styles from "./Main.module.css";

function Main() {
  interface PostsTypes {
    userId?: Number;
    id?: Number;
    title: string;
    body: string;
  }

  const { data: posts, error, isLoading } = useGetPostsQuery("");

  const [postsDraw, setPostsDraw] = useState<[] | null>(null);

  useEffect(() => {
    setPostsDraw(posts);
  }, [posts]);

  return (
    <div className={styles.main}>
      <Header />
      <div className="main__header">
        <h2>Application</h2>
        <div className="main__header__text"></div>
      </div>
      <div className={styles.postsContainer}>
        {error ? <div>error</div> : null}
        {!isLoading
          ? postsDraw && postsDraw !== null
            ? postsDraw.map((elem: PostsTypes) => (
                <div className={styles.item}>{elem.title}</div>
              ))
            : null
          : null}
      </div>
    </div>
  );
}

export default Main;
