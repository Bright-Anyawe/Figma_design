import { createContext } from "react";

const HeroContext = createContext("");

const ParentContext = ({ businessRef, heroScreenTxt }) => {
  return (
    <>
      <HeroContext.Provider
        value={{ businessRef, heroScreenTxt }}
      ></HeroContext.Provider>
    </>
  );
};

export default ParentContext;
