import React, { useContext } from "react";
import FlashContext from "../contexts/FlashContext";
function CopyButton({ url }) {
  const { setFlashMessage } = useContext(FlashContext);
  function handleCopy() {
    const type = "text/plain";
    const blob = new Blob([url], { type });
    const data = [new window.ClipboardItem({ [type]: blob })];
    navigator.clipboard.write(data);
    // navigator.clipboard.write(data)    document.body.removeChild(dummy);
    setFlashMessage("Copied Link to Clipboard");
  }

  return (
    <button onClick={handleCopy} data-cy="url-copy-button">
      Copy Link
    </button>
  );
}

export default CopyButton;
