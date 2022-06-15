import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Page from "../componants/Page";
import { getdatahome } from "../Redux/actions";

const Homepage = () => {
  const Data = useSelector((state) => state.home);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getdatahome());
  }, []);

  //   console.log(Data);
  return (
    <div>
      <Page data={Data} />
    </div>
  );
};

export default Homepage;
