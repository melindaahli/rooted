import shelf from "../assets/shelf.svg";
import arrow from "../assets/nocircle_arrow.svg";
import flower from "../assets/flower.svg";
import leafy from "../assets/leafy.svg";
import succulent from "../assets/succulent.svg";
import GardenPlant from "../components/GalleryPlant.tsx";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const plantImages: any = {
    flower,
    leafy,
    succulent
};

function GalleryView() {
    const navigate = useNavigate();
    const [plants, setPlants] = useState<any[]>([]);

    useEffect(() => {
    const stored =
        JSON.parse(localStorage.getItem("plants") || "[]");

        setPlants(stored);
}, []);

    return (
     
    <div className="blue_background">
        {/* <div className=" flex flex-row align-center gap-2 row-start-1 row-end-2" onClick={() => { navigate("/gallery")}}>
            <img src={arrow} style={{ width: '8px', height: 'auto', transform: 'rotate(180deg)' }}/>
            <p className="m-0">Garden</p>
        </div> */}

        <div className="nav" onClick={() => { navigate("/dashboard")}}>
            <img src={arrow} style={{ width: '8px', height: 'auto', transform: 'rotate(180deg)' }} />
            <p className="nav_text mb-0">Dashboard</p>
        </div>
        
        <div className="tan-card">
            <div className="header" onClick={() => { navigate("/add-plant")}} >
                <h1 className="gallery-title">My Garden</h1>
                <button className="add_plant"><p className="m-0">+ Add Plant</p></button>
            </div>
            
            <div className="plant_scroll">
                <div className="plant-section">
                    <div className="plants-row">
                        <GardenPlant name="sharty bae" plantImage={leafy} />
                        <GardenPlant name="hottie hottie" plantImage={succulent} />
                    </div>
                    <img src={shelf} alt="shelf"className="shelf-img"/>
                </div>

                <div className="plant-section">
                    <div className="plants-row">
                        <GardenPlant name="Barthlomew" plantImage={flower} />
                        <GardenPlant name="Airoma" plantImage={succulent} />
                    </div>

                    <img src={shelf} alt="shelf"className="shelf-img"/>
                </div>

                <div className="plant-section">
                    <div className="plants-row">
                        <GardenPlant name="Sea Bass" plantImage={leafy} />
                        {plants.map((plant, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                // Clear all plants from localStorage
                                localStorage.removeItem("plants");

                                // Reset gallery state to empty
                                setPlants([]);
                                }}
                            >
                                <GardenPlant
                                name={plant.name}
                                plantImage={plantImages[plant.image]}
                                />
                            </div>
                            ))}
                    </div>

                    <img src={shelf} alt="shelf"className="shelf-img"/>
                </div>
                
            </div>
            
        </div>
    </div>
    
    );
}

export default GalleryView;