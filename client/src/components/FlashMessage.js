import React, { useContext } from "react";
import FlashContext from "../contexts/FlashContext";
import "./FlashMessage.scss";

function FlashMessage(message) {
  const { flashMessage } = useContext(FlashContext);

  if (!flashMessage) return null;
  return (
    <div className="FlashMessage">
      <div className="message">{flashMessage}</div>
    </div>
  );
}

export default FlashMessage;
