export const AppPresentation = ({
  appPresentationTextColor,
  appPresentationHeaderText,
  appInfoSliderColor
}) => {
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
          >
            <h3 className="appPresentationTitle">
              Enjoy your financial freedom with a single app.
            </h3>

            <p className="appPresentationPara">
              All you need is <span className="appTextDesign">Parap</span>
            </p>
          </div>

          <div
            className="appPresentationContents mobileContents"
            ref={appPresentationTextColor}
          >
            <div className="iphoneContainer">
              <img
                className="leftVector"
                src="public/Vector 1.png"
                alt=""
              />
              <img
                className="iphoneImg"
                src="public/iPhone 14 Pro Space Black Mockup (2).png"
                alt="iPhone 14 Pro Space Black Mockup"
              />
              <img
                className="rightVector"
                src="public/Vector 1.png"
                alt=""
              />
            </div>

            <div className="appInfoSlider" ref={appInfoSliderColor}>
              <div className="accountLeftContents">
                <div className="accountContainer">
                  <div
                    className="accountTextContainer"
                    ref={appPresentationTextColor}
                  >
                    <h4>Open an account</h4>
                    <p>
                      Open your account in just few circles, anywhere anytime
                    </p>
                  </div>

                  <img
                    src="public/UserAccount.png"
                    alt="UserAccount"
                  />
                </div>
                <div className="sendMoneyContainer">
                  <div className="sendMoneyTextContainer">
                    <h4>Spend debt free</h4>
                    <p>
                      Know where your money goes. Track your spendings with
                      charts in real time.
                    </p>
                  </div>

                  <img
                    src="public/Send money circle.png"
                    alt="Send money circle"
                  />
                </div>
                <div className="earnCashBackFill">
                  <div className="earnCashBackTextContainer">
                    <h4 className="mobileCashBackTitle">Earn cashback</h4>
                    <p>
                      Earn instant cashback as you spend. No minimum spending
                      limits or complicated rules.
                    </p>
                  </div>

                  <img
                    src="public/Cashback Fill.png"
                    alt="earnCashBackImage"
                  />
                </div>
              </div>

              <div className="accountRightContents">
                <div className="saveMoneyContainer">
                  <img
                    src="public/Save money circle.png"
                    alt="saveImage"
                  />

                  <div className="saveMoneyTextContainer">
                    <h4>Save Money</h4>
                    <p>Open saving account,save money regularly.</p>
                  </div>
                </div>
                <div className="requestMoneyContainer">
                  <img
                    src="public/Request circle.png"
                    alt="requestImage"
                  />

                  <div className="requestMoneyTextContainer">
                    <h4>Request money</h4>
                    <p>
                      Select a contact, set the amount, add your message, and
                      send your request.
                    </p>
                  </div>
                </div>
                <div className="qRCode">
                  <img
                    src="public/QR circle.png"
                    alt="qRCodeImage"
                  />

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

          <div
            className="appPresentationContents desktopContents"
            ref={appPresentationTextColor}
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

                <img src="public/UserAccount.png" alt="UserAccount" />
              </div>
              <div className="sendMoneyContainer">
                <div className="sendMoneyTextContainer">
                  <h4>Spend debt free</h4>
                  <p>
                    Know where your money goes. Track your spendings with charts
                    in real time.
                  </p>
                </div>

                <img
                  src="public/Send money circle.png"
                  alt="Send money circle"
                />
              </div>
              <div className="earnCashBackFill">
                <div className="earnCashBackTextContainer">
                  <h4>Earn cashback</h4>
                  <p>
                    Earn instant cashback as you spend. No minimum spending
                    limits or complicated rules.
                  </p>
                </div>

                <img src="public/Cashback Fill.png" alt="earnCashBackImage" />
              </div>
            </div>
            <div className="iphoneContainer">
              <img
                className="desktopLeftVector"
                src="public/Vector 1.png"
                alt=""
              />
              <img
                className="iphoneImg"
                src="public/iPhone 14 Pro Space Black Mockup (2).png"
                alt="iPhone 14 Pro Space Black Mockup"
              />
              <img
                className="desktopRightVector"
                src="public/Vector 1.png"
                alt=""
              />
            </div>

            <div className="accountRightContents">
              <div className="saveMoneyContainer">
                <img src="public/Save money circle.png" alt="saveImage" />

                <div className="saveMoneyTextContainer">
                  <h4>Save Money</h4>
                  <p>Open saving account,save money regularly.</p>
                </div>
              </div>
              <div className="requestMoneyContainer">
                <img src="public/Request circle.png" alt="requestImage" />

                <div className="requestMoneyTextContainer">
                  <h4>Request money</h4>
                  <p>
                    Select a contact, set the amount, add your message, and send
                    your request.
                  </p>
                </div>
              </div>
              <div className="qRCode">

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
