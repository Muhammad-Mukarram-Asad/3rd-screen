import React from 'react'
import {FiCircle} from "react-icons/fi";
import womenWithPhone from "../../../public/icons/womenWithPhone.svg";
import "../OnboardingScreen_1/Onboarding1.css"
import { Link, useNavigate } from 'react-router-dom';

function Onboarding2() {
    const navigate = useNavigate();
  return (
    <div className='main_div_obs1'>
        <div className='img_div'>
            <img src={womenWithPhone} alt="men_with_phone_image" />
        </div>
        <div className='h_p_div'>
            <h2>Spend with intentsion</h2>
            <p>Budget your monthly expenses <br /> and avoid overspending.</p>
        </div>
        <div className='circle_main_div'>
            <div id="circle"> <FiCircle style={{fontSize:20}} onClick={()=>  navigate("/")} /> </div>
            <div id="circle"> <FiCircle style={{fontSize:20,backgroundColor:"#75BAC6", color:"white", borderRadius:"50%"}}  /> </div>
            <div id="circle"> <FiCircle style={{fontSize:20}} onClick={()=>  navigate("/Onboarding3")} /> </div>

        </div>

        <div className='btns_main_div'>
            <button className='btns' id="skip_btn">Skip</button>

           <Link to="/Onboarding3"> 
            <button className='btns' id="next_btn">Next</button>
           </Link>
        </div>
      
    </div>
  )
}

export default Onboarding2
