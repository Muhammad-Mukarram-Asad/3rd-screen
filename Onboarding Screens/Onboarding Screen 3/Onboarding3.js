import React from 'react'
import {FiCircle} from "react-icons/fi";
import womenWithAllPhone from "../../../public/icons/womenWithAll_Items.svg";
import "../OnboardingScreen_1/Onboarding1.css";
import { useNavigate } from 'react-router-dom';

function Onboarding3() {
    const navigate = useNavigate();

  return (
    <div className='main_div_obs1'>
        <div className='img_div'>
            <img src={womenWithAllPhone} alt="men_with_phone_image" />
        </div>
        <div className='h_p_div'>
            <h2>Save for your dreams</h2>
            <p>Create and achieve goals to live <br /> your best life</p>
        </div>
        <div className='circle_main_div'>
            <div id="circle"> <FiCircle style={{fontSize:20}} onClick={()=>  navigate("/")} /> </div>
            <div id="circle"> <FiCircle style={{fontSize:20}} onClick={()=>  navigate("/Onboarding2")} /> </div>
            <div id="circle"> <FiCircle style={{fontSize:20,backgroundColor:"#75BAC6", color:"white", borderRadius:"50%"}} /> </div>

        </div>

        <div className='btns_main_div'>
            <button className='btns' id="getStarted_btn" onClick={()=>  navigate("/HKAccountMain")}>Get Started</button>
        </div>
      
    </div>
  )
}

export default Onboarding3
