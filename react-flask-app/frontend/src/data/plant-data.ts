interface PlantDataModel {
    // plantId?: number;
    airTempF?: number;
    humidity?: number;
    soilMoisture?: number;
    lightLevel?: number;
}

export class PlantData {
    // plantId: number | undefined;
    airTempF: number;
    humidity: number;
    soilMoisture: number;
    lightLevel: number;

    constructor(objectModel:PlantDataModel) {
       // this.plantId = objectModel['plantId'];
        this.airTempF = objectModel['airTempF'] ?? 0;
        this.humidity = objectModel['humidity'] ?? 0;
        this.soilMoisture = objectModel['soilMoisture'] ?? 0;
        this.lightLevel = objectModel['lightLevel'] ?? 0;
    }
}