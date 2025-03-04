import { useContext } from "react";
import ParentContext from "../../ContextProvider/contextProvider";

export const HeroScreen = () => {
  const { heroScreenTxt } = useContext(ParentContext);

  return (
    <>
      <section className="heroScreenContainer">
        <div className="heroScreen">
          <div className="heroScreenTxt">
            <h3>Managing your money has never been easier</h3>
            <p>
              Welcome to Parap, the new era of mobile money. We accompany you
              every step of the way. We provide powerful tools to track your
              income
            </p>
            <p>
              We help you take the necessary steps to achieve your financial
              goals value
            </p>

            <button>Open an account</button>
          </div>
          {/* <div className="heroImage"> */}
          <img
            className="heroImage"
            src="public/Figma Img/Logo/image.png"
            alt=""
          />
          {/* </div> */}
        </div>
      </section>
    </>
  );
};
