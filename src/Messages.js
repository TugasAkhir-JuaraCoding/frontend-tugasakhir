import React from "react";
import "./style.css";
import Message from "./Message";

const objekBaru = {
  nama: 'aris',
  umur: 21
}

const Messages = ({ messages }) => {
  console.log("Messages: " + messages);
  console.log("objek baru : " + objekBaru);
  return (
    <div className="messagesSection">
      {messages.map(message => {
        console.log("jancug " + message)
        return (
          <div className="messagesContainer">
            <div className="messageCard">
              <Message message={message} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Messages;