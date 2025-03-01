import { createContext } from "react";
import PropTypes from "prop-types";

export const HeroContext = createContext("");

const ParentContext = ({
  children,
  businessRef,
  heroScreenTxt,
  handleElementStyling,
}) => {
  return (
    <>
      <HeroContext.Provider
        value={{ businessRef, heroScreenTxt, handleElementStyling }}
      >
        {children}
      </HeroContext.Provider>
    </>
  );
};
ParentContext.propTypes = {
  children: PropTypes.node.isRequired,
  businessRef: PropTypes.object,
  heroScreenTxt: PropTypes.string,
  handleElementStyling: PropTypes.func,
};

export default ParentContext;
