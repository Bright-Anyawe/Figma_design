import { useState, useRef } from "react";

export const CardPresentation = ({ cardText }) => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const listRef = useRef(null);

  // const images = [
  //   "public/Figma Img/Logo/parap rose.png",
  //   "public/Figma Img/Logo/parap teal.png",
  //   "public/Figma Img/Logo/parap black.png",
  //   "public/Figma Img/Logo/parap gray.png",
  //   "public/Figma Img/Logo/parap msb.png",
  // ];

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

  // function scrollToIndex(index) {
  //   setCurrentIndex(index);
  //   const listNode = listRef.current;

  //   if (listNode) {
  //     const imgNodes = listNode.querySelectorAll("img");
  //     const imgNode = imgNodes[index];

  //     if(imgNode) {
  //       imgNode.scrollIntoView({ behavior: "smooth", block:  });
  //     }
  //   }
  // }

  return (
    <>
      <section className="cardPresentationContainer">
        <div className="cardPresentation">
          <div className="cardCarousel">
            <div className="carouselImageContainer" ref={listRef}>
              <img
                className="parap rose"
                src="public/Figma Img/Logo/parap rose.png"
                alt="parap rose"
                style={{ display: currentIndex === 0 ? "block" : "none" }}
              />
              <img
                className="parap teal"
                src="public/Figma Img/Logo/parap teal.png"
                alt="parap teal"
                style={{ display: currentIndex === 1 ? "block" : "none" }}
              />
              <img
                className="parapBlack"
                src="public/Figma Img/Logo/parap black.png"
                alt=""
                style={{ display: currentIndex === 2 ? "block" : "none" }}
              />
              <img
                className="parap gray"
                src="public/Figma Img/Logo/parap gray.png"
                alt="parap gray"
                style={{ display: currentIndex === 3 ? "block" : "none" }}
              />
              <img
                className="parap msb"
                src="public/Figma Img/Logo/parap msb.png"
                alt="parap msb"
                style={{ display: currentIndex === 4 ? "block" : "none" }}
              />
            </div>
            <div className="indicator">
              <img
                className="arrow left"
                src="public/Figma Img/Logo/arrow-left.png"
                alt="arrow_left"
              />

              <div className="circlesContainer">
                <p
                  className={`circle rose ${
                    currentIndex === 0 ? "active" : ""
                  }`}
                  onClick={() => setCurrentIndex(0)}
                ></p>
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
