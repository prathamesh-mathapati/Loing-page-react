import React from "react";
import './style.css'


const SingUP=()=>{

    return <div className="singup">
           <div className="font-s">
                SingUp Page
            </div>


<form className="d-flex flex-column text-center gap-5 p-5 shadow ">
  <label className="input-size d-flex  ">
    Name:

    <input type="text" className="input-box" placeholder="Enter name" name="name" />
  </label>
  <label className="input-size d-flex  ">
    Email:

    <input type="email" className="input-box" placeholder="Enter name" name="name" />
  </label>
  <label className="input-size d-flex  ">
    Password:

    <input type="password" className="input-box" placeholder="Enter name" name="name" />
  </label>
  <label className="input-size d-flex  ">
    Confirm Password:

    <input type="password" className="input-box" placeholder="Enter name" name="name" />
  </label>
  <label className="input-size d-flex  ">
    Phone Numbet:

    <input type="text" className="input-box" placeholder="Enter name" name="name" />
  </label>

  <input type="submit" value="Submit" />
</form>
    </ div>
}

export default SingUP;