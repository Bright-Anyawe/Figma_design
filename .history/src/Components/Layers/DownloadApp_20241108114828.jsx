import PropTypes from "prop-types";
import { useContext } from "react";
import { ProvideContext } from "../../App";

export const DownloadApp = () => {
  const { isBlack, downloadTitleColor } = useContext(ProvideContext);

  return (
    <>
      <section className="downloadContainer">
        <div className="downloadContents">
          <div className="appMockUp desktopMockup">
            <img src="/3D app mockup.png" alt="handHoldingPhone" />
          </div>
          <div
            className="downloadTextContainer mobileDownloadContainer"
            style={{ color: isBlack ? "white" : "black" }}
          >
            <h3 className="downloadTitle" ref={downloadTitleColor}>
              Download <span className="downloadHeadStyle">Parap</span> mobile
            </h3>
            <p
              className="downloadTextPara"
              style={{ color: isBlack ? "white" : "black" }}
            >
              Manage your money smartly and earn while you spend with just one
              app
            </p>

            <div className="appMockUp mobileMockup">
              <img src="/3D app mockup.png" alt="handHoldingPhone" />
            </div>
            {isBlack ? (
              <div className="downloadIcons">
                <img
                  className="qRCodeImg"
                  src="/QR with logo (1).png"
                  alt="qRCode"
                />
                <div className="storeIcons">
                  <img
                    className="appStoreImg"
                    src="/App store (1).png"
                    alt="appStore"
                  />

                  <img
                    className="playStoreImg"
                    src="public/Play store (1).png"
                    alt="googlePlay"
                  />
                </div>
              </div>
            ) : (
              <div className="downloadIcons">
                <img
                  className="qRCodeImg"
                  src="public/QR with logo.png"
                  alt="qRCode"
                />

                <div className="storeIcons">
                  <img
                    className="appStoreImg"
                    src="public/App store.png"
                    alt="appStore"
                  />

                  <img
                    className="playStoreImg"
                    src="public/Play store.png"
                    alt="googlePlay"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

DownloadApp.propTypes = {
  downloadTitleColor: PropTypes.object,
};
