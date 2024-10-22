import styled from "styled-components";
import profile from "../assets/images/profile.jpg";

const BubbleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  height: 70px;
  border-radius: 20px;
  background-color: rgb(255, 255, 255, 0.5);
  margin: 10px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  img {
    width: 50px;
    border-radius: 50px;
    margin: 0 10px;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
  }
`;

const TextWrapper = styled.div``;

const Name = styled.div`
  font-weight: 600;
`;

const Content = styled.div`
  font-size: 14px;
`;

const NotiBubble = () => {
  return (
    <BubbleWrapper>
      <img src={profile} alt="프로필" />
      <TextWrapper>
        <Name>짱행복</Name>
        <Content>새 메세지가 도착했습니다.</Content>
      </TextWrapper>
    </BubbleWrapper>
  );
};

export default NotiBubble;
