import React from "react";
import CookieConsent from "react-cookie-consent";
import "./cookiePopup.scss";

const CookiePopup = () => {
  return (
    <CookieConsent
      className="cookie-notice"
      location="bottom"
      buttonText="I understand"
      cookieName="pizza-pie"
      style={{ background: "#B22F0C" }}
      buttonStyle={{ color: "#4e503b", fontSize: "16px" }}
    >
      <div className="cookie-wrap">
        <p>
          This website uses cookies to enhance the user experience.{" "}
          <a href="/privacy-policy">Read our Privacy Policy here.</a>
        </p>
      </div>
    </CookieConsent>
  );
};

export default CookiePopup;
