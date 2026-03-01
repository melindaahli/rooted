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

    return (
    <div className="blue_background">
        <div className="h-[324px]">
            <p className="text-[25px] text-left pt-[25px] pl-[30px]">welcome back, shart</p>
        </div>
        <div className="flex justify-end -mb-1 mr-4">
             <img src={Plant} className="w-[100px]"/>
        </div>
       
        <div className="tan-card-dashboard">
            <header className="flex items-center justify-between w-full h-[45px]">
                <h2 className="dashboard-title">My Garden</h2>
                <div onClick={() => { navigate("/gallery")}}>
                    <img src={RightArrow} className="w-[45px]"/>
                </div>
            </header>
            <section className="favorite-plant-scroll self-start"> 
                {/* <FavoritePlant fakeplant={FakePlant}/>
                <FavoritePlant fakeplant={FakePlant}/>
                <FavoritePlant fakeplant={FakePlant}/> */}
                {plants
                    .filter(p => p.favorite)
                    .map((plant) => (
                        <FavoritePlant
                            key={plant.plantId}
                            image={plantTypeImages[plant.plantType]}
                        />
                ))}
            </section>
            <p className="dashboard-title self-start mt-2">Recommended Tasks</p>
            <div className="scroll-container">
                <section className="flex flex-col justify-start align-center gap-2"> {/* may turn into its own react component */}
                    {allTasks.map(task => {
                        const plant = plants.find(p => p.plantId === task.plantId);

                        return (
                            // <div key={task.id} className="pl-[15px] pt-[5px] w-[300px] h-[60px] bg-linear-to-t from-[#92cb4f4d] to-[#d4e6974d] rounded-[15px]">
                            // <p className="mb-0 text-start">
                            //     {plant?.name ?? "Unknown Plant"} - {task.title}
                            // </p>
                            // <p className="mb-0 text-start">{task.message}</p>
                            // </div>
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