// import { useContext } from "react";
import { useRef } from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ProvideContext } from "../../App";
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
}) => {
  // const bodyRef = useRef(null);
  const { isBlack, setIsBlack, appInfoSliderColor, downloadTitleColor } =
    useContext(ProvideContext);

  const businessRef = useRef(null);
  const langTextColor = useRef(null);
  const menuRef = useRef(null);
  const logoRef = useRef(null);

  //   const heroScreenTxtRef = useRef(null);

  // const heroScreenTxt = useRef(null);
  //   const {  businessRef, handleElementStyling } = useContext(HeroContext);

  function handleElementStyling() {
    const setBackgroundBlack = !isBlack;
    console.log(setBackgroundBlack);
    setIsBlack(setBackgroundBlack);
    console.log(menuRef);

    // if (setBackgroundBlack) {
    //   bodyRef.current.classList.add("bodyRef");
    //   logoRef.current.classList.add("logoRef");
    //   businessRef.current.classList.add("businessRefColor");
    //   langTextColor.current.classList.add("langTextColor");
    //   heroScreenTxtRef.current.classList.add("heroScreenTxtRefColor");
    //   cardText.current.classList.add("cardText");
    //   appPresentationHeaderText.current.classList.add(
    //     "appPresentationHeaderText"
    //   );
    //   appPresentationTextColor.current.classList.add(
    //     "appPresentationTextColor"
    //   );
    //   cashBackHeadTitle.current.classList.add("cashBackHeadTitle");
    //   cardsColor.current.classList.add("cardsColor");
    //   brandsTextTitleColor.current.classList.add("brandsTextTitleColor");
    //   downloadTitleColor.current.classList.add("downloadTitleColor");
    //   menuRef.current.classList.add("menuRef");
    //   appInfoSliderColor.current.classList.add("appInfoSliderColor");
    // } else {
    //   bodyRef.current.classList.remove("bodyRef");
    //   logoRef.current.classList.remove("logoRef");
    //   businessRef.current.classList.remove("businessRefColor");
    //   langTextColor.current.classList.remove("langTextColor");
    //   heroScreenTxtRef.current.classList.remove("heroScreenTxtRefColor");
    //   cardText.current.classList.remove("cardText");
    //   appPresentationHeaderText.current.classList.remove(
    //     "appPresentationHeaderText"
    //   );
    //   appPresentationTextColor.current.classList.remove(
    //     "appPresentationTextColor"
    //   );
    //   cashBackHeadTitle.current.classList.remove("cashBackHeadTitle");
    //   cardsColor.current.classList.remove("cardsColor");
    //   brandsTextTitleColor.current.classList.remove("brandsTextTitleColor");
    //   downloadTitleColor.current.classList.remove("downloadTitleColor");
    //   menuRef.current.classList.remove("menuRef");
    // }
  }

  // function handleVisibility() {}

  return (
    <>
      <section
        className="headerContentsContainer"
        data-testid="header-contents"
      >
        <div className="headerContents">
          <div className="headerRightContent">
            <div className="Logo">
              <img src="/Group 132.png" alt="logo" />
              <h2 style={{ color: isBlack ? "white" : "black" }}>Parap</h2>
            </div>

            <div className="groupContainer">
              <div className="personalContainer">
                <p>Personal</p>
                <img src="/arrow-circle-down-stylish.png" alt="downArrow" />
                {/* <p>svg</p> */}
              </div>
              <div
                className="BusinessContainer"
                style={{ color: isBlack ? "white" : "black" }}
              >
                <p ref={businessRef}>Business</p>
                {isBlack ? (
                  <img src="/arrow-circle-down.png" alt="downArrow" />
                ) : (
                  <img src="/gray-arrow-down.png" alt="downArrow" />
                )}
              </div>
            </div>
          </div>

          <div className="menuContainer">
            <svg
              style={{ fill: isBlack ? "white" : "black" }}
              className="menu"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>menu</title>
              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
          </div>
          <div className="headerLeftContent">
            <div className="buttonsContainer">
              <button
                className="loginBtn"
                style={{
                  color: isBlack && "white",
                  backgroundColor: isBlack ? "inherit" : "white",
                  borderColor: isBlack && "white",
                  borderWidth: "1px",
                  borderStyle: "solid",
                }}
              >
                Log In
              </button>
              <button
                className="signUpBtn"
                style={{
                  color: isBlack && "white",
                  // backgroundColor: isBlack ? "inherit" : "white",
                  borderColor: isBlack && "none",
                  // borderWidth: "1px",
                  // borderStyle: "solid",
                }}
              >
                Sign In
              </button>
            </div>
            <div className="Language">
              <img src="/image 63.png" alt="countryLogo" />
              <div className="langTextContainer">
                <p
                  className="langText"
                  style={{ color: isBlack ? "white" : "black" }}
                >
                  English
                </p>
                {isBlack ? (
                  <img src="/arrow-circle-down.png" alt="downArrow" />
                ) : (
                  <img src="/gray-arrow-down.png" alt="downArrow" />
                )}
              </div>
            </div>
            <div className="svgContainer ">
              <svg
                onClick={handleElementStyling}
                style={{ fill: isBlack ? "white" : "black" }}
                className="brightness"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title></title>
                <path d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z" />
              </svg>
            </div>
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
