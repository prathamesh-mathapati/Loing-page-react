import React from "react";

const LogIn=(props)=>{
    console.log(props.islogin);
    return(
        <>{
            props.islogin &&
(        <div className="input-group  d-flex flex-column p-5    gap-4 container   shadow rounded">
        <input type="text" className="input-box  container" placeholder=" Email id:" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <input type="password" className="input-box container" placeholder=" Enter password" aria-label="Enter password:-" aria-describedby="button-addon2"/>
      
        <button className="btn btn-outline-secondary container" type="button" id="button-addon2">logIn</button>
      </div>
)     } </>
    )
}

export  default LogIn;