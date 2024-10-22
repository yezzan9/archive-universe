import styled from "styled-components";
import ChattingBubble from "./ChattingBubble";

import profile from "../assets/images/profile.jpg";
import mockChat from "../mockData/mockChat";

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0px;
`;

const Date = styled.div`
  display: flex;
  justify-content: center;
  width: 50px;
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  border-radius: 40px;
  font-size: 12px;
  font-weight: 600;
`;

const MinuteChatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 10px;

  img {
    width: 30px;
    height: 30px;
    border-radius: 30px;
  }
`;

const MinuteChat = styled.div`
  padding-left: 8px;
`;

const Name = styled.div`
  padding: 0px 0px 5px 0px;
  font-size: 13px;
  font-weight: 600;
`;

const Time = styled.div`
  font-size: 12px;
  padding: 0px 0px 10px 5px;
  align-self: flex-end;
`;

const ChatList = () => {
  return (
    <>
      <DateWrapper>
        <Date>22.12.13</Date>
      </DateWrapper>

      {mockChat.map((chat) => (
        <MinuteChatWrapper key={chat.id}>
          <img src={profile} alt="프로필" />
          <MinuteChat>
            <Name>{chat.name}</Name>
            <ChattingBubble text={chat.message} />
            <Time>{chat.time}</Time>
          </MinuteChat>
        </MinuteChatWrapper>
      ))}
    </>
  );
};

export default ChatList;
