//Imports
import React from 'react';
import axios from 'axios';

//Code
const MyReactComponent = (props) => {
  const serverURL = "/api/email";
  const myContent = {
    toEmailAddress: "akhavan.khashayar@gmail.com",
    htmlContent: "<p>This is a test message</p>",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(serverURL, { data: myContent });
  };

  return(
  <div>
    <form onSubmit={handleSubmit}>
      <button type="submit">Send Sample Data</button>
    </form>
  </div>
  );
};

export default MyReactComponent;
