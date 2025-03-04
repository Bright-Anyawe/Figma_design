export const CardPresentation = () => {
  return (
    <>
      <section className="heroScreenContainer">
        <div className="heroScreen">
          <div className="cardCarousel">
            <div className="carouselImageContainer">
              <img
                className="parap rose"
                src="public/Figma Img/Logo/parap rose.png"
                alt="parap rose"
              />
              <img
                className="parap teal"
                src="public/Figma Img/Logo/parap teal.png"
                alt="parap teal"
              />
              <img
                className="parapBlack"
                src="public/Figma Img/Logo/parap black.png"
                alt=""
              />
              <img
                className="parap msb"
                src="public/Figma Img/Logo/parap msb.png"
                alt="parap msb"
              />
              <img
                className="parap gray"
                src="public/Figma Img/Logo/parap gray.png"
                alt="parap gray"
              />
            </div>
            <div className="indicator">
              <p>Left arrow</p>

              <div className="circlesContainer">
                <p className="dot one" ></p>
                <p className="dot two"></p>
                <p className="dot three"></p>
                <p className="dot four"></p>
                <p className="dot "></p>
              </div>

              <p>Right arrow</p>
            </div>
          </div>
          <div className="heroScreenTxt">
            <h4>The simplicity of debit card with credit card we combined</h4>
            <p>
              Spend your available balance with Parap Card. No overdrafts. no
              overspending. Track your spendings in real time.
            </p>
            <p>No more card fees!</p>

            <button>Learn More</button>
          </div>
        </div>
      </section>
    </>
  );
};
