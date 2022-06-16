import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Page from "../componants/Page";
import { getdatatv } from "../Redux/actions";

const Tvshows = () => {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.tv);

  useEffect(() => {
    dispatch(getdatatv());
  }, []);

  return (
    <div>
      {}
      <Page data={Data} />
    </div>
  );
};

export default Tvshows;
