import React, { useState, useEffect } from "react";
import ShortURLsResult from "./ShortURLsResult";
import validateUrl from "../utils/validate_url";
import { create } from "../api";
import "./URLForm.scss";

const urlError = "Invalid URL";
const unexpectedError = "Sorry we've encountered an error. Please try again.";
function URLForm() {
  const [urlInput, setUrlInput] = useState("");
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState(null);
  const [shortURLs, setShortURLs] = useState([]);

  function validate(url) {
    return validateUrl(url.trim());
  }
  useEffect(() => {
    if (!touched) return;

    const valid = validate(urlInput);
    if (valid) {
      setError(null);
    } else {
      setError(urlError);
    }
  }, [urlInput, touched]);

  function handleBlur() {
    if (!touched) setTouched(true);
  }

  function handleChange(e) {
    const url = e.target.value;
    setUrlInput(url);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const error = !validate(urlInput);
    if (error) return setError(urlError);
    create(urlInput.trim())
      .then(function (response) {
        if (response.status === 201) {
          setShortURLs([...shortURLs, response.data]);
        } else {
          setError(urlError);
        }
      })
      .catch(function (_error) {
        setError(unexpectedError);
      });
  }

  return (
    <div className="URLForm">
      <form className="url-form" onSubmit={handleSubmit}>
        <div className="url-input">
          <input
            placeholder="http://kalvinhom.com"
            type="text"
            value={urlInput}
            onBlur={handleBlur}
            onChange={handleChange}
            className={!!error ? "error" : ""}
          />
          <div className="error-message">{error}</div>
        </div>
        <button type="submit">Generate Short Url</button>
      </form>
      <ShortURLsResult shortURLs={shortURLs} />
    </div>
  );
}

export default URLForm;
