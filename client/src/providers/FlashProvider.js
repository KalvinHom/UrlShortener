import React, { useState } from "react";
import FlashContext from "../contexts/FlashContext";
function FlashProvider({ children }) {
  const [flashMessage, setMessage] = useState(null);
  const [timer, setTimer] = useState(null);
  function setFlashMessage(message) {
    setMessage(message);
    clearTimeout(timer);
    setTimer(setTimeout(() => setMessage(null), 3000));
  }
  return (
    <FlashContext.Provider value={{ flashMessage, setFlashMessage }}>
      {children}
    </FlashContext.Provider>
  );
}
export default FlashProvider;
