import axios from 'axios';
import { PlantData } from "../data/plant-data";

const PRODUCTION = true;
const API_URL = 'http://172.31.76.126:5000';

type SensorResponse = {
  id: number;
  moisture: number;
  temperature: number;
  humidity: number;
  light: string;
};

export async function fetchPlants(): Promise<PlantData[]> {
  const basePlants = [
    {
      plantId: "1",
      name: "sharty bae",
      temperature: 95,
      humidity: 40,
      moisture: 10,
      light: "Indirect Light",

      recTemperature: 100,
      recHumidity: 100,
      recMoisture: 100,
      recLight: "Partial Sun"
    },
    {
      plantId: "2",
      name: "hottie hottie"
      temperature: 75,
      humidity: 80,
      moisture: 50,
      light: "Indirect Light",

      recTemperature: 100,
      recHumidity: 100,
      recMoisture: 100,
      recLight: "Partial Sun"
    },
    {
      plantId: "3",
      name: "Bartholomew"
      temperature: 75,
      humidity: 80,
      moisture: 50,
      light: "Indirect Light",

      recTemperature: 100,
      recHumidity: 100,
      recMoisture: 100,
      recLight: "Partial Sun"
    }, 
    {
      plantId: "4",
      name: "Airoma",
      temperature: 75,
      humidity: 80,
      moisture: 50,
      light: "Indirect Light",

      recTemperature: 100,
      recHumidity: 100,
      recMoisture: 100,
      recLight: "Partial Sun"
    },
    {
      plantId: "5",
      name: "Sea Bass",
      temperature: 75,
      humidity: 80,
      moisture: 50,
      light: "Indirect Light",

      recTemperature: 100,
      recHumidity: 100,
      recMoisture: 100,
      recLight: "Partial Sun"
    }
  ].map(p => new PlantData(p));

  let sensorData: SensorResponse[] = [
    {
      id: 1,
      moisture: 72,
      temperature: 70,
      humidity: 400,
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
      console.log(plant)
    }
  });

  return basePlants;
}
