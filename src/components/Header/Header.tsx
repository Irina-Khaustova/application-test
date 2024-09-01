import { useDispatch, useSelector } from "react-redux";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../app/store/store";
import { setIsAutorization } from "../../app/store/autorizationSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userName } = useSelector((state: RootState) => state.autorization);

  const handleClick = (e: React.FormEvent) => {
    if (userName) {
      dispatch(setIsAutorization(""));
    } else {
      navigate("/autorization");
    }
  };

  console.log();

  return (
    <div className={styles.header}>
      <div className={styles.item}>Application</div>
      <div className={styles.item}>
        <button onClick={handleClick} className={styles.button}>
          {!userName ? "Sign in" : "Log out"}
        </button>
      </div>
    </div>
  );
}

export default Header;
