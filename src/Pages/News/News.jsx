import React from "react";
import Header from "../../Shared/Header/Header";
import { useParams } from "react-router-dom";
import RightsideNav from "../../Shared/RightsideNav/RightsideNav";
import Navber from "../../Shared/Navber/Navber";

const News = () => {
  const { id } = useParams();
  return (
    <div>
          <Header></Header>
          <Navber></Navber>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h2>Dragon News</h2>
          <p>{id}</p>
        </div>
        <RightsideNav></RightsideNav>
      </div>
    </div>
  );
};

export default News;
