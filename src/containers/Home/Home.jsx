import React from "react";
import styled from "styled-components";
import Card from "components/Card";
import Banner1 from "image/Banner1.svg";
import { PrimaryLayout } from "components/Layout";
import { Button } from "components/Button";
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
    justify-content: flex-end;
  }
  .slide-show {
    display: flex;
    padding-left: 32px;
    width: 58%;
  }
  .banner-style {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 12px;
    width: 716px;
    height: 355px;
    background-size: cover;
    background: linear-gradient(
        75.33deg,
        rgba(0, 0, 0, 0.2) -10.41%,
        rgba(0, 0, 0, 0) 62.93%
      ),
      url(${Banner1});
  }

  .banner-style h1 {
    padding: 0 50px;
    text-align: left;
    font-weight: 700;
    font-size: 54px;
    color: #fff;
  }

  .buttonInBanner {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 20px;
    padding: 0 50px;
  }

  .buttonStyle {
    margin: 0;
    width: 128px;
    height: 46px;
    border-radius: 40px;
    border: 1px solid #ffffff;
  }
`;

const Home = () => {
  return (
    <PrimaryLayout>
      <AppWrapper>
        <div className="slide-show">
          <div className="banner-style">
            <h1>Discover, Create and Sell Your Own NFT.</h1>
            <div className="buttonInBanner">
              <Button borderRadius={"40px"} bgColor={"none"}>
                Discover
              </Button>
              <button className="buttonStyle">Create</button>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
          <Card title={"Spending"} amount="2.00" percent={8.1}></Card>
          <Card title={"ROI"} content="+14.02" percent={-5.1}></Card>
          <Card title={"Estimated"} amount="7.00" percent={3.2}></Card>
        </div>
      </AppWrapper>
    </PrimaryLayout>
  );
};
export default Home;
