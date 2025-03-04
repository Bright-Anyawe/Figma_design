

export const Header = () => {

     return (
       <>
         <section className="headerContentsContainer">
           <div className="headerContents">
             <div className="Logo">
               <img src="public/Figma Img/Logo/Group 132.png" alt="logo" />
               <p>Parap</p>
             </div>
             <div className="groupContainer">
               <div className="personalContainer">
                 <p>Personal</p>
                 <p>svg</p>
               </div>
               <div className="BusinessContainer">
                 <p>Business</p>
                 <p>svg</p>
               </div>
             </div>
             <div className="buttonsContainer">
               <button className="loginBtn">Log In</button>
               <button className="signUpBtn">Sign In</button>
             </div>
             <div className="Language">
               <img src="" alt="country" />
               <p className="langText"></p>
               <p className="svgContainer"></p>
             </div>
             <div></div>
           </div>
         </section>
       </>
     );
}