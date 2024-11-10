import { useState, useRef } from "react";
import { useContext } from "react";
import { ProvideContext } from "../../App";

export const CardPresentation = ({ cardText, handleClick }) => {
  const { isBlack } = useContext(ProvideContext);

  const [firstCard, setFirstCard] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(2);
  const listRef = useRef(null);
 const images = [
   { src: "/parap rose.png", alt: "parap rose" },
   { src: "/parap teal.png", alt: "parap teal" },
   { src: "/parap black.png", alt: "parap black" },
   { src: "/parap gray.png", alt: "parap gray" },
   { src: "/parap msb.png", alt: "parap msb" },
 ];
  function nextImage() {
    setCurrentIndex((prevState) => {
      (prevState + 1) % images.length;
    });
  }

  function previousImage() {
    setCurrentIndex((prevState) => {
      (prevState - 1 + 5) % images.length;
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
{images.slice(0, currentIndex)}

              <img
                className="parap rose"
                src="/parap rose.png"
                alt="parap rose"
              />
              <img
                className="parap teal"
                src="/parap teal.png"
                alt="parap teal"
              />

              {/* <img className="parapBlack" src="/parap black.png" alt="" /> */}
              <div className="pictureFrame">
                <img
                  className="parapContainer"
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                />

                <div className="indicator">
                  <img
                    className="arrow left"
                    src="/arrow-left.png"
                    alt="arrow_left"
                    onClick={previousImage}
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
                    src="/linear.png"
                    alt="arrow_right"
                    onClick={nextImage}
                  />
                </div>
              </div>

              <img
                className="parap gray"
                src="/parap gray.png"
                alt="parap gray"
              />
              <img className="parap msb" src="/parap msb.png" alt="parap msb" />
            </div>
          </div>
          <div
            className="cardTextContainer"
            style={{ color: isBlack ? "white" : "black" }}
          >
            <h3 className="cardPresentationTitle">
              The simplicity of debit card with credit card we combined
            </h3>
            <p
              className="cardSecondText"
              style={{ color: isBlack ? "white" : "#626263" }}
            >
              Spend your available balance with Parap Card. No overdrafts. no
              overspending. Track your spendings in real time.
            </p>
            <p
              className="cardThirdText"
              style={{ color: isBlack ? "white" : "#626263" }}
            >
              No more card fees!
            </p>

            <button className="cardBtn" onClick={handleClick}>
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
