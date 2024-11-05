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
              <h4>Earn 30 TL instant cashback</h4>
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
              <h4>Earn 5% instant cashback</h4>
              <p>
                Earn 5% instant cashback up to 25 TL CarrefourSA purchases every
                month.
              </p>
              <p>This offer will be valid until the end of September, 2023.</p>
            </div>
            <div className="card food">
              <div className="foodContainer">
                <img
                  src="public/Figma Img/Logo/Food card icon.png"
                  alt="foodImg"
                />
              </div>
              <div className="foodContainer">
                <img src="public/Figma Img/Logo/image 58.png" alt="foodImg" />
              </div>
              <h4>Earn 10% instant cashback</h4>
              <p>
                Earn 10% instant cashback up to 25 TL on your Burger King®
                restaurant.
              </p>
              <p>This offer will be valid until the end of September, 2023.</p>
            </div>
          </div>
        </div>
        <div className="cashBackIndicator">
          <div className="leftArrow">Left arrow</div>

          <div className="indicatorCircle1"></div>
          <div className="indicatorCircle2"></div>
          <div className="indicatorCircle3"></div>
          <div className="indicatorCircle4"></div>
          <div className="indicatorCircle5"></div>
          <div className="indicatorCircle6"></div>
          <div className="indicatorCircle7"></div>
          <div className="indicatorCircle8"></div>

          <div className="rightArrow">Right arrow</div>
        </div>
      </section>
    </>
  );
};
