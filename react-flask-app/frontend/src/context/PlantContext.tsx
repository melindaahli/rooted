import { createContext, useContext, useEffect, useState } from "react";
import { fetchPlants } from "../services/PlantService";
import { PlantData } from "../data/plant-data";
import type { Task } from "../models/Task";

interface PlantContextType {
  plants: PlantData[];
  allTasks: Task[];
}

const PlantContext = createContext<PlantContextType | null>(null);

export function PlantProvider({ children }: { children: React.ReactNode }) {
  const [plants, setPlants] = useState<PlantData[]>([]);

  useEffect(() => {
    async function loadPlants() {
      const plantData = await fetchPlants();
      setPlants(plantData);
    }

    loadPlants();
  }, []);

  const allTasks = plants.flatMap(plant => plant.tasks);

  return (
    <PlantContext.Provider value={{ plants, allTasks }}>
      {children}
    </PlantContext.Provider>
  );
}

export function usePlants() {
  const context = useContext(PlantContext);
  if (!context) {
    throw new Error("usePlants must be used within PlantProvider");
  }
  return context;
}

// export async function getName(plantId: string) {
//     const plantData = await fetchPlants();
//     for (let i: number = 0; i < plantData.length; i++){
//         if (plantId === plantData[i].plantId){
//             return plantData[i].name;
//         }
//     }
//     return "Plant Plant";
// }