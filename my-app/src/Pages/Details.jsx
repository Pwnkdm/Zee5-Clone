import { Select } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterdata, getmovies } from "../Redux/actions";
import styles from "./details.module.css";

const Details = () => {
  const Data = useSelector((state) => state.home);

  const dispatch = useDispatch();

  const onchange = (e) => {
    dispatch(filterdata(e.target.value));
  };

  useEffect(() => {
    dispatch(getmovies());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.flex}>
          <h1>Movies on ZEE5</h1>
          <Select
            name="type"
            onChange={onchange}
            w={40}
            variant="outline"
            color={"teal"}
            placeholder="Choose Filter"
          >
            <option value="drama">Drama</option>
            <option value="romance">Romance</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="horror">Horror</option>
          </Select>
        </div>

        <div>
          <div className={styles.grid}>
            {Data.map((el, i) => (
              <div key={i} className={styles.innerbox}>
                <img src={el.src} alt="poster" /> <br />
                <p>Lorem ipsum dolor sit amet.</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
