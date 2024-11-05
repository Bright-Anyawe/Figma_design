export const CashBack = () => {
  return (
    <>
      <section className="cashBackContainer">
        <div className="cashBack">
          <div className="headText">
            <h3>Earn cashback as you spend.</h3>

            <p>
              No need to figure out how to earn and spend your cashback. Papara
              Cashback is simple and quick without discount codes or points,
              instant cash rewards.
            </p>
          </div>

          <div className="cardsContainer">
            <div className="card music">
              <div className="musicContainer">
                <img src="public/Group 81.png" alt="musicImg" />
                <div className="musicText">Music</div>
              </div>
              <div className="spotifyEl">
                <img
                  src="public/Figma Img/Logo/image 55.png"
                  alt="spotifyImg"
                />
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
                <img
                  src="public/Figma Img/Logo/Streaming card icon.png"
                  alt="musicImg"
                />
              </div>
              <div className="netFlixContainer">
                <img
                  src="public/Figma Img/Logo/image 56.png"
                  alt="spotifyImg"
                />
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
                <img
                  src="public/Figma Img/Logo/Groceries card icon.png"
                  alt="groceriesImg"
                />
              </div>
              <div className="carreFourContainer">
                <img
                  src="public/Figma Img/Logo/image 57.png"
                  alt="carreFourImg"
                />
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
                <img
                  src="public/Figma Img/Logo/Food card icon.png"
                  alt="foodImg"
                />
              </div>
              <div className="foodImgContainer">
                <img src="public/Figma Img/Logo/image 58.png" alt="foodImg" />
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
          <img src="public/Figma Img/Logo/Vector.png" alt="arrow-left" />

          <div className="indicatorCircle one"></div>
          <div className="indicatorCircle two"></div>
          <div className="indicatorCircle three"></div>
          <div className="indicatorCircle four"></div>
          <div className="indicatorCircle five"></div>
          <div className="indicatorCircle six"></div>
          <div className="indicatorCircle seven"></div>
          <div className="indicatorCircle eight"></div>

          <img src="public/Figma Img/Logo/Vector (1).png" alt="arrow-right" />
          {/* <div className="rightArrow">Right arrow</div> */}
        </div>
        </div>
      </section>
    </>
  );
};