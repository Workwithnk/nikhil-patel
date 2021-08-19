import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import wave_quote from "../Images/wave_quote.png";
import "../CSS/Quote.css";

function Quote() {
  return (
    <>
      <div className="Quote" id="quote">
        <ImQuotesLeft className="Quote_Icon" />
        <p>Developing is my dreams</p>
        <ImQuotesRight className="Quote_Icon" />
      </div>
      <div className="wave_Quote">
        <img src={wave_quote} alt="wave" />
      </div>
    </>
  );
}

export default Quote;
