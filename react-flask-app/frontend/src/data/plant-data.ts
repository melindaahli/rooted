import type { Task } from "../models/Task";
export type PlantType = "flower" | "leafy" | "succulent";

interface PlantDataModel {
    plantId: string;
    name: string;
    plantType: PlantType;
    favorite: boolean;

    temperature?: number;
    humidity?: number;
    moisture?: number;
    light?: string;

    recTemperature: number;
    recHumidity: number;
    recMoisture: number;
    recLight: string;
}

export class PlantData {
    plantId: string;
    name: string;
    plantType: PlantType;
    favorite: boolean;

    airTempF: number;
    humidity: number;
    soilMoisture: number;
    lightLevel: string;

    recAirTempF: number;
    recHumidity: number;
    recSoilMoisture: number;
    recLightLevel: string;

    tasks: Task[];

    constructor(objectModel:PlantDataModel) {
        this.plantId = objectModel['plantId'] ?? "";
        this.name = objectModel['name'] ?? "";
        this.plantType = objectModel['plantType'] ?? "leafy";
        this.favorite = objectModel['favorite'] ?? false;

        this.airTempF = objectModel['temperature'] ?? 0;
        this.humidity = objectModel['humidity'] ?? 0;
        this.soilMoisture = objectModel['moisture'] ?? 0;
        this.lightLevel = objectModel['light'] ?? "No Light Data";

        this.recAirTempF = objectModel['recTemperature'] ?? 100;
        this.recHumidity = objectModel['recHumidity'] ?? 100;
        this.recSoilMoisture = objectModel['recMoisture'] ?? 100;
        this.recLightLevel = objectModel['recLight'] ?? 100;

        this.tasks = this.generateTasks();
    }

    public generateTasks(): Task[] {
    const tasks: Task[] = [];

    const lightLevels = ["Lowlight", "Indirect Light", "Partial Sun", "Full Sun"];

    // Soil moisture: too low or too high
    if (this.soilMoisture < this.recSoilMoisture * 0.9) {
        tasks.push({
            id: `${this.plantId}-water`,
            plantId: this.plantId,
            title: "moisture",
            status: "pending",
            message: "Your plant is too dry!"
        });
    } else if (this.soilMoisture > this.recSoilMoisture * 1.1) {
        tasks.push({
            id: `${this.plantId}-moisture-high`,
            plantId: this.plantId,
            title: "moisture",
            status: "pending",
            message: "Your plant is drowning!"
        });
    }

    // Temperature: too hot or too cold
    if (this.airTempF < this.recAirTempF - 5) {
        tasks.push({
            id: `${this.plantId}-temp-low`,
            plantId: this.plantId,
            title: "temperature",
            status: "pending",
            message: "Your plant is too cold! Warm it up!"
        });
    } else if (this.airTempF > this.recAirTempF + 5) {
        tasks.push({
            id: `${this.plantId}-temp-high`,
            plantId: this.plantId,
            title: "temperature",
            status: "pending",
            message: "Your plant is burning up!."
        });
    }

    // Humidity: too low or too high
    if (this.humidity < this.recHumidity - 10) {
        tasks.push({
            id: `${this.plantId}-humidity-low`,
            plantId: this.plantId,
            title: "humidity",
            status: "pending",
            message: "More humidity please!"
        });
    } else if (this.humidity > this.recHumidity + 10) {
        tasks.push({
            id: `${this.plantId}-humidity-high`,
            plantId: this.plantId,
            title: "humidity",
            status: "pending",
            message: "Too much humidity!"
        });
    }

    // Light: compare positions in lightLevels array
    const currentLightIndex = lightLevels.indexOf(this.lightLevel);
    const recLightIndex = lightLevels.indexOf(this.recLightLevel);

    if (currentLightIndex < recLightIndex) {
        tasks.push({
            id: `${this.plantId}-light-low`,
            plantId: this.plantId,
            title: "light",
            status: "pending",
            message: "Light up your plant's world!"
        });
    } else if (currentLightIndex > recLightIndex) {
        tasks.push({
            id: `${this.plantId}-light-high`,
            plantId: this.plantId,
            title: "light",
            status: "pending",
            message: "Your plant is getting too much light!"
        });
    }

    return tasks;
}
}