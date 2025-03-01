import { useRef, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ProvideContext } from "../../App";
import "/src/Styles/Header.css"; 


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
  const { isBlack, setIsBlack } = useContext(ProvideContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const businessRef = useRef(null);
  const menuRef = useRef(null);
  const headerRef = useRef(null);

  function handleElementStyling() {
    const setBackgroundBlack = !isBlack;
    setIsBlack(setBackgroundBlack);
  }

  function toggleMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section 
      className={`header-contents-container ${scrolled ? "scrolled" : ""} ${isBlack ? "dark-mode" : "light-mode"}`} 
      data-testid="header-contents"
      ref={headerRef}
    >
      <div className="header-contents">
        <div className="header-right-content">
          <div className="logo">
            <img src="/Group 132.png" alt="logo" className="logo-image" />
            <h2 className="logo-text">Parap</h2>
          </div>

          <div className="group-container">
            <div className="dropdown-container personal-container">
              <p>Personal</p>
              <img 
                src={isBlack ? "/arrow-circle-down.png" : "/gray-arrow-down.png"} 
                alt="downArrow" 
                className="dropdown-arrow"
              />
              <div className="dropdown-content">
                <a href="#">Personal Account</a>
                <a href="#">Settings</a>
                <a href="#">Preferences</a>
              </div>
            </div>
            <div className="dropdown-container business-container">
              <p ref={businessRef}>Business</p>
              <img 
                src={isBlack ? "/arrow-circle-down.png" : "/gray-arrow-down.png"} 
                alt="downArrow" 
                className="dropdown-arrow"
              />
              <div className="dropdown-content">
                <a href="#">Business Account</a>
                <a href="#">Enterprise</a>
                <a href="#">Solutions</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-controls">
          <div className="svg-container mobile-svg-brightness">
            <svg
              onClick={handleElementStyling}
              className="brightness-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>Toggle Theme</title>
              <path d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z" />
            </svg>
          </div>

          <div className="menu-container" ref={menuRef}>
            <svg
              onClick={toggleMobileMenu}
              className="menu-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>Menu</title>
              <path d={mobileMenuOpen ? "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" : "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"} />
            </svg>
          </div>
        </div>

        <div className={`header-left-content ${mobileMenuOpen ? "mobile-menu-open" : ""}`}>
          <div className="buttons-container">
            <button className="login-btn">
              Log In
            </button>
            <button className="signup-btn">
              Sign In
            </button>
          </div>
          <div className="language-dropdown">
            <img src="/image 63.png" alt="countryLogo" className="country-logo" />
            <div className="lang-text-container">
              <p className="lang-text">
                English
              </p>
              <img 
                src={isBlack ? "/arrow-circle-down.png" : "/gray-arrow-down.png"} 
                alt="downArrow" 
                className="dropdown-arrow"
              />
            </div>
            <div className="dropdown-content language-options">
              <a href="#">English</a>
              <a href="#">Spanish</a>
              <a href="#">French</a>
              <a href="#">German</a>
            </div>
          </div>
          <div className="svg-container desktop-svg-brightness">
            <svg
              onClick={handleElementStyling}
              className="brightness-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>Toggle Theme</title>
              <path d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
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
