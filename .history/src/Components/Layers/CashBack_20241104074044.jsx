export const CashBack = () => {
  return (
    <>
      <section className="cashBackContainer">
        <div className="cashBack">
          <h3>Earn cashback as you spend.</h3>

          <p>
            No need to figure out how to earn and spend your cashback. Papara
            Cashback is simple and quick without discount codes or points,
            instant cash rewards.
          </p>

          <div className="cardsContainer">
            <div className="card music">
              <div className="musicContainer">
                <img src="" alt="musicImg" />
                <p className="musicText">Music</p>
              </div>
              <div className="spotifyEl">
                <img src="" alt="spotifyImg" />
                <p className="spotifyText">Spotify</p>
              </div>
              <h4>Earn 10 TL instant cashback</h4>
              <p>
                Earn instant 10 TL cashback on your Spotify subscriptions every
                month.
              </p>
              <p>This offer will be valid until the end of September, 2023.</p>
            </div>
            <div className="card streaming">
              <div className="streamingContainer">
                <img src="" alt="musicImg" />
                <p className="streamingText">Streaming</p>
              </div>
              <div className="netFlixContainer">
                <img src="" alt="spotifyImg" />
              </div>
              <h4>Earn 30 TL instant cashback</h4>
              <p>
                Earn instant 10 TL cashback on your Spotify subscriptions every
                month.
              </p>
              <p>This offer will be valid until the end of September, 2023.</p>
            </div>
            <div className="card groceries "></div>
            <div className="card food"></div>
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
