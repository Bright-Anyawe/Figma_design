export const HeroContext = createContext("");

const ParentContext = ({}) => {


     return(
          <>
          <HeroContext.provider>
          
          </HeroContext.provider>
     )
};

export default ParentContext
