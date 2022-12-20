import { Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterdata, getmovies } from "../Redux/actions";
import styles from "./details.module.css";

let movies = [
  {
    category: "romance",
    src: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-6-4z5145215/portrait/1920x770a9add3f2aa4745838288b4147deb1b0f.jpg",
  },
  {
    category: "drama",
    src: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-6-1298/portrait/1920x770d9ead07e5b304a989d85cf8c6e0113fb.jpg",
  },
  {
    category: "action",
    src: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-6-4z587408/portrait/1920x770195db875fe204fa4afe115764b5dc00ba004028948aa4211b107faed649301d7.jpg",
  },
  {
    category: "comedy",
    src: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-6-4z596111/portrait/1920x7709fcbdd4c78184b51aadd7e2e34396dbf.jpg",
  },
  {
    category: "horror",
    src: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-6-4z596111/portrait/1920x7709fcbdd4c78184b51aadd7e2e34396dbf.jpg",
  },
  {
    category: "action",
    src: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-6-2356/portrait/1920x770ffdfc616c75840cf95545cd67e3476d6e2fb2ce4623c4ebaa29b36ba97edf983.jpg",
  },
  {
    category: "comedy",
    src: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-6-3064/portrait/1920x770f6f1d5315e9145808275b6b69e6572f7.jpg",
  },
  {
    category: "drama",
    src: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-6-3502/portrait/1920x77096c3c9d32c6946bb933bef0e7463b7af.jpg",
  },
  {
    category: "horror",
    src: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-6-4z5130773/portrait/1920x7708e0b2f3ad3bb45b8be8b3073d20fb1aa.jpg",
  },
  {
    category: "romance",
    src: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-6-3044/portrait/063044incover98740071191a4d21bb818ea29d68541e.jpg",
  },
  {
    category: "action",
    src: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-6-2080/portrait/062080incover598958304.jpg",
  },
  {
    category: "comedy",
    src: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-6-1377/portrait/061377incover11350900031135251fe386721a4425b0a4f6b2cc00542f.jpg",
  },
  {
    category: "drama",
    src: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-101-10z5145273/portrait/rrrpfp27in192077009062022b486abfc7d83422dbaada4fef6c9ae59.jpg",
  },
  {
    category: "horror",
    src: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-0-1z5146416/portrait/1920x77030295e51fe54452d8c85e76c5ec756e8.jpg",
  },
  {
    category: "horror",
    src: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-0-1z5148935/portrait/1920x770ea4b4ed358824163a009717b04978419802bc3eabf62498685faf98fb8817e0a.jpg",
  },
  {
    category: "romance",
    src: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-0-1z5133458/portrait/1920x77060dd64aa6ef748f48bbdf4951a1f6af7b51352ca11794ad79904fded999459e7.jpg",
  },
];

const Details = () => {
  // const Data = useSelector((state) => state);

  const dispatch = useDispatch();
  const [filter, setfilter] = useState(movies);

  const onchange = (e) => {
    // dispatch(filterdata(e.target.value));
    setfilter(movies.filter((el) => el.category === e.target.value));
    // console.log(movies.filter((el) => el.category === e.target.value));
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
            {filter &&
              filter.map((el, i) => (
                <div key={i} className={styles.innerbox}>
                  <img src={el.src} alt="poster" /> <br />
                  <p>Lorem ipsum dolor sit amet.</p>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
