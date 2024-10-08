import React, { useEffect, useState } from "react";
import styles from "./Autorization.module.css";
import { useNavigate } from "react-router-dom";
import { useLazyGetAutorizationQuery } from "../../api/MyApi";
import { setIsAutorization } from "../../app/store/autorizationSlice";
import { useDispatch } from "react-redux";

function Autorization() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");
  const [noValidate, setNoValidate] = useState<boolean>(false);
  const [ trigger, {data, error} ] = useLazyGetAutorizationQuery();


  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (e.target.value !== "") {
      setNoValidate(false);
    }
  };

  const handlesubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === "") {
      setNoValidate(true);
    } else {
      trigger(value);
    }
  };

  useEffect(() => {
    if (data) {
      dispatch(setIsAutorization("userName"));
      navigate("/");
    }
    if (error) {
      alert("такого пользователя не существует");
    }
  }, [data, error, dispatch, navigate]);

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <p className={styles.title}>Sign up</p>
        <div className={styles.userNameContainer}>
          <label htmlFor="userName">UserName</label>
          <input
            type="text"
            name="userName"
            className={styles.input}
            onChange={handleChangeValue}
            value={value}
            placeholder="Enter your userName..."
          />
        </div>
        <button className={styles.button} onClick={handlesubmit}>
          Send Button
        </button>
        {noValidate && (
          <span className={styles.warning}>Enter your userName!</span>
        )}
      </form>
    </div>
  );
}

export default Autorization;
