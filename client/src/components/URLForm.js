import React, { useState, useEffect } from 'react';
import "./URLForm.scss";

function URLForm() {


  const [urlInput, setUrlInput] = useState(
    {
      touched: false,
      url: '',
      error: false
    }
  )

  useEffect(() => {

    function validate(url) {
      console.log("validating")
      let error = false;
  
      try {
        const validUrl = new URL(url)
        error = validUrl.protocol !== "http:" && validUrl.protocol !== "https:"
      } catch (_) {
        error = true;
      }
      
      setUrlInput({ ...urlInput, error: error });
  
    }
    
    console.log("changed");
    if(urlInput.touched) 
      validate(urlInput.url);
  }, [urlInput.url, urlInput.touched])

  

  function handleBlur() {
    setUrlInput({ ...urlInput, touched: true })    
  }

  function handleChange(e) {
    const url = e.target.value
    setUrlInput({ ...urlInput, url: url })
    console.log(urlInput.touched)
    // if (urlInput.touched)
    //   validate(url)
  }

  const { error } = urlInput;



  return (
    <div className="URLForm">
      <div className="url-input">
        <input
        placeholder="http://kalvinhom.com"
        type="text"
        value={urlInput.url}
        onBlur={handleBlur}
        onChange={handleChange}
      />
        <div>{error && "Invalid URL"}</div>
      </div>
      <button>Generate Short Url</button>
    </div>
  )

}

export default URLForm;