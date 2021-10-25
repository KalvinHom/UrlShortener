import React from "react";
import ShortURLsTable from "./ShortURLsTable";
import CopyButton from "./CopyButton";
import "./ShortURLsResult.scss";
function ShortURLsResult({ shortURLs }) {
  if (shortURLs.length === 0) return null;
  const newURL = `${window.location.host}/${shortURLs.at(0).slug}`;
  return (
    <div className="ShortURLsResult" data-cy="short-urls-result">
      <h2>Your new short URL is:</h2>
      <div data-cy="new-short-url">{newURL}</div>
      <div data-cy="new-short-url-button">
        <CopyButton url={newURL} />
      </div>
      <ShortURLsTable shortURLs={shortURLs} />
    </div>
  );
}

export default ShortURLsResult;
