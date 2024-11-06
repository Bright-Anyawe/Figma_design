// import { useContext } from "react";
import { useRef } from "react";
// import HeroContext from "../../ContextProvider/contextProvider";

export const Header = ({ bodyRef, heroScreenTxtRef, cardText }) => {
  // const bodyRef = useRef(null);
  const businessRef = useRef(null);
  const menuRef = useRef(null)
//   const heroScreenTxtRef = useRef(null);

  // const heroScreenTxt = useRef(null);
  //   const {  businessRef, handleElementStyling } = useContext(HeroContext);

  function handleElementStyling() {
    bodyRef.current.classList.add("bodyRef");
    businessRef.current.classList.add("businessRefColor");
    heroScreenTxtRef.current.classList.add("heroScreenTxtRefColor");
    cardText.current.classList.add("cardText");

  }

  return (
    <>
      <section className="headerContentsContainer">
        <div className="headerContents">
          <div className="headerRightContent">
            <div className="Logo">
              <img
                onClick={handleElementStyling}
                src="public/Figma Img/Logo/Group 132.png"
                alt="logo"
              />
              <h2>Parap</h2>
            </div>

            <svg
              ref={menuRef}
              onClick={handleVisibility}
              className="menuSvg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>menu</title>
              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>

            <div className="groupContainer">
              <div className="personalContainer">
                <p>Personal</p>
                <img
                  src="public/Figma Img/Logo/arrow-circle-down-stylish.png"
                  alt="downArrow"
                />
                {/* <p>svg</p> */}
              </div>
              <div className="BusinessContainer">
                <p ref={businessRef}>Business</p>
                <img
                  src="public/Figma Img/Logo/arrow-circle-down.png"
                  alt="downArrow"
                />
              </div>
            </div>
          </div>
          <div className="headerLeftContent">
            <div className="buttonsContainer">
              <button className="loginBtn">Log In</button>
              <button className="signUpBtn">Sign In</button>
            </div>
            <div className="Language">
              <img src="public/Figma Img/Logo/image 63.png" alt="countryLogo" />
              <div className="langTextContainer">
                <p className="langText">English</p>
                <img
                  src="public/Figma Img/Logo/arrow-circle-down.png"
                  alt="down Arrow"
                />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};
