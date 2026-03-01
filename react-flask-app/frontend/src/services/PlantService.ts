// import axios from 'axios';

// const API_URL = 'https://127.0.0.1';

// export const fetchData = async (endpoint) => {
//     try {
//         const response = await axios.get('${API_URL}/${endpoint}');
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching plant data:', error);
//         throw error;
//     }
// }

// async function getAll() {
//     const endpoint = '/api/data';
//     try {
//         const result = await axios.get(endpoint);
//         return result.data || [];
//     } catch (error) {
//         console.error('Error fetching plant data: ', error);
//         throw error;
//     }
// }

// export const PlantService = {
//     getAll
// };


// TEST DATA DELETE LATER
import { PlantData } from "../data/plant-data";

export async function fetchPlants(): Promise<PlantData[]> {
  // simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const dummyData = [
    {
      plantId: "1",
      airTempF: 95,
      humidity: 40,
      soilMoisture: 10,
      lightLevel: 800
    },
    {
      plantId: "2",
      airTempF: 75,
      humidity: 60,
      soilMoisture: 50,
      lightLevel: 500
    }
  ];

  return dummyData.map(data => new PlantData(data));
}