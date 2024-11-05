import { createContext } from "react";

export const HeroContext = createContext("");

const ParentContext = ({ businessRef }) => {
  return (
    <>
      <HeroContext.Provider value={{ businessRef }}></HeroContext.Provider>
    </>
  );
};

export default ParentContext;
