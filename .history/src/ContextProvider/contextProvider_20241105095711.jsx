export const HeroContext = createContext("");

const ParentContext = ({}) => {


     return(
          <>
          <HeroContext.Provider val>
          
          </HeroContext.Provider>
     )
};

export default ParentContext
