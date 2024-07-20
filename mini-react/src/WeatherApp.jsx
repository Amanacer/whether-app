import SearchBox from "./Serach Box"
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [WeatherInfo, setWeatherInfo]= useState({
        
            city: "Delhi",
            feeisLike: 20.88,
            humidity: 64,
             temp: 21.05,
            tempMax: 21.05,
             tempMin: 21.05,
            weather: "smoke",
        
    });

    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);

    }
    return(
        
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={WeatherInfo}/>
        </div>
    );
}