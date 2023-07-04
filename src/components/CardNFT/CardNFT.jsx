import Ethereum from "image/Ethereum.svg";
import { styled } from "styled-components";
const CardNFTStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 364px;
  padding: 24px;
  background-color: ${({ background }) => background || "white"};
  border-radius: 20px;
  font-size: 12px;
  line-height: 16px;
  row-gap: 20px;
  .title-likes {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
  .imageNFT img {
    width: 20vw;
    height: 196px;
  }
  .avatar-id {
    display: flex;
    gap: 8px;
  }

  .avatar-id p {
    color: #747475;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    font-family: "DM Sans", sans-serif;
  }

  .currentBid-eth {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .currentBid-eth p {
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    color: #747475;
    font-family: "DM Sans", sans-serif;
  }

  .title {
    font-weight: 700;
    font-size: 24px;
    color: #27262e;
    font-family: "DM Sans", sans-serif;
  }
  .likes {
    font-weight: 400;
    font-size: 16px;
    font-family: "DM Sans", sans-serif;
    color: #747475;
  }

  .icon-ETH {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }

  .icon-ETH p::first-line {
    font-weight: 700;
    color: #27262e;
  }
`;

export const CardNFT = ({
  img,
  title,
  avatarAuthor,
  idAuthor,
  currentBid,
  likes,
}) => {
  return (
    <CardNFTStyled>
      <div className="imageNFT">
        <img src={img} alt="imageNFT" />
      </div>
      <div className="title-likes">
        <div className="title">{title}</div>
        <div className="likes">{likes} Likes</div>
      </div>
      <div className="avatar-id">
        <img src={avatarAuthor} alt="author" />
        <p>{idAuthor}</p>
      </div>
      <div className=" currentBid-eth">
        <p>CurrentBid</p>
        <div className="icon-ETH">
          <img src={Ethereum} alt="ethereum" />
          <p>{currentBid} ETH</p>
        </div>
      </div>
    </CardNFTStyled>
  );
};
