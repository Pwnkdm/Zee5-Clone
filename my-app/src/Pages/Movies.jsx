import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Page from "../componants/Page";
import { getdatamovie } from "../Redux/actions";

const Movies = () => {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getdatamovie());
  }, []);
  return (
    <div>
      <Page data={Data} />
    </div>
  );
};

export default Movies;
