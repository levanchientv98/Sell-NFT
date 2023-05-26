import React from "react";
import styled from "styled-components";
import Card from "components/Card";

import Monkey1 from "image/Monkey1.svg";
import Monkey3 from "image/Monkey3.svg";
import Tibao from "image/Ellipse 6 (1).svg";
import Alisson from "image/Ellipse 6 (4).svg";


import { CardNFT } from "components/CardNFT";

import { PrimaryLayout } from "components/Layout";
import { Banner } from "components/Banner";
import { TopCreator } from "components/TopCreator";


const AppWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  .button-content {
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");
    font-family: "DM Sans", sans-serif;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    font-weight: 700;
    font-size: 13px;
    color: #27262e;
  }
  .card-wrapper {
    display: flex;
    width: 38%;
    gap: 20px;
    flex-wrap: wrap;
    padding-right: 20px;
    justify-content: center;
  }

  .title-container {
    display: flex;
    flex-direction: column;
  }
  .title-container h3{
    font-family: "DM Sans", sans-serif;
    font-weight: 700;
    font-size: 24px;
    color-scheme: #27262E;

  }
  .category{
    display:flex;
    flex-direction:row;
    align-items: center;
    gap: 24px;
  }

  .category p{
    font-family: "DM Sans", sans-serif;
    font-weight: 500;
    font-size: 14px;  
    color: #7A797D; 
  }

  .title-styled{
    display: flex;
    flex-direction: row;
    padding-left:32px;
    justify-content: space-between;
  }
  
  .card-container{
    display: grid;
    grid-template-columns: auto auto;
    gap: 15px;
  }


`;


const Home = () => {
  return (
    <PrimaryLayout>
      <AppWrapper>
        <Banner >
          <div className="title-container">
            <div className="title-styled"><h3>Trending Auctions</h3>
              <div className="category">
                <p>Art</p>
                <p>Music</p>
                <p>Collectibles</p>
                <p>Utility</p>
              </div></div>
            <div className="card-container">
              <CardNFT title={"Ape In Love"} avatarAuthor={Tibao} img={Monkey1} idAuthor={"@johnti60"} likes={"21.5k"} currentBid={"9.10"}></CardNFT>
              <CardNFT title={"Smilling Ape"} avatarAuthor={Alisson} img={Monkey3} idAuthor={"@m_alisson"} likes={"21.5k"} currentBid={"6.12"}></CardNFT>
              <CardNFT title={"Ape In Love"} avatarAuthor={Tibao} img={Monkey1} idAuthor={"@johnti60"} likes={"21.5k"} currentBid={"9.10"}></CardNFT>
              <CardNFT title={"Smilling Ape"} avatarAuthor={Alisson} img={Monkey3} idAuthor={"@m_alisson"} likes={"21.5k"} currentBid={"6.12"}></CardNFT>
            </div>

          </div>
        </Banner>
        <div className="card-wrapper">
          <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
          <Card title={"Spending"} amount="2.00" percent={8.1}></Card>
          <Card title={"ROI"} content="+14.02" percent={-5.1}></Card>
          <Card title={"Estimated"} amount="7.00" percent={3.2}></Card>
          <TopCreator></TopCreator>

        </div>
      </AppWrapper>
    </PrimaryLayout>
  );
};
export default Home;
