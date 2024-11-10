import { useState,  } from "react";
import { useContext } from "react";
import { ProvideContext } from "../../App";

  const images = [
    { src: "/parap rose.png", alt: "parap rose" },
    { src: "/parap teal.png", alt: "parap teal" },
    { src: "/parap black.png", alt: "parap black" },
    { src: "/parap gray.png", alt: "parap gray" },
    { src: "/parap msb.png", alt: "parap msb" },
  ];

export const CardPresentation = ({ cardText, handleClick }) => {
  const { isBlack } = useContext(ProvideContext);

  const [currentIndex, setCurrentIndex] = useState(2);
  const [previousIndex, setPreviousIndex] = useState(null);

  function nextImage() {
    setPreviousIndex(currentIndex);
    setCurrentIndex((prevState) => (prevState + 1) % images.length);
  }

  function previousImage() {
    setPreviousIndex(currentIndex);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  return (
    <>
      <section
        className="cardPresentationContainer"
        data-testid="cardPresentation-contents"
      >
        <div className="cardPresentation">
          <div className="cardCarousel">
            <div className="carouselImageContainer">
              {images.slice(0, currentIndex).map((image, index) => (
                <img
                  key={`left-${index}`}
                  className={`parap ${image.alt}`}
                  src={image.src}
                  alt={image.alt}
                />
              ))}

              <div className="pictureFrame">
                <img
                  className="parapContainer"
                  src={images[currentIndex]?.src}
                  alt={images[currentIndex]?.alt}
                />

                <div className="indicator">
                  <img
                    className="arrow left"
                    src="/arrow-left.png"
                    alt="arrow_left"
                    onClick={previousImage}
                  />

                  <div className="circlesContainer">
                    {images.map((_, index) => (
                      <p
                        key={index}
                        className={`circle ${
                          index === currentIndex ? "active" : ""
                        } `}
                      ></p>
                    ))}
                  </div>

                  <img
                    className="arrow right"
                    src="/linear.png"
                    alt="arrow_right"
                    onClick={nextImage}
                  />
                </div>
              </div>

              {images.slice(currentIndex? + 1).map((image, index) => (
                <img
                  key={`left-${index}`}
                  className={`parap ${image.alt}`}
                  src={image.src}
                  alt={image.alt}
                />
              ))}
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
