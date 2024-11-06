import { useContext } from "react";
import ParentContext from "../../ContextProvider/contextProvider";

export const Header = () => {
     const {businessRef} = useContext(ParentContext)

     return (
       <>
         <section className="headerContentsContainer">
           <div className="headerContents">
             <div className="headerRightContent">
               <div className="Logo">
                 <img  src="public/Figma Img/Logo/Group 132.png" alt="logo" />
                 <h2>Parap</h2>
               </div>
               <div className="groupContainer">
                 <div className="personalContainer">
                   <p>Personal</p>
                   <img
                     src="public/Figma Img/Logo/arrow-circle-down-stylish.png"
                     alt="downArrow"
                   />
                   {/* <p>svg</p> */}
                 </div>
                 <div className="BusinessContainer">
                   <p ref={businessRef}>Business</p>
                   <img
                     src="public/Figma Img/Logo/arrow-circle-down.png"
                     alt="downArrow"
                   />
                 </div>
               </div>
             </div>
             <div className="headerLeftContent">
               <div className="buttonsContainer">
                 <button className="loginBtn">Log In</button>
                 <button className="signUpBtn">Sign In</button>
               </div>
               <div className="Language">
                 <img
                   src="public/Figma Img/Logo/image 63.png"
                   alt="countryLogo"
                 />
                 <div className="langTextContainer">
                   <p className="langText">English</p>
                   <img
                     src="public/Figma Img/Logo/arrow-circle-down.png"
                     alt="down Arrow"
                   />
                 </div>
               </div>
               <div></div>
             </div>
           </div>
         </section>
       </>
     );
}