
import PropTypes from 'prop-types';  // Import PropTypes
import { useContext } from "react";
import { ProvideContext } from "../../App";


export const HeroScreen = ({ heroScreenTxtRef, handleClick }) => {
  const { isBlack } = useContext(ProvideContext);

  // function handleClick() {
  //   console.log("Open an account button has been clicked!");
  // }

  return (
    <>
      <section className="heroScreenContainer" data-testid="hero-contents">
        <div className="heroScreen">
          <div
            className="heroScreenTxt"
            style={{ color: isBlack ? "white" : "black" }}
          >
            <h3 className="heroTitleText" ref={heroScreenTxtRef}>
              Managing your money has never been easier
            </h3>
            <p
              className="heroIntroText"
              style={{ color: isBlack ? "white" : "#626263" }}
            >
              Welcome to Parap, the new era of mobile money. We accompany you
              every step of the way. We provide powerful tools to track your
              income
            </p>
            <p className="heroPara" ref={heroScreenTxtRef}>
              We help you take the necessary steps to achieve your financial
              goals value
            </p>

            <button className="accountBtn" onClick={handleClick}>
              Open an account
            </button>
          </div>
          {/* <div className="heroImage"> */}
          <img className="heroImage" src="public/image.png" alt="" />
          {/* </div> */}
        </div>
      </section>
    </>
  );
};


HeroScreen.propTypes = {
  heroScreenTxtRef: PropTypes.object,
  handleClick: PropTypes.func.isRequired
};