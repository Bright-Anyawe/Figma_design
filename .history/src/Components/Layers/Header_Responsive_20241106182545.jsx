// import { useContext } from "react";
import { useRef, useState } from "react";
import PropTypes from "prop-types";
// import HeroContext from "../../ContextProvider/contextProvider";

export const Header = ({
  bodyRef,
  heroScreenTxtRef,
  cardText,
  appPresentationTextColor,
  appPresentationHeaderText,
  cashBackHeadTitle,
  cardsColor,
  brandsTextTitleColor,
  downloadTitleColor,
}) => {
  // const bodyRef = useRef(null);
  const [isBlack, setIsBlack] = useState(false);

  const businessRef = useRef(null);
  const langTextColor = useRef(null);
  const menuRef = useRef(null);
  const logoRef = useRef(null);

  //   const heroScreenTxtRef = useRef(null);

  // const heroScreenTxt = useRef(null);
  //   const {  businessRef, handleElementStyling } = useContext(HeroContext);

  function handleElementStyling() {
    const setBackgroundColor = !isBlack;
    setIsBlack(setBackgroundColor);

    if (setBackgroundColor) {
      bodyRef.current.classList.add("bodyRef");
      logoRef.current.classList.add("logoRef");
      businessRef.current.classList.add("businessRefColor");
      langTextColor.current.classList.add("langTextColor");
      heroScreenTxtRef.current.classList.add("heroScreenTxtRefColor");
      cardText.current.classList.add("cardText");
      appPresentationHeaderText.current.classList.add(
        "appPresentationHeaderText"
      );
      appPresentationTextColor.current.classList.add(
        "appPresentationTextColor"
      );
      cashBackHeadTitle.current.classList.add("cashBackHeadTitle");
      cardsColor.current.classList.add("cardsColor");
      brandsTextTitleColor.current.classList.add("brandsTextTitleColor");
      downloadTitleColor.current.classList.add("downloadTitleColor");
    } else {
      bodyRef.current.classList.remove("bodyRef");
      logoRef.current.classList.remove("logoRef");
      businessRef.current.classList.remove("businessRefColor");
      langTextColor.current.classList.remove("langTextColor");
      heroScreenTxtRef.current.classList.remove("heroScreenTxtRefColor");
      cardText.current.classList.remove("cardText");
      appPresentationHeaderText.current.classList.remove(
        "appPresentationHeaderText"
      );
      appPresentationTextColor.current.classList.remove(
        "appPresentationTextColor"
      );
      cashBackHeadTitle.current.classList.remove("cashBackHeadTitle");
      cardsColor.current.classList.remove("cardsColor");
      brandsTextTitleColor.current.classList.remove("brandsTextTitleColor");
      downloadTitleColor.current.classList.remove("downloadTitleColor");
    }
  }

  function handleVisibility() {}

  return (
    <>
      <section
        className="headerContentsContainer"
        data-testid="header-contents"
      >
        <div className="headerContents">
          <div className="headerRightContent">
            <div className="Logo">
              <img
                onClick={handleElementStyling}
                src="public/Figma Img/Logo/Group 132.png"
                alt="logo"
              />
              <h2 ref={logoRef}>Parap</h2>
            </div>

            <div className="menuContainer">
              <svg
                className="menu"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>menu</title>
                <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
              </svg>
            </div>
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
                <p className="langText" ref={langTextColor}>
                  English
                </p>
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

Header.propTypes = {
  bodyRef: PropTypes.object,
  heroScreenTxtRef: PropTypes.object,
  cardText: PropTypes.object,
  appPresentationTextColor: PropTypes.object,
  appPresentationHeaderText: PropTypes.object,
  cashBackHeadTitle: PropTypes.object,
  cardsColor: PropTypes.object,
  brandsTextTitleColor: PropTypes.object,
  downloadTitleColor: PropTypes.object,
};
