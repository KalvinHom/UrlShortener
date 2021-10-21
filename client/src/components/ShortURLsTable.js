import React from "react";
import ShortURLRow from "./ShortURLRow";
import "./ShortURLsTable.scss";

function ShortURLsTable({ shortURLs }) {
  if (shortURLs.length === 0) return null;
  return (
    <div className="ShortURLsTable">
      <h2>Previous URLs </h2>
      <table>
        <thead>
          <tr>
            <th>Short URL</th>
            <th>Destination</th>
            <th className="copy-button-column" />
          </tr>
        </thead>
        <tbody>
          {shortURLs.map((shortURL) => (
            <ShortURLRow shortURL={shortURL} key={shortURL.slug} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShortURLsTable;
