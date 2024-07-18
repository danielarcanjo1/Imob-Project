import "./ContentCenter.css";

function ContentCenter({children}) {
   
   return (
      <div className="ContentCenter">
         <div className="ContentCenterChildrens">
            {children}
         </div>
      </div>
   );
}

export default ContentCenter;
