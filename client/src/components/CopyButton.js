import React, { useContext } from "react";
import FlashContext from "../contexts/FlashContext";
function CopyButton({ url }) {
  const { setFlashMessage } = useContext(FlashContext);
  function handleCopy() {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = url;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    setFlashMessage("Copied Link to Clipboard");
  }

  return <button onClick={handleCopy}>Copy Link</button>;
}

export default CopyButton;
