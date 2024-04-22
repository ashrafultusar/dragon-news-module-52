import React from "react";
import Header from "../../Shared/Header/Header";
import Navber from "../../Shared/Navber/Navber";
import LeftsideNav from "../../Shared/LeftsideNav/LaftsideNav";
import RightsideNav from "../../Shared/RightsideNav/RightsideNav";
import Brekingnews from "./Brekingnews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard/NewsCard";

const Home = () => {
  const news = useLoaderData();
  console.log(news);

  return (
    <div>
      <Header></Header>
      <Brekingnews></Brekingnews>
      <Navber></Navber>

      <h2 className="text-2xl font-poppins font-bold">This is home</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div >
          <LeftsideNav></LeftsideNav>
        </div>

        <div className="md:col-span-2 ">
          <h1>Dragon News Home</h1>
          {
            news.map(singleNews=> <NewsCard key={singleNews.id} news={singleNews}></NewsCard>)
          }
        </div>
        <div className="">
          <RightsideNav></RightsideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
