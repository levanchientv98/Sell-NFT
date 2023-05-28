import Header from "components/Header";
import styled from "styled-components";
import { SideBar } from "components/SideBar";

const LayoutStyled = styled.div`
  background-color: #caeae6;
  min-height: 105vh;
  .right {
    float: right;
    width: 80%;
  }
`;
const ContentStyled = styled.div`
  margin-top: 130px;
  height: auto;
`;
const SideBarStyled = styled.div`
  float: left;
  position: fixed;
  width: 20%;
  height: 100vh;
`;

const PrimaryLayout = ({ children }) => {
  return (
    <LayoutStyled>
      <SideBarStyled>
        <SideBar></SideBar>
      </SideBarStyled>
      <div className="right">
        <Header />
        <ContentStyled>{children}</ContentStyled>
      </div>
    </LayoutStyled>
  );
};

export default PrimaryLayout;
