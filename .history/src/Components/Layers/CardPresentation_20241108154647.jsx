import { useState, useRef } from "react";
import { useContext } from "react";
import { ProvideContext } from "../../App";
import { Swiper, SwiperSlide } from "swiper/react";
import "./App.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination } from "swiper/modules";

export const CardPresentation = ({ cardText, handleClick }) => {
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
        <div className="container">
          <h1 className="heading">Flower Gallery</h1>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
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
            <img className="parapBlack" src="/parap black.png" alt="" />
            <img
              className="parap gray"
              src="/parap gray.png"
              alt="parap gray"
            />
            <SwiperSlide>
              <img src="/parap rose.png" alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_2} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_3} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_4} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_5} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_6} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_7} alt="slide_image" />
            </SwiperSlide>

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>

        {/* <div className="cardPresentation">
          <div className="cardCarousel">
            <div className="carouselImageContainer" ref={listRef}>
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
              <img className="parapBlack" src="/parap black.png" alt="" />
              <img
                className="parap gray"
                src="/parap gray.png"
                alt="parap gray"
              />
              <img className="parap msb" src="/parap msb.png" alt="parap msb" />
            </div>
            <div className="indicator">
              <img
                className="arrow left"
                src="/arrow-left.png"
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
                src="/linear.png"
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
        </div> */}
      </section>
    </>
  );
};
