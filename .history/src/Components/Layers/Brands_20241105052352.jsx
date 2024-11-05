export const Brands = () => {
  return (
    <>
      <section className="brandsContainer">
        <div className="brands">
          <div className="brandTextContainer">
            <h3>
              Cutting-edge financial solutions tailored for modern businesses
            </h3>
            <p>
              Papara Business solutions allow organizations to make hassle-free,
              single-click payouts on web and app with a seamless integration.
            </p>
            <button>Learn More</button>
          </div>
          <div className="brandsImages">
            <div className="brandsFirstImg">
              <img
                src="public/Figma Img/Logo/Yemeksepeti.png"
                alt="yemekSepetiImg"
              />
              <img src="public/Figma Img/Logo/Uber.png" alt="uberImg" />
            </div>
            <div>
              <img src="public/Figma Img/Logo/Bitaksi.png" alt="Bitaksi" />
              <img src="public/Figma Img/Logo/Binance.png" alt="binanceImg" />
              <img src="public/Figma Img/Logo/Yandex.png" alt="yandexImg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
