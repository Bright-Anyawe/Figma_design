import { useState } from "react";

export const CardPresentation = ({ cardText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextImage() {
    setCurrentIndex((prevState) => {
      (prevState + 1) % 5;
    });
  }

  function previousImage() {
    setCurrentIndex((prevState) => {
      (prevState - 1 + 5) % 5;
    });
  }

  function handleImageCarouselChange() {}

  return (
    <>
      <section className="cardPresentationContainer">
        <div className="cardPresentation">
          <div className="cardCarousel">
            <div className="carouselImageContainer">
              {currentIndex === 0 && (
                <img
                  className="parap rose"
                  src="public/Figma Img/Logo/parap rose.png"
                  alt="parap rose"
                />
              )}

              {currentIndex === 1 && (
                <img
                  className="parap teal"
                  src="public/Figma Img/Logo/parap teal.png"
                  alt="parap teal"
                />
              )}

             {currentIndex === 2 && <img
                className="parapBlack"
                src="public/Figma Img/Logo/parap black.png"
                alt=""
              />}
              { currentIndex === 3 && <img
                className="parap gray"
                src="public/Figma Img/Logo/parap gray.png"
                alt="parap gray"
              />}

{
  currentIndex === 4 
}

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
          <div className="cardTextContainer">
            <h3 ref={cardText} className="cardPresentationTitle">
              The simplicity of debit card with credit card we combined
            </h3>
            <p className="cardSecondText">
              Spend your available balance with Parap Card. No overdrafts. no
              overspending. Track your spendings in real time.
            </p>
            <p className="cardThirdText">No more card fees!</p>

            <button className="cardBtn">Learn More</button>
          </div>
        </div>
      </section>
    </>
  );
};
