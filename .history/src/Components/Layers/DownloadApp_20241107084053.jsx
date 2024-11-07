import PropTypes from "prop-types";


export const DownloadApp = ({ downloadTitleColor }) => {
  const { isBlack, setIsBlack } = useContext(ProvideContext);


  return (
    <>
      <section className="downloadContainer">
        <div className="downloadContents">
          <div className="appMockUp desktopMockup">
            <img
              src="public/Figma Img/Logo/3D app mockup.png"
              alt="handHoldingPhone"
            />
          </div>
          <div className="downloadTextContainer mobileDownloadContainer">
            <h3 className="downloadTitle" ref={downloadTitleColor}>
              Download <span className="downloadHeadStyle">Parap</span> mobile
            </h3>
            <p className="downloadTextPara">
              Manage your money smartly and earn while you spend with just one
              app
            </p>

            <div className="appMockUp mobileMockup">
              <img
                src="public/Figma Img/Logo/3D app mockup.png"
                alt="handHoldingPhone"
              />
            </div>

            <div className="downloadIcons">
              <img
                className="qRCodeImg"
                src="public/Figma Img/Logo/QR with logo.png"
                alt="qRCode"
              />
              <img
                className="qRCodeImg"
                src="public/Figma Img/Logo/QR with logo (1).png"
                alt="qRCode"
              />
              <div className="storeIcons">
                <img
                  className="appStoreImg"
                  src="public/Figma Img/Logo/App store.png"
                  alt="appStore"
                />

                <img
                  className="playStoreImg"
                  src="public/Figma Img/Logo/Play store.png"
                  alt="googlePlay"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

DownloadApp.propTypes = {
  downloadTitleColor: PropTypes.object,
}