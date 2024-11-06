import { createContext } from "react";

const HeroContext = createContext("");

const ParentContext = ({children, businessRef, heroScreenTxt, handleElementStyling }) => {
  return (
    <>
      <HeroContext.Provider
        value={{ businessRef, heroScreenTxt, handleElementStyling }}
        
      ></HeroContext.Provider>
    </>
  );
};

export default ParentContext;
