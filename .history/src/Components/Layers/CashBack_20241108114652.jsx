import { useContext } from "react";
import { ProvideContext } from "../../App";


export const CashBack = ({ cashBackHeadTitle, cardsColor }) => {
  const { isBlack } = useContext(ProvideContext);

  return (
    <>
      <section className="cashBackContainer" data-testid="cashBack-contents">
        <div
          className="cashBack"
          style={{ color: isBlack ? "white" : "black" }}
        >
          <div
            className="cashBackHeadText"
            style={{ color: isBlack ? "white" : "black" }}
          >
            <h3 className="cashBackTitle">Earn cashback as you spend.</h3>

            <p
              className="cashBackPara"
              style={{ color: isBlack ? "white" : "#626263" }}
            >
              No need to figure out how to earn and spend your cashback. Papara
              Cashback is simple and quick without discount codes or points,
              instant cash rewards.
            </p>
          </div>

          <div
            className="cardsContainer"
            ref={cardsColor}
            style={{ color: isBlack ? "white" : "black" }}
          >
            <div className="card music">
              <div className="musicContainer">
                <img src="/Group 81.png" alt="musicImg" />
                <div className="musicText">Music</div>
              </div>
              <div className="spotifyEl">
                <img src="/image 55.png" alt="spotifyImg" />
              </div>
              <h4 className="musicHeadText">
                Earn <span className="musicHeadTextDesign">10 TL</span> instant
                cashback
              </h4>
              <p>
                Earn instant 10 TL cashback on your Spotify subscriptions every
                month.
              </p>
              <p>This offer will be valid until the end of September, 2023.</p>
            </div>
            <div className="card streaming">
              <div className="streamingContainer">
                <img src="/Streaming card icon.png" alt="musicImg" />
              </div>
              <div className="netFlixContainer">
                <img src="/image 56.png" alt="spotifyImg" />
              </div>
              <h4 className="streamingHeadText">
                Earn <span className="streamingHeadTextDesign">30 TL</span>{" "}
                instant cashback
              </h4>
              <p>
                Earn instant 30 TL cashback on your Netflix subscriptions every
                month.
              </p>
              <p>This offer will be valid until the end of September, 2023.</p>
            </div>
            <div className="card groceries">
              <div className="groceriesContainer">
                <img src="/Groceries card icon.png" alt="groceriesImg" />
              </div>
              <div className="carreFourContainer">
                <img src="/image 57.png" alt="carreFourImg" />
              </div>
              <h4 className="groceriesHeadText">
                Earn <span className="groceriesHeadTextDesign">5%</span>instant
                cashback
              </h4>
              <p>
                Earn 5% instant cashback up to 25 TL CarrefourSA purchases every
                month.
              </p>
              <p>This offer will be valid until the end of September, 2023.</p>
            </div>
            <div className="card food">
              <div className="foodImgTitleContainer">
                <img src="/Food card icon.png" alt="foodImg" />
              </div>
              <div className="foodImgContainer">
                <img src="/image 58.png" alt="foodImg" />
              </div>
              <h4 className="foodHeadText">
                Earn <span className="foodHeadTextDesign">10%</span> instant
                cashback
              </h4>
              <p>
                Earn 10% instant cashback up to 25 TL on your Burger King®
                restaurant.
              </p>
              <p>This offer will be valid until the end of September, 2023.</p>
            </div>
          </div>
          <div className="cashBackIndicator">
            {/* <div className="leftArrow">Left arrow</div> */}
            <img src="/Vector.png" alt="arrow-left" />

            <div className="indicatorCircle one"></div>
            <div className="indicatorCircle two"></div>
            <div className="indicatorCircle three"></div>
            <div className="indicatorCircle four"></div>
            <div className="indicatorCircle five"></div>
            <div className="indicatorCircle six"></div>
            <div className="indicatorCircle seven"></div>
            <div className="indicatorCircle eight"></div>

            <img src="/Vector (1).png" alt="arrow-right" />
            {/* <div className="rightArrow">Right arrow</div> */}
          </div>
        </div>
      </section>
    </>
  );
};
