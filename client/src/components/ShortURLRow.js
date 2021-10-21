import React from "react";

function ShortURLRow({ shortURL }) {
  console.log(window.location.host);
  return (
    <tr>
      <td>{`${window.location.host}/${shortURL.slug}`}</td>
      <td>{shortURL.url}</td>
    </tr>
  );
}

export default ShortURLRow;
