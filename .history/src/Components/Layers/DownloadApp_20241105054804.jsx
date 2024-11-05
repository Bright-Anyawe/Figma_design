export const DownloadApp = () => {
  return (
    <>
      <section className="downloadContainer">
        <div className="downloadContents">
          <div className="3dAppMockUp">
            <img
              src="public/Figma Img/Logo/3D app mockup.png"
              alt="handHoldingPhone"
            />
          </div>
          <div className="downloadTextContainer">
            <h3>
              Download <span className="downloadHeadStyle">Parap</span> mobile
            </h3>
            <p>
              Manage your money smartly and earn while you spend with just one
              app
            </p>
            <div className="downloadImg">
              <img src="" alt="qRCode" />
              <div className="iconContainer">
                <img src="public/Figma Img/Logo/App store.png" alt="appStore" />
                <img src="" alt="googlePlay" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
