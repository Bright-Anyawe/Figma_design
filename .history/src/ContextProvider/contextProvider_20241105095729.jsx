export const HeroContext = createContext("");

const ParentContext = ({}) => {


     return(
          <>
          <HeroContext.Provider value={
               {}
          }  >
          
          </HeroContext.Provider>
     )
};

export default ParentContext
