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
                className="parap gray"
                src="public/Figma Img/Logo/parap gray.png"
                alt="parap gray"
              />
              <img
                className="parap msb"
                src="public/Figma Img/Logo/parap msb.png"
                alt="parap msb"
              />
            </div>
            <div className="indicator">
              <img
                className="arrow left"
                src="public/Figma Img/Logo/arrow-left.png"
                alt="arrow_left"
              />

              <div className="circlesContainer">
                <p className="circle rose"></p>
                <p className="circle teal"></p>
                <p className="circle black"></p>
                <p className="circle gray"></p>
                <p className="circle msb"></p>
              </div>

              <img
                className="arrow right"
                src="public/Figma Img/Logo/linear.png"
                alt="arrow_right"
              />
            </div>
          </div>
          <div className="cartTxt">
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
