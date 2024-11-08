import { AppPresentation } from "./Components/Layers/AppPresentation";
import { Brands } from "./Components/Layers/Brands";
import { CardPresentation } from "./Components/Layers/CardPresentation";
import { CashBack } from "./Components/Layers/CashBack";
import { DownloadApp } from "./Components/Layers/DownloadApp";
import { Footer } from "./Components/Layers/Footer";
import { Header } from "./Components/Layers/Header_Responsive";
import { HeroScreen } from "./Components/Layers/HeroScreen";
import { useState, useRef } from "react";
import { createContext } from "react";



export const ProvideContext = createContext(null);


export function App() {
  const [isBlack, setIsBlack] = useState(false);


  const bodyRef = useRef(null)
  const whiteTextRef = useRef(null)
  const cardText = useRef(null)
  const appPresentationHeaderText = useRef(null)
  const appPresentationTextColor = useRef(null);
  const cashBackHeadTitle = useRef(null);
  const cardsColor = useRef(null)
  const brandsTextTitleColor = useRef(null)
  const downloadTitleColor = useRef(null)
  const appInfoSliderColor = useRef(null)


  
  return (
    <>
      <ProvideContext.Provider
        value={{ isBlack, setIsBlack, appInfoSliderColor, downloadTitleColor }}
      >
        <main ref={bodyRef}>
          <Header
            bodyRef={bodyRef}
            heroScreenTxtRef={whiteTextRef}
            cardText={cardText}
            appPresentationTextColor={appPresentationTextColor}
            appPresentationHeaderText={appPresentationHeaderText}
            cashBackHeadTitle={cashBackHeadTitle}
            cardsColor={cardsColor}
          />
          <HeroScreen heroScreenTxtRef={whiteTextRef} />
          <CardPresentation cardText={cardText} />
          <AppPresentation
            appPresentationHeaderText={appPresentationHeaderText}
            appPresentationTextColor={appPresentationTextColor}
            appInfoSliderColor={appInfoSliderColor}
          />
          <CashBack
            cashBackHeadTitle={cashBackHeadTitle}
            cardsColor={cardsColor}
          />
          <Brands props={brandsTextTitleColor} />
          <Footer />
        </main>{" "}
      </ProvideContext.Provider>
    </>
  );
}

export default App;
