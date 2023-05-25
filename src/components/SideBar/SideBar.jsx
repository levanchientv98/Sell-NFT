import styled from "styled-components";
import logoNFT from "image/LogoNFT.svg";
import marketIcon from "image/shop.svg";
import dashBoardIcon from "image/Icon.svg";
import activeIcon from "image/judge.svg";
import buyCrypto from "image/buy-crypto.svg";
import walletIcon from "image/wallet-3.svg";
import heartIcon from "image/Favourite.svg";
import clockIcon from "image/clock.svg";
import settingIcon from "image/setting.svg";
import lightModeIcon from "image/LightModeIcon.svg";
import ethIcon from "image/icon-crypto1.svg";
import plus from "image/icon+.svg";
import arrowRight from "image/arrowRight.svg";
import { NavLink } from "react-router-dom";
const StyledSideBar = styled.div`
  background-color: white;
  height: auto;
  padding: 32px;
  .logo {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 54px;
  }
  .logo-text {
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    color: #27262e;
  }
  .logo-desc {
    font-size: 10px;
    line-height: 13px;
    color: #7a797d;
  }
  .sidebar-menu {
    margin-bottom: 24px;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #27262e;
  }
`;
const StyledNavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: #7a797d;
  margin-bottom: 25px;
  a {
    text-decoration: unset;
    color: #7a797d;
  }
`;

const CardInSideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  margin-top: 33vh;
  background: linear-gradient(228.89deg, #5429ff 1.12%, #bbaaff 100%);
  border-radius: 16px;
  width: 80%;
  gap: 15px;

  p {
    font-weight: 500;
    font-size: 12px;
    color: #e0dee6;
    margin: 0;
  }

  h2 {
    font-weight: 700;
    font-size: 30px;
    color: #ffffff;
    margin: 0;
  }
`;

const TopUp = styled.button`
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  border: none;
  padding: 14px 16px;
  span {
    font-weight: 700;
    font-size: 14px;
    color: #27262e;
  }
`;

const CardItem = ({ children }) => {
  return (
    <CardInSideBar>
      <p>Your Balance</p>
      <h2>1,034.02</h2>
      <img src={ethIcon} alt="icon-eth" />
      {children}
    </CardInSideBar>
  );
};
const NavItem = ({ text, path, img }) => {
  return (
    <StyledNavItem>
      <img src={img} alt="nav-icon"></img>
      <NavLink to={path}>{text}</NavLink>
    </StyledNavItem>
  );
};
export const SideBar = () => {
  return (
    <StyledSideBar>
      <div className="logo">
        <img src={logoNFT} alt="logo"></img>
        <div>
          <div className="logo-text">MyNFT</div>
          <div className="logo-desc">NFT Marketplace</div>
        </div>
      </div>
      <div className="nav">
        <NavItem img={dashBoardIcon} text="Dashboard" path="/"></NavItem>
        <NavItem img={marketIcon} text="Market" path="/about"></NavItem>
        <NavItem img={activeIcon} text="Active Bids" path="/login"></NavItem>
        <div className="sidebar-menu">PROFILE</div>
        <NavItem img={buyCrypto} text="My Portfolio" path="/"></NavItem>
        <NavItem img={walletIcon} text="Wallet" path="/about"></NavItem>
        <NavItem img={heartIcon} text="Favourites" path="/login"></NavItem>
        <NavItem img={clockIcon} text="History" path="/"></NavItem>
        <NavItem img={settingIcon} text="Settings" path="/"></NavItem>
        <div className="sidebar-menu">Other</div>
        <NavItem img={lightModeIcon} text="Light Mode"></NavItem>
        <CardItem>
          <TopUp>
            <img src={plus} alt="icon-plus" />
            <span>Top Up Balance</span>
            <img src={arrowRight} alt="icon-arrow-right" />
          </TopUp>
        </CardItem>
      </div>
    </StyledSideBar>
  );
};
