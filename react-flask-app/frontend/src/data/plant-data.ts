import type { Task } from "../models/Task";

interface PlantDataModel {
    plantId: string;
    name: string;
    plantType: string;
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
    plantType: string;
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

        if (this.soilMoisture < this.recSoilMoisture) {
        tasks.push({
            id: `${this.plantId}-water`,
            plantId: this.plantId,
            title: "moisture",
            status: "pending",
            message: "Please water your plant!"
        });
        }

        if (this.airTempF > this.recAirTempF) {
        tasks.push({
            id: `${this.plantId}-temperature`,
            plantId: this.plantId,
            title: "temperature",
            status: "pending",
            message: "Please cool down your plant!"
        });
        }

        if (this.humidity > this.recHumidity) { // todo
        tasks.push({
            id: `${this.plantId}-humidity`,
            plantId: this.plantId,
            title: "humidity",
            status: "pending",
            message: "Please humidify your plant!"
        });
        }

        if (this.lightLevel > this.recLightLevel) { // todo
        tasks.push({
            id: `${this.plantId}-light`,
            plantId: this.plantId,
            title: "light",
            status: "pending",
            message: "Please light up your plant's world!"
        });
        }

        return tasks;

    }
}