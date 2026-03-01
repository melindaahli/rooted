import RightArrow from '../assets/arrow_right.svg';
import Plant from '/favicon.svg';
import Flower from '../assets/flower.svg';
import Leafy from '../assets/leafy.svg';
import Succulent from '../assets/succulent.svg';
import { useNavigate } from 'react-router-dom';
import { usePlants } from "../context/PlantContext";
import TaskCard from "../components/TaskCard.tsx";
import FavoritePlant from '../components/FavoritePlant.tsx';
import type { PlantType } from '../data/plant-data';


function DashboardView() {
    const navigate = useNavigate();
    const { plants, allTasks } = usePlants();

    const plantTypeImages: Record<PlantType, string> = {
        flower: Flower,
        leafy: Leafy,
        succulent: Succulent
    };

    console.log(plants)

    return (
    <div className="blue_background">
        <div className="h-50">
            <p className="text-[25px] text-left pt-6.25 pl-7.5">welcome back, <br />
                <span className="font-bold text-4xl m-0">flora</span>
            </p>
        </div>
        <div className="flex justify-end -my-1 mr-12 gap-2">
             <img src={Plant} className="w-27"/>
        </div>
       
        <div className="tan-card-dashboard">
            <header className="flex items-center justify-between w-full h-11.25 mb-2">
                <h2 className="dashboard-title">My Garden</h2>
                <div onClick={() => { navigate("/gallery")}}>
                    <img src={RightArrow} className="w-11.25"/>
                </div>
            </header>
            <section className="favorite-plant-scroll self-start"> 
                {plants
                    .filter(p => p.favorite)
                    .map((plant) => (
                        <FavoritePlant
                            key={plant.plantId}
                            plant={plant}
                            image={plantTypeImages[plant.plantType]}
                        />
                ))}
            </section>
            <p className="dashboard-title self-start mt-2">Recommended Tasks</p>
            <div className="scroll-container pb-2.5">
                <section className="flex flex-col justify-start align-center gap-2"> 
                    {allTasks.map(task => {
                        const plant = plants.find(p => p.plantId === task.plantId);

                        return (
                            <TaskCard task={task} plant={plant}/>
                        );
                    })}
                </section>
            </div>
            
        </div>
    </div>
    );
}

export default DashboardView;