import { useState } from 'react';
import ProgressCard from "../components/ProgressCard.tsx";
import PlantShelf from "../components/PlantShelf.tsx";
import { useNavigate } from 'react-router-dom';

import humidity from "../assets/humidity.svg";
import arrow from "../assets/nocircle_arrow.svg"
import HealthScoreHeart from '../components/HealthScoreHeart.tsx';
 
function SinglePlantView() {
    const navigate = useNavigate();

    const plantName: string = "plant name";
    const speciesName: string = "species name";

    // 1: Details
    // 2: Recommended Tasks
    // 3: Gallery
    let [segmentViewId, setSegmentViewId] = useState<number>(1);

    var currentTemp: number = 100;
    var maxTemp: number = 80;

    var currentHumidity: number = 83;
    var maxHumidity: number = 100;

    var currentLight: number = 70;
    var maxLight: number = 100;

    var currentMoisture: number = 70;
    var maxMoisture: number = 100;

    var healthScore = calculateScore();

    function calculateScore() {
        return ( getPartialScore(currentTemp, maxTemp) + getPartialScore(currentHumidity, maxHumidity) 
                 + getPartialScore(currentLight, maxLight) + getPartialScore(currentMoisture, maxMoisture) ) / 4 * 100;
    }

    function getPartialScore(curr: number, max: number) {
        var percentage = curr/max;
        if (percentage > 1 || percentage < 0) return percentage % 1;
        return percentage;
    }

    function renderSegmentView() {
        if (segmentViewId === 1) {
            return (
                <div className="flex flex-col justify-around gap-2">
                    <ProgressCard category="Temperature" srcIcon={humidity} currentVal={currentTemp} maxVal={maxTemp} />
                    <ProgressCard category="Humidity Level" iconSrc="/../assests/humidity.svg" currentVal={currentHumidity} maxVal={maxHumidity} />
                    <ProgressCard category="Light Level" iconSrc="/../assests/light.svg" currentVal={currentLight} maxVal={maxLight} />
                    <ProgressCard category="Moisture Level" iconSrc="/../assests/humidity.svg" currentVal={currentMoisture} maxVal={maxMoisture} />
                </div>
            );
        } else if (segmentViewId === 2) {
            return <>recommended tasks</>;
        } else {
            return <>gallery</>;
        }
    }

    return (
    <div className="grid grid-cols-1 grid-rows-10 p-4 tan_background no-flex">
        <div className=" flex flex-row align-center row-start-1 row-end-2" onClick={() => { navigate("/gallery")}}>
            <img src={arrow} style={{ width: '8px', height: 'auto', transform: 'rotate(180deg)' }}/>
            <p className="m-0 nav_text">Garden</p>
        </div>


        <PlantShelf />

        <div className="flex flex-row justify-between align-middle row-start-5 row-end-6 m-2">
            <div className="flex flex-col justify-start align-middle">
                <h1 className="gamja-flower mb-0">{plantName}</h1>
                <p className="text-start mb-0">{speciesName}</p>
            </div>
            <div className="flex flex-col justify-center">
                <HealthScoreHeart score={healthScore} />
            </div>
        </div>
        
        <div className="flex flex-row justify-around row-start-7 row-end-10 p-2">
            <div className="" onClick={() => { setSegmentViewId(1) }}>
                <p className={`text-sm m-0 ${segmentViewId == 1 ? 'underline' : 'no-underline'}`}>Details</p>
            </div>
            <div className="" onClick={() => { setSegmentViewId(2) }}>
                <p className={`text-sm m-0 ${segmentViewId == 2 ? 'underline' : 'no-underline'}`}>Recommended Tasks</p>
            </div>
            <div className="" onClick={() => { setSegmentViewId(3) }}>
                <p className={`text-sm m-0 ${segmentViewId == 3 ? 'underline' : 'no-underline'}`}>Gallery</p>
            </div>
        </div>

        <div className="scroll-container">
            {renderSegmentView()}
        </div>

    </div>
    );
}

export default SinglePlantView;