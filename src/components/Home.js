import React, { useState } from "react";
import './style.css';
import SingUP from "./SingUp";
import LogIn from "./logIn";


const Home = () => {

    const [isSingUp, setIsSingUp] = useState(false)
    const [islogin, setlogin ] = useState(false)
    const [isImage,setisImage]=useState(1)

    const logIn=()=>{
        setlogin(!islogin)
        console.log(islogin);
    }


    const singUPBtn = () => {
        setIsSingUp(!isSingUp)
    }

    const imgelCount=()=>{
        setisImage(isImage-1)
        console.log(isImage);
    }

    const imgerCount=()=>{
        setisImage(isImage+1)
        console.log(isImage);
    }
    return (
        <>
        
            {
                !isSingUp &&
                (islogin?<LogIn islogin={islogin}/>:<div>             

                <div className="d-flex justify-content-end p-5 gap-5">
                <button type="button"  className="btn btn-info" onClick={logIn} >logIn</button>

                <button type="button" className="btn btn-danger" onClick={singUPBtn}>SingUP</button>


            </div>
             <div className="font-s">
                <h1>Home Page</h1>
               <img src={`./images/arrow-left-circle.svg`} onClick={imgelCount}  className="icon-w m-5" alt="none"></img>
                
                <img src={`./images/p${isImage}.jpg`} className="img-size m-5" alt="none"/>
                    
                <img src={`./images/arrow-right-circle.svg`} onClick={imgerCount} className="icon-w m-5" alt="none" />

                </div>
    
                </div>)
            }

            
            {/* {islogin&&<LogIn islogin={islogin}/>} */}

            {isSingUp && <SingUP />}



        </>
    )
    // console.log(isSingUp);

}
export default Home;