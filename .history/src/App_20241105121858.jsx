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



export const HeroContext = createContext("");


function App() {
  let bodyRef = useRef(null);
  let businessRef = useRef(null);
  let heroScreenTxt = useRef(null);

  function handleElementStyling() {
    bodyRef.current.style.backgroundColor = "black";
    businessRef.current.style.color = "white";
    heroScreenTxt.current.style.color = "white";
  }

  return (
    <>
        <ParentContext
          businessRef={businessRef}
          heroScreenTxt={heroScreenTxt}
          handleElementStyling={handleElementStyling}
        >
      <main ref={bodyRef}>
          <Header />
          <HeroScreen />
          <CardPresentation />
          <AppPresentation />
          <CashBack />
          <Brands />
          <DownloadApp />
          <Footer />
      </main>{" "}
        </ParentContext>
    </>
  );
}

export default App;
