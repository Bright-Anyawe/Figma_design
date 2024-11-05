import { createContext } from "react";

 const HeroContext = createContext("");

const ParentContext = ({ businessRef, heroScreenTxt }) => {
  return (
    <>
      <HeroContext.Provider value={{ businessRef }}></HeroContext.Provider>
    </>
  );
};

export default ParentContext;
