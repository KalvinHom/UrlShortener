import React from "react";
import ShortURLRow from "./ShortURLRow";

function ShortURLsTable({ shortURLs }) {
  if (shortURLs.length === 0) return null;
  return (
    <div className="ShortURLsTable">
      <table>
        <thead>
          <tr>
            <th>Short URL</th>
            <th>Destination</th>
          </tr>
        </thead>
        <tbody>
          {shortURLs.map((shortURL) => (
            <ShortURLRow shortURL={shortURL} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShortURLsTable;
