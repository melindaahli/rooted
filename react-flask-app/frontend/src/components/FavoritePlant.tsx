import Heart from "../assets/heart.svg";
import { useNavigate } from 'react-router-dom';
import type { PlantData } from "../data/plant-data";

interface FavoritePlantProps {
    plant: PlantData
    image: string;
}

function FavoritePlant({ plant, image }: FavoritePlantProps) {
    const navigate = useNavigate(); 

    return (
        <div className="plant-card shrink-0" onClick={() => navigate(`/plant/${plant.plantId}`)}>
            <div className="relative inline-block">
                <img src={image} className="h-37.5" />

                <img
                    src={Heart}
                    alt="heart"
                    className="scale-30 absolute top-1/8 left-1/4 
//                             translate-x-1/3 -translate-y-2/5
//                             m-0 font-bold z-50"
                />
            </div>
        </div>
    );
}

export default FavoritePlant;