import React from 'react'
import axios from "axios";
import { useState } from "react";
import '../css/Tempstyle.css'

function Temp() {

     const apiKey = "215c00d16ee7235dee420519bfd20734"
     const [inputCity, setInputCity] = useState("")
     const [data, setData] = useState({})
   
   
     const getWetherDetails = (cityName) => {
       if (!cityName) return
       const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
       axios.get(apiURL).then((res) => {
         console.log("response", res.data)
         setData(res.data)
       }).catch((err) => {
         console.log("err", err)
       })
     }
   
     const handleChangeInput = (e) => {
       console.log("value", e.target.value)
       setInputCity(e.target.value)
     }
   
     const handleSearch = () => {
       getWetherDetails(inputCity)
     }



  return (

   <div className="col-md-12">
     <div className="wetherBg">
       <h1 className="heading">Weather App</h1>
       <div className="d-grid gap-3 col-4 mt-4">

          <form class="nosubmit">
          <input className="nosubmit"   value={inputCity}
                    onChange={handleChangeInput}  type="search" placeholder="Search..." style={{color:'white'}}/>
          </form>

         <button className="btn btn-primary" type="button"
           onClick={handleSearch}>Search</button>
       </div>
      </div>



     {
     Object.keys(data).length > 0 &&
       <div className="col-md-12 text-center mt-5">

         <div className="shadow rounded wetherResultBox">
         <section>
        <div class='air air1'></div>
        <div class='air air2'></div>
        <div class='air air3'></div>
        <div class='air air4'></div>
      
          
           <img className="weathorIcon"
             src="https://purepng.com/public/uploads/medium/purepng.com-weather-icon-ios-7symbolsiconsapple-iosiosios-7-iconsios-7-721522596694jxtmh.png " />

           <h5 className="weathorCity">
             {data?.name}
           </h5>
           <h6 className="weathorTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
           </section>
         </div>
         
       </div>
       

       
     }

   </div>
   

  )
};

export default Temp
