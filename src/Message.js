import React from "react";

const Message = ({ message }) => {

  if (message.isBot) {
    return (

      <div className="botCard">
        <p
          style={{
            paddingLeft: "16px",
            paddingRight: "10px",
            fontFamily: "Montserrat",
            fontWeight: 700
          }}
        >
          {message.text}
        </p>
      </div>
    )

  } else {
    return (

      <div className="userCard">
        <p
          style={{
            paddingLeft: "16px",
            paddingRight: "10px",
            fontFamily: "Montserrat",
            fontWeight: 700
          }}
        >
          {message.text}
        </p>
      </div>
    )
  }
}


export default Message;
