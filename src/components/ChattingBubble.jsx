import styled from "styled-components";
import theme from "../style/theme";

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
`;

const Chat = styled.div`
  background-color: ${theme.color.chatting};
  color: white;
  padding: 10px 15px;
  max-width: 200px;
  border-radius: 5px;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
  font-size: 14px;
`;

const ChattingBubble = ({ text }) => {
  return (
    <ChatWrapper>
      <Chat>{text}</Chat>
    </ChatWrapper>
  );
};

export default ChattingBubble;
