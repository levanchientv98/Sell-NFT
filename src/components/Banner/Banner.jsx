import React from "react";
import styled from "styled-components";
import BannerIcon from "image/Banner1.svg";

import { Button } from "components/Button";

const BannerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  width: 58%;

  Button:hover {
    background-color: #fff;
    color: #5429ff;
    cursor: pointer;
  }

  .banner-style {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 12px;
    width: 100%;
    height: 354px;
    background-repeat:no-repeat;
    background: linear-gradient(
        75.33deg,
        rgba(0, 0, 0, 0.2) -10.41%,
        rgba(0, 0, 0, 0) 62.93%
      ),
      url(${BannerIcon});
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
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");
    font-family: "DM Sans", sans-serif;
  }

  /* .buttonStyle {
    margin: 0;
    width: 128px;
    height: 46px;
    border-radius: 40px;
    border: 1px solid #ffffff;
  } */
`;

export const Banner = ({ children }) => {
  return (
    <BannerStyled>
      <div className="banner-style">
        <h1>Discover, Create and Sell Your Own NFT.</h1>
        <div className="buttonInBanner">
          <Button
            borderRadius={"40px"}
            bgColor={"none"}
            borderColor={"#fff"}
            textColor={"#fff"}
            fontWeight={700}
          >
            Discover
          </Button>
          <Button
            borderRadius={"40px"}
            bgColor={"none"}
            borderColor={"#fff"}
            textColor={"#fff"}
            fontWeight={700}
          >
            Create
          </Button>
        </div>
      </div>
      {children}
    </BannerStyled>
  );
};
