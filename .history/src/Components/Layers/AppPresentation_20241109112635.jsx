import { useContext } from "react";
import { ProvideContext } from "../../App";

export const AppPresentation = ({
  appPresentationTextColor,
  appPresentationHeaderText,
  appInfoSliderColor,
}) => {
  const { isBlack } = useContext(ProvideContext);

  return (
    <>
      <section
        className="appPresentationContainer"
        data-testid="appPresentation-contents"
      >
        <div className="appPresentation">
          <div
            className="appPresentationSubTitle"
            ref={appPresentationHeaderText}
            style={{ color: isBlack ? "white" : "black" }}
          >
            <h3 className="appPresentationTitle">
              Enjoy your financial freedom with a single app.
            </h3>

            <p
              className="appPresentationPara"
              style={{ color: isBlack ? "white" : "black" }}
            >
              All you need is <span className="appTextDesign">Parap</span>
            </p>
          </div>

          <div
            className="appPresentationContents mobileContents"
            style={{ color: isBlack ? "white" : "black" }}
          >
            <div className="iphoneContainer">
              <span className="leftVector" src="/Vector 1.png" alt="" > </span>
              <img
                className="iphoneImg"
                src="/iPhone 14 Pro Space Black Mockup (2).png"
                alt="iPhone 14 Pro Space Black Mockup"
              />
              <img className="rightVector" src="/Vector 1.png" alt="" />
            </div>

            <div className="appInfoSlider" ref={appInfoSliderColor}>
              <div className="accountLeftContents" ref={appInfoSliderColor}>
                <div className="accountContainer">
                  <div
                    className="accountTextContainer"
                    ref={appPresentationTextColor}
                  >
                    <h4>Open an account</h4>
                    <p style={{ color: isBlack ? "#FFFFFF66" : "black" }}>
                      Open your account in just few circles, anywhere anytime
                    </p>
                  </div>

                  <img src="/UserAccount.png" alt="UserAccount" />
                </div>
                <div className="sendMoneyContainer">
                  <div className="sendMoneyTextContainer">
                    <h4>Spend debt free</h4>
                    <p style={{ color: isBlack ? "#FFFFFF66" : "black" }}>
                      Know where your money goes. Track your spendings with
                      charts in real time.
                    </p>
                  </div>

                  <img src="/Send money circle.png" alt="Send money circle" />
                </div>
                <div className="earnCashBackFill">
                  <div className="earnCashBackTextContainer">
                    <h4 className="mobileCashBackTitle">Earn cashback</h4>
                    <p style={{ color: isBlack ? "#FFFFFF66" : "black" }}>
                      Earn instant cashback as you spend. No minimum spending
                      limits or complicated rules.
                    </p>
                  </div>

                  <img src="/Cashback Fill.png" alt="earnCashBackImage" />
                </div>
              </div>

              <div
                className="accountRightContents"
                style={{ color: isBlack ? "white" : "black" }}
              >
                <div className="saveMoneyContainer">
                  <img src="/Save money circle.png" alt="saveImage" />

                  <div className="saveMoneyTextContainer">
                    <h4>Save Money</h4>
                    <p style={{ color: isBlack ? "#FFFFFF66" : "black" }}>
                      Open saving account,save money regularly.
                    </p>
                  </div>
                </div>
                <div className="requestMoneyContainer">
                  <img src="/Request circle.png" alt="requestImage" />

                  <div className="requestMoneyTextContainer">
                    <h4>Request money</h4>
                    <p style={{ color: isBlack ? "#FFFFFF66" : "black" }}>
                      Select a contact, set the amount, add your message, and
                      send your request.
                    </p>
                  </div>
                </div>
                <div className="qRCode">
                  <img src="/QR circle.png" alt="qRCodeImage" />

                  <div className="qRCodeTextContainer">
                    <h4>Pay & Receive Payments with QR</h4>
                    <p style={{ color: isBlack ? "#FFFFFF66" : "black" }}>
                      Make payments by scanning a QR code. Share your QR code to
                      receive instant payments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="appPresentationContents desktopContents"
            ref={appPresentationTextColor}
            style={{ color: isBlack ? "white" : "black" }}
          >
            <div className="accountLeftContents">
              <div className="accountContainer">
                <div
                  className="accountTextContainer"
                  ref={appPresentationTextColor}
                >
                  <h4>Open an account</h4>
                  <p>Open your account in just few circles, anywhere anytime</p>
                </div>

                <img src="/UserAccount.png" alt="UserAccount" />
              </div>
              <div className="sendMoneyContainer">
                <div className="sendMoneyTextContainer">
                  <h4>Spend debt free</h4>
                  <p>
                    Know where your money goes. Track your spendings with charts
                    in real time.
                  </p>
                </div>

                <img src="/Send money circle.png" alt="Send money circle" />
              </div>
              <div className="earnCashBackFill">
                <div className="earnCashBackTextContainer">
                  <h4>Earn cashback</h4>
                  <p>
                    Earn instant cashback as you spend. No minimum spending
                    limits or complicated rules.
                  </p>
                </div>

                <img src="/Cashback Fill.png" alt="earnCashBackImage" />
              </div>
            </div>
            <div className="iphoneContainer">
              <img className="desktopLeftVector" src="/Vector 1.png" alt="" />
              <img
                className="iphoneImg"
                src="/iPhone 14 Pro Space Black Mockup (2).png"
                alt="iPhone 14 Pro Space Black Mockup"
              />
              <img className="desktopRightVector" src="/Vector 1.png" alt="" />
            </div>

            <div className="accountRightContents">
              <div className="saveMoneyContainer">
                <img src="/Save money circle.png" alt="saveImage" />

                <div className="saveMoneyTextContainer">
                  <h4>Save Money</h4>
                  <p>Open saving account,save money regularly.</p>
                </div>
              </div>
              <div className="requestMoneyContainer">
                <img src="/Request circle.png" alt="requestImage" />

                <div className="requestMoneyTextContainer">
                  <h4>Request money</h4>
                  <p>
                    Select a contact, set the amount, add your message, and send
                    your request.
                  </p>
                </div>
              </div>
              <div className="qRCode">
                <img src="/QR circle.png" alt="qRCodeImage" />

                <div className="qRCodeTextContainer">
                  <h4>Pay & Receive Payments with QR</h4>
                  <p>
                    Make payments by scanning a QR code. Share your QR code to
                    receive instant payments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
