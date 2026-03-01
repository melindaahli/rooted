import axios from 'axios';
import { PlantData } from "../data/plant-data";

const PRODUCTION = false; // CHANGE TO TRUE FOR LIVE SENSOR DATA
const API_URL = 'http://192.168.0.151:5000';

type SensorResponse = {
  id: number;
  moisture: number;
  temperature: number;
  humidity: number;
  light: string;
};

export async function fetchPlants(): Promise<PlantData[]> {
  const basePlants: PlantData[] = [
    new PlantData({
      plantId: "1",
      name: "sharty bae",
      plantType: "leafy",
      favorite: true,

      temperature: 0,
      humidity: 0,
      moisture: 0,
      light: "Full Sun",

      recTemperature: 85,
      recHumidity: 100,
      recMoisture: 260,
      recLight: "Partial Sun"
    }),
    new PlantData({
      plantId: "2",
      name: "hottie hottie",
      plantType: "succulent",
      favorite: false,

      temperature: 100,
      humidity: 100,
      moisture: 10,
      light: "Full Sun",

      recTemperature: 85,
      recHumidity: 100,
      recMoisture: 260,
      recLight: "Partial Sun"
    }),
    new PlantData({
      plantId: "3",
      name: "Bartholomew",
      plantType: "flower",
      favorite: true,

      temperature: 75,
      humidity: 80,
      moisture: 50,
      light: "Full Sun",

      recTemperature: 70,
      recHumidity: 100,
      recMoisture: 260,
      recLight: "Full Sun"
    }), 
    new PlantData({
      plantId: "4",
      name: "Airoma",
      plantType: "leafy",
      favorite: false,

      temperature: 99,
      humidity: 89,
      moisture: 50,
      light: "Full Sun",

      recTemperature: 85,
      recHumidity: 100,
      recMoisture: 260,
      recLight: "Partial Sun"
    }),
    new PlantData({
      plantId: "5",
      name: "Sea Bass",
      plantType: "succulent",
      favorite: true,

      temperature: 76,
      humidity: 80,
      moisture: 250,
      light: "Indirect Light",

      recTemperature: 90,
      recHumidity: 100,
      recMoisture: 260,
      recLight: "Partial Sun"
    })
  ];

  let sensorData: SensorResponse[] = [
    {
      id: 1,
      moisture: 222,
      temperature: 22,
      humidity: 22,
      light: "Indirect Light"
    }
  ];

  // fetch live sensor data
  if (PRODUCTION) {
    try {
      const response = await axios.get<SensorResponse[]>(`${API_URL}/api/sensors`);
      sensorData = Array.isArray(response.data) ? response.data : [response.data];
    } catch (error) {
      console.error('Error fetching plant data:', error);
    }
  }
  
  // merge sensor data into plants
  sensorData.forEach(sensor => {
    const plant = basePlants.find(
      p => p.plantId === sensor.id.toString()
    );

    if (plant) {
      plant.airTempF = sensor.temperature;
      plant.humidity = sensor.humidity;
      plant.soilMoisture = sensor.moisture;
      plant.lightLevel = sensor.light;
      plant.tasks = plant.generateTasks();
      console.log(plant);
    }
  });

  console.log(basePlants);
  return basePlants;
}
