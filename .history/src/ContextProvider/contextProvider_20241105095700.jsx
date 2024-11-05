export const HeroContext = createContext("");

const ParentContext = ({}) => {


     return(
          <>
          <HeroContext.provider val>
          
          </HeroContext.provider>
     )
};

export default ParentContext
