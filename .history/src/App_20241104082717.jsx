import { useState } from "react";
import { AppPresentation } from "./Components/Layers/AppPresentation";
import { Brands } from "./Components/Layers/Brands";
import { CardPresentation } from "./Components/Layers/CardPresentation";
import { CashBack } from "./Components/Layers/CashBack";
import { DownloadApp } from "./Components/Layers/DownloadApp";
import { Footer } from "./Components/Layers/Footer";
import { Header } from "./Components/Layers/Header_Responsive";
import { HeroScreen } from "./Components/Layers/HeroScreen";
import "./src/Styles/index.css"

import "./App.css";

function App() {
  return (
    <>
      <AppPresentation />
      <Brands />
      <CardPresentation />
      <CashBack />
      <DownloadApp />
      <Footer />
      <Header />
      <HeroScreen />
    </>
  );
}

export default App;
