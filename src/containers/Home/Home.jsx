import React from "react";
import styled from "styled-components";
import Card from "components/Card";
import { PrimaryLayout } from "components/Layout";
import { Banner } from "components/Banner";
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
  .container2 {
    display: flex;
    width: 100%;
  }

  .title-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 55%;
  }
`;

const Home = () => {
  return (
    <PrimaryLayout>
      <AppWrapper>
        <Banner></Banner>
        <div className="card-wrapper">
          <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
          <Card title={"Spending"} amount="2.00" percent={8.1}></Card>
          <Card title={"ROI"} content="+14.02" percent={-5.1}></Card>
          <Card title={"Estimated"} amount="7.00" percent={3.2}></Card>
        </div>
      </AppWrapper>
      <div className="container2">
        <div className="title-container">
          <h3>Trending Auctions</h3>
          <div className="category">
            <p>Art</p>
            <p>Music</p>
            <p>Collectibles</p>
            <p>Utility</p>
          </div>
        </div>
      </div>
    </PrimaryLayout>
  );
};
export default Home;
