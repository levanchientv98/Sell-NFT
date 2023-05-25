import styled from "styled-components";
import greenArrow from "assets/green-arrow.svg";
import redArrow from "assets/red-arrow.svg";
const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) =>
    props.borderColor ? `1px solid ${props.borderColor}` : "none"};
  border-radius: ${(props) => props.borderRadius};
  background: ${(props) => props.bgColor};
  font-weight: ${(props) => props.fontWeight};
  line-height: 21px;
  color: ${(props) => props.textColor};
  color: ${(props) => props.fontSize};
  img {
    margin-right: 8px;
  }
`;
export const Button = ({
  width,
  height,
  textColor,
  bgColor,
  borderColor,
  percent,
  fontSize,
  borderRadius,
  children,
  fontWeight,
  ...rest
}) => {
  return (
    <StyledButton
      percent={percent}
      width={width}
      height={height}
      textColor={textColor}
      bgColor={bgColor}
      borderColor={borderColor}
      fontSize={fontSize}
      borderRadius={borderRadius}
      fontWeight={fontWeight}
      {...rest}
    >
      {percent && (
        <img src={percent < 0 ? redArrow : greenArrow} alt="arr"></img>
      )}
      {children}
    </StyledButton>
  );
};
Button.defaultProps = {
  bgColor: "#FFFFFF",
  textColor: "#5429FF",
  width: "128px",
  height: "46px",
  borderRadius: "12px",
  fontSize: "16px",
};
