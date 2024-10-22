/* eslint-disable camelcase */
import styled from "styled-components";

import ic_prev from "../assets/images/ic_prev.svg";

const StyledHeader = styled.div`
  width: 370px;
  display: flex;
  align-items: center;
  padding-top: 20px;

  img {
    height: 15px;
    padding: 0px 8px;
    margin-right: 12px;
  }
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const Header = () => {
  return (
    <StyledHeader>
      <img className="prev" src={ic_prev} alt="prev" />
      <Text>짱행복</Text>
    </StyledHeader>
  );
};

export default Header;
