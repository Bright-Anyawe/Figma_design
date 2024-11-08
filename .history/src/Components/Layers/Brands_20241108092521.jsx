import { forwardRef } from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ProvideContext } from "../../App";

export const Brands = forwardRef((props, ref) => {
  const { brandsTextTitleColor } = props;
  

  return (
    <>
      <section className="brandsContainer" data-testid="brand-contents">
        <div className="brands">
          <div className="brandTextContainer">
            <h3 className="brandsTextTitle" ref={brandsTextTitleColor}>
              Cutting-edge financial solutions tailored for modern businesses
            </h3>

            <div className="brandImgContainer">
              <div className="brandsImages">
                <div className="brandsFirstImgContainer">
                  <img
                    src="public/Yemeksepeti.png"
                    alt="yemekSepetiImg"
                  />
                  <img src="public/Uber.png" alt="uberImg" />
                </div>
                <div className="brandsSecondImgContainer">
                  <img src="public/Bitaksi.png" alt="Bitaksi" />
                  <img
                    src="public/Binance.png"
                    alt="binanceImg"
                  />
                  <img src="public/Yandex.png" alt="yandexImg" />
                </div>
              </div>
            </div>
            <p className="brandTextPara">
              Papara Business solutions allow organizations to make hassle-free,
              single-click payouts on web and app with a seamless integration.
            </p>
            <button>Learn More</button>
          </div>
          <div className="brandsImages desktop">
            <div className="brandsFirstImgContainer">
              <img
                src="public/Yemeksepeti.png"
                alt="yemekSepetiImg"
              />
              <img src="public/Uber.png" alt="uberImg" />
            </div>
            <div className="brandsSecondImgContainer">
              <img src="public/Bitaksi.png" alt="Bitaksi" />
              <img src="public/Binance.png" alt="binanceImg" />
              <img src="public/Yandex.png" alt="yandexImg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

Brands.displayName = "Brands"
Brands.propTypes = {
  brandsTextTitleColor: PropTypes.object,
};
