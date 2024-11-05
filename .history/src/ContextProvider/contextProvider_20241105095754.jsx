export const HeroContext = createContext("");

const ParentContext = ({businessRef,}) => {


     return(
          <>
          <HeroContext.Provider value={
               {}
          }  >
          
          </HeroContext.Provider>
     )
};

export default ParentContext
