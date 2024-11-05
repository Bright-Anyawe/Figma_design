import { useState } from "react";
import { AppPresentation } from "./Components/Layers/AppPresentation";
import { Brands } from "./Components/Layers/Brands";
import { CardPresentation } from "./Components/Layers/CardPresentation";
import { CashBack } from "./Components/Layers/CashBack";
import { DownloadApp } from "./Components/Layers/DownloadApp";
import { Footer } from "./Components/Layers/Footer";
import { Header } from "./Components/Layers/Header_Responsive";
import { HeroScreen } from "./Components/Layers/HeroScreen";
import { createContext } from "react";


const HeroContext = createContext('')

function App() {



  return (
    <>
      <Header />
      <HeroScreen />
      <CardPresentation />
      <AppPresentation />
      <CashBack />
      <Brands />
      <DownloadApp />
      <Footer />
    </>
  );
}

export default App;
