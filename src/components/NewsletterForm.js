import React from "react";
import "./NewsletterForm.css";

const NewsletterForm = () => {
  return (
    <form name="newsLetter" className="news-letter">
      <input name="email" type="text" value="Email Address"></input>
      <button className="signUP">Sign up for GitHub</button>
    </form>
  );
};

export default NewsletterForm;
