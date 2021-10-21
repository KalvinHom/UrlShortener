import React from "react";
import CopyButton from "./CopyButton";
import "./ShortURLRow.scss";

function ShortURLRow({ shortURL }) {
  const fullURL = `${window.location.host}/${shortURL.slug}`;
  return (
    <tr>
      <td>{fullURL}</td>
      <td>{shortURL.url}</td>
      <td>
        <CopyButton url={fullURL} />
      </td>
    </tr>
  );
}

export default ShortURLRow;
