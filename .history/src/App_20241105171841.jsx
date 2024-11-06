import { useState } from "react";
import { AppPresentation } from "./Components/Layers/AppPresentation";
import { Brands } from "./Components/Layers/Brands";
import { CardPresentation } from "./Components/Layers/CardPresentation";
import { CashBack } from "./Components/Layers/CashBack";
import { DownloadApp } from "./Components/Layers/DownloadApp";
import { Footer } from "./Components/Layers/Footer";
import { Header } from "./Components/Layers/Header_Responsive";
import { HeroScreen } from "./Components/Layers/HeroScreen";
import { useRef } from "react";
import { createContext } from "react";



export const HeroContext = createContext(null);


function App() {
  const bodyRef = useRef(null)
  const whiteTextRef = useRef(null)
  const cardText = useRef(null)
  const appPresentationHeaderText = useRef(null)
  const appPresentationTextColor = useRef(null);
  const cashBackHeadTitle = useRef(null);


  

  
  return (
    <>
      <HeroContext.Provider
      // value={{ businessRef, heroScreenTxt, handleElementStyling }}
      >
        <main ref={bodyRef}>
          <Header
            bodyRef={bodyRef}
            heroScreenTxtRef={whiteTextRef}
            cardText={cardText}
            appPresentationTextColor={appPresentationTextColor}
            appPresentationHeaderText={appPresentationHeaderText}
          />
          <HeroScreen heroScreenTxtRef={whiteTextRef} />
          <CardPresentation cardText={cardText} />
          <AppPresentation
            appPresentationHeaderText={appPresentationHeaderText}
            appPresentationTextColor={appPresentationTextColor}
          />
          <CashBack  />
          <Brands />
          <DownloadApp />
          <Footer />
        </main>{" "}
      </HeroContext.Provider>
    </>
  );
}

export default App;
