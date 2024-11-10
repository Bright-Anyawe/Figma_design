import { useState } from "react";
import { useContext } from "react";
import { ProvideContext } from "../../App";

const images = [
  { src: "/parap rose.png", alt: "parap rose", color: "#EDD1D1" },
  { src: "/parap teal.png", alt: "parap teal", color: "#BEE0DA" },
  { src: "/parap black.png", alt: "parap black", color: "#1F2325" },
  { src: "/parap gray.png", alt: "parap gray", color: "#D8D9DC" },
  { src: "/parap msb.png", alt: "parap msb", color: "#A2DFFF" },
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

  const leftImages = [
    images[(currentIndex - 2 + images.length) % images.length],
    images[(currentIndex - 1 + images.length) % images.length],
  ];


  const rightImages = [
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
  ];

   const goToImage = (index) => {
        setCurrentIndex(index);
    };


  return (
    <>
      <section
        className="cardPresentationContainer"
        data-testid="cardPresentation-contents"
      >
        <div className="cardPresentation">
          <div className="cardCarousel">
            <div className="carouselImageContainer">
              {leftImages.map((image, index) => (
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
                  {isBlack ? (
                    <img
                      className="arrow left"
                      src="/white-arrow-left.png"
                      alt="arrow_left"
                      onClick={previousImage}
                    />
                  ) : (
                    <img
                      className="arrow left"
                      src="/arrow-left.png"
                      alt="arrow_left"
                      onClick={previousImage}
                    />
                  )}

                  <div className="circlesContainer">
                    {images.map((image, index) => (
                      <p
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`circle ${
                          index === currentIndex ? "active" : ""
                        } `}
                        style={{
                          backgroundColor: image.color,
                          width: index === currentIndex ? "25px" : "10px",
                          height: index === currentIndex ? "25px" : "10px",
                        }}
                      ></p>
                    ))}
                  </div>
                  {isBlack ? (
                    <img
                      className="arrow right"
                      src="/"
                      alt="arrow_right"
                      onClick={nextImage}
                    />
                  ) : (
                    <img
                      className="arrow right"
                      src="/linear.png"
                      alt="arrow_right"
                      onClick={nextImage}
                    />
                  )}
                </div>
              </div>

              {rightImages.map((image, index) => (
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
