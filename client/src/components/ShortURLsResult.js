import React from "react";
import ShortURLsTable from "./ShortURLsTable";
import CopyButton from "./CopyButton";
import "./ShortURLsResult.scss";
function ShortURLsResult({ shortURLs }) {
  if (shortURLs.length === 0) return null;
  const newURL = `${window.location.host}/${shortURLs.at(-1).slug}`;
  return (
    <div className="ShortURLsResult">
      <h2>Your new short URL is:</h2>
      <div>{newURL}</div>
      <CopyButton url={newURL} />
      <ShortURLsTable shortURLs={shortURLs} />
    </div>
  );
}

export default ShortURLsResult;
