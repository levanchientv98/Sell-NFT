import styled from "styled-components";
import { Button } from "components/Button";
import ethIcon from "assets/eth-blue.svg";
const StyledCard = styled.div`
  padding: 24px;
  background-color: white;
  border-radius: 20px;
  font-size: 12px;
  line-height: 16px;
  width: 164px;
  height: 16vh;

  /* Text/color2 */

  color: #747475;
  .title {
    color: #747475;
    text-align: left;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 12px;
  }
  .amount {
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;

    /* Text/color1 */

    color: #27262e;
  }
  .amount-wrapper {
    margin-bottom: 12px;
  }
  .eth {
    margin-right: 4px;
  }
  .content {
    font-size: 24px;
    font-weight: 700;
    line-height: 31px;
    color: #27262e;
  }
`;
export const Card = ({ title, amount, content, percent }) => {
  return (
    <StyledCard>
      <div className="title">{title}</div>
      {amount ? (
        <div className="amount-wrapper">
          <img className="eth" src={ethIcon} alt="eth-icon"></img>
          <span className="amount">{amount}</span> ETH
        </div>
      ) : (
        <div className="amount-wrapper">
          <span className="content">{content}</span> %
        </div>
      )}
      <Button
        width="100%"
        height="46px"
        borderRadius="12px"
        percent={percent}
        borderColor="#E9E9E9"
      >
        {" "}
        {Math.abs(percent)}%;
      </Button>
    </StyledCard>
  );
};
