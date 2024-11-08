import { useState, useRef } from "react";
import { useContext } from "react";
import { ProvideContext } from "../../App";

export const CardPresentation = ({ cardText }) => {
  const { isBlack } = useContext(ProvideContext);

  const [currentIndex, setCurrentIndex] = useState(0);
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
      <section
        className="cardPresentationContainer"
        data-testid="cardPresentation-contents"
      >
        <div className="cardPresentation">
          <div className="cardCarousel">
            <div className="carouselImageContainer" ref={listRef}>
              <img
                className="parap rose"
                src="public/parap rose.png"
                alt="parap rose"
              />
              <img
                className="parap teal"
                src="public/parap teal.png"
                alt="parap teal"
              />
              <img className="parapBlack" src="public/parap black.png" alt="" />
              <img
                className="parap gray"
                src="public/parap gray.png"
                alt="parap gray"
              />
              <img
                className="parap msb"
                src="public/parap msb.png"
                alt="parap msb"
              />
            </div>
            <div className="indicator">
              <img
                className="arrow left"
                src="public/arrow-left.png"
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
                src="public/linear.png"
                alt="arrow_right"
              />
            </div>
          </div>
          <div
            className="cardTextContainer"
            style={{ color: isBlack ? "white" : "black" }}
          >
            <h3 className="cardPresentationTitle">
              The simplicity of debit card with credit card we combined
            </h3>
            <p className="cardSecondText" style={{ color: isBlack ? "white" : "black" }}>
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
