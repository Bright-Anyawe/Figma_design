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
import ParentContext from "./ContextProvider/contextProvider";



function App() {
  let bodyRef = useRef(null)
const businessRef = useRef(null)
const heroScreenTxt = useRef(null)

function handleElementStyling() {



}

  return (
    <>
      <ParentContext businessRef={businessRef} heroScreenTxt={heroScreenTxt}>
        <Header />
        <HeroScreen />
        <CardPresentation />
        <AppPresentation />
        <CashBack />
        <Brands />
        <DownloadApp />
        <Footer />
      </ParentContext>
    </>
  );
}

export default App;
