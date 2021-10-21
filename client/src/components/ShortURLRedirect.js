import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../api";

const serverError = "serverError";
const notFoundError = "notFoundError";

function ShortURLRedirect() {
  const { slug } = useParams();
  const [error, setError] = useState(null);
  useEffect(() => {
    get(slug)
      .then(function (response) {
        if (response.status === 200) {
          window.location.replace(response.data.url);
        } else {
          setError(notFoundError);
        }
      })
      .catch(function (error) {
        setError(serverError);
      });
  }, [slug]);
  if (error === notFoundError) {
    return (
      <div>
        This URL does not exist. Please check that the URL entered is correct.
        To create your own short url, visit <a href={window.location}>here</a>.
      </div>
    );
  }
  if (error === serverError) {
    return (
      <div>
        Sorry we are currently running into technical difficulties. Please try
        again later.
      </div>
    );
  }
  return <div>Redirecting...</div>;
}

export default ShortURLRedirect;
