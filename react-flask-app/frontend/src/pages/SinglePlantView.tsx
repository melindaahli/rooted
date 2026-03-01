import { useState } from 'react';
import ProgressCard from "../components/ProgressCard.tsx";
import PlantShelf from "../components/PlantShelf.tsx";
import { useNavigate } from 'react-router-dom';

import humidity from "../assets/humidity.svg";
import arrow from "../assets/nocircle_arrow.svg"
 
function SinglePlantView() {
    const navigate = useNavigate();

    const plantName: string = "plant name";
    const speciesName: string = "species name";

    // 1: Details
    // 2: Recommended Tasks
    // 3: Gallery
    let [segmentViewId, setSegmentViewId] = useState<number>(1);

    function renderSegmentView() {
        if (segmentViewId === 1) {
            return (
                <div className="flex flex-col gap-2 justify-around">
                    <ProgressCard category="Temperature" srcIcon={humidity} currentVal="74" maxVal="80" />
                    <ProgressCard category="Humidity Level" iconSrc="/../assests/humidity.svg" currentVal="83" maxVal="100" />
                    <ProgressCard category="Light Level" iconSrc="/../assests/light.svg" currentVal="70" maxVal="100" />
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
        <div className=" flex flex-row align-center gap-2 row-start-1 row-end-2" onClick={() => { navigate("/gallery")}}>
            <img src={arrow} style={{ width: '8px', height: 'auto', transform: 'rotate(180deg)' }}/>
            <p className="m-0">Garden</p>
        </div>


        <PlantShelf />

        <div className="flex flex-row justify-between align-middle row-start-5 row-end-6 m-2">
            <div className="flex flex-col justify-start align-middle">
                <h1 className="gamja-flower mb-0">{plantName}</h1>
                <p className="text-start mb-0">{speciesName}</p>
            </div>
            <div className="flex flex-col justify-center">
                <img alt="progress heart" />
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