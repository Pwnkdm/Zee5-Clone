import axios from "axios";
import React, { useEffect, useState } from "react";
import Page from "../componants/Page";

const Movies = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/movies").then((r) => setData(r.data));
  }, []);
  return (
    <div>
      <Page data={Data} />
    </div>
  );
};

export default Movies;
