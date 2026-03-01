import type { Task } from "../models/Task";

interface PlantDataModel {
    plantId: string;
    name: string;
    airTempF?: number;
    humidity?: number;
    soilMoisture?: number;
    lightLevel?: number;
}

export class PlantData {
    plantId: string;
    name: string;
    airTempF: number;
    humidity: number;
    soilMoisture: number;
    lightLevel: number;
    tasks: Task[];

    constructor(objectModel:PlantDataModel) {
        this.plantId = objectModel['plantId'] ?? "";
        this.name = objectModel['name'] ?? "";
        this.airTempF = objectModel['airTempF'] ?? 0;
        this.humidity = objectModel['humidity'] ?? 0;
        this.soilMoisture = objectModel['soilMoisture'] ?? 0;
        this.lightLevel = objectModel['lightLevel'] ?? 0;

        this.tasks = this.generateTasks();
    }

    private generateTasks(): Task[] {
        const tasks: Task[] = [];

        if (this.soilMoisture < 20) {
        tasks.push({
            id: `${this.plantId}-water`,
            plantId: this.plantId,
            title: "moisture",
            status: "pending",
            message: "Please water your plant!"
        });
        }

        if (this.airTempF > 90) {
        tasks.push({
            id: `${this.plantId}-temperature`,
            plantId: this.plantId,
            title: "temperature",
            status: "pending",
            message: "Please cool down your plant!"
        });
        }

        if (this.humidity > 70) { // todo
        tasks.push({
            id: `${this.plantId}-humidity`,
            plantId: this.plantId,
            title: "humidity",
            status: "pending",
            message: "Please humidify your plant!"
        });
        }

        if (this.lightLevel > 600) { // todo
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