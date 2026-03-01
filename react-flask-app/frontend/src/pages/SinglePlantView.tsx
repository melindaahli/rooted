import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePlants } from "../context/PlantContext";
import ProgressCard from "../components/ProgressCard";
import PlantShelf from "../components/PlantShelf";
import HealthScoreHeart from "../components/HealthScoreHeart";
import TaskCard from "../components/TaskCard";

import humidity from "../assets/humidity.svg";
import temperature from "../assets/temperature.svg";
import light from "../assets/light.svg";

import arrow from "../assets/nocircle_arrow.svg";

function SinglePlantView() {
  const { plantId } = useParams();
  const navigate = useNavigate();
  const { plants } = usePlants();

  const lightLevels = ["Lowlight", "Indirect Light", "Partial Sun", "Full Sun"];
  const moistureLevels = ["No Moisture", "Dry Dirt", "Moist Dirt", "Soaked Dirt"];

  const plant = plants.find(p => p.plantId === plantId);
  const [segmentViewId, setSegmentViewId] = useState<number>(1);

  if (!plant) return <div className="p-4">Loading plant...</div>;

  // Current and recommended values
  const currentTemp = plant.airTempF;
  const maxTemp = plant.recAirTempF;

  const currentHumidity = plant.humidity;
  const maxHumidity = plant.recHumidity;

  const currentLight = plant.lightLevel;
  const recommendedLight = plant.recLightLevel;

  function getMoistureStatus(soilMoisture: number) {
    if (soilMoisture === 0) return "No Moisture";
    if (soilMoisture > 0 && soilMoisture < 200) return "Dry Dirt";
    if (soilMoisture >= 200 && soilMoisture <= 350) return "Moist Dirt";
    if (soilMoisture > 350) return "Soaked Dirt";
    return "No data";
  }

  const currentMoisture = getMoistureStatus(plant.soilMoisture);
  const recommendedMoisture = getMoistureStatus(plant.recSoilMoisture);

  // Generic partial score function
  function getPartialScore(curr: number | string | undefined, max: number | string): number {
    if (typeof curr === "number" && typeof max === "number") {
      if (max === 0) return 0;
      let percentage = curr / max;
      return percentage >= 0 && percentage <= 1 ? percentage : percentage % 1.0;
    }

    if (typeof curr === "string" && typeof max === "string") {
      if (lightLevels.includes(curr) && lightLevels.includes(max)) {
        const diff = Math.abs(lightLevels.indexOf(curr) - lightLevels.indexOf(max));
        return 1 - diff / (lightLevels.length - 1);
      }
      if (moistureLevels.includes(curr) && moistureLevels.includes(max)) {
        const diff = Math.abs(moistureLevels.indexOf(curr) - moistureLevels.indexOf(max));
        return 1 - diff / (moistureLevels.length - 1);
      }
    }
    return 0;
  }

  // Numeric scores
  const tempScore = getPartialScore(currentTemp, maxTemp);
  const humidityScore = getPartialScore(currentHumidity, maxHumidity);
  const moistureScore = getPartialScore(currentMoisture, recommendedMoisture);
  const lightScore = getPartialScore(currentLight, recommendedLight);

  const healthScore = Math.round(((tempScore + humidityScore + moistureScore + lightScore) / 4) * 100);

  // Health string functions
  function getNumericHealthString(score: number): "Good" | "Okay" | "Bad" {
    if (score >= 0.85) return "Good";
    if (score >= 0.6) return "Okay";
    return "Bad";
  }

  function getDiscreteHealthString(current: string, recommended: string, scale: string[]): "Good" | "Okay" | "Bad" {
    const currIndex = scale.indexOf(current);
    const recIndex = scale.indexOf(recommended);
    if (currIndex === -1 || recIndex === -1) return "Bad";
    const diff = Math.abs(currIndex - recIndex);
    if (diff === 0) return "Good";
    if (diff === 1) return "Okay";
    return "Bad";
  }

  // Individual health strings
  const tempHealthString = getNumericHealthString(tempScore);
  const humidityHealthString = getNumericHealthString(humidityScore);
  const moistureHealthString = getDiscreteHealthString(currentMoisture, recommendedMoisture, moistureLevels);
  const lightHealthString = getDiscreteHealthString(currentLight, recommendedLight, lightLevels);


  function renderSegmentView() {
    if (segmentViewId === 1) {
      return (
        <div className="flex flex-col gap-2">
          <ProgressCard
            category="Temperature"
            healthString={tempHealthString}
            srcIcon={temperature}
            currentVal={currentTemp}
            maxVal={maxTemp}
          />
          <ProgressCard
            category="Humidity"
            healthString={humidityHealthString}
            srcIcon={humidity}
            currentVal={currentHumidity}
            maxVal={maxHumidity}
          />
          <ProgressCard
            category="Light"
            healthString={lightHealthString}
            srcIcon={light}
            currentText={currentLight}
          />
          <ProgressCard
            category="Moisture"
            healthString={moistureHealthString}
            srcIcon={humidity}
            currentText={currentMoisture}
          />
        </div>
      );
    } else if (segmentViewId === 2) {
      return (plant &&
        <div className="flex flex-col gap-2">
          {plant.tasks.length === 0
            ? "No tasks!"
            : plant.tasks.map(task => (
                <TaskCard key={task.id} task={task} showName={false} />
              ))}
        </div>
      );
    } else {
      return <>Gallery coming soon</>;
    }
  }

  return (
    <div className="grid grid-cols-1 grid-rows-10 px-4 pt-4 tan_background">
      <div
        className="flex flex-row items-center"
        onClick={() => navigate("/gallery")}
      >
        <img
          src={arrow}
          style={{ width: "8px", transform: "rotate(180deg)" }}
        />
        <p className="m-0 nav_text">Garden</p>
      </div>

      <PlantShelf
        plantType={plant.plantType}
        onPrev={() => {
            const prevId = Number(plantId) - 1;
            const loopedPrev = prevId < 1 ? 5 : prevId; 
            navigate(`/plant/${loopedPrev}`);
        }}
        onNext={() => {
            const nextId = Number(plantId) + 1;
            const loopedNext = nextId > 5 ? 1 : nextId;
            navigate(`/plant/${loopedNext}`);
        }}
      />

      <div className="flex justify-between m-2">
        <div>
          <h1 className="gamja-flower mb-0">{plant.name}</h1>
          <p className="mb-0 text-start">{plant.plantType}</p>
        </div>

        <HealthScoreHeart score={healthScore} />
      </div>

      <div className="flex justify-between p-2">
        <div onClick={() => setSegmentViewId(1)}>
          <p className={segmentViewId === 1 ? "underline" : ""}>Details</p>
        </div>
        <div onClick={() => setSegmentViewId(2)}>
          <p className={segmentViewId === 2 ? "underline" : ""}>
            Recommended Tasks
          </p>
        </div>
        <div onClick={() => setSegmentViewId(3)}>
          <p className={segmentViewId === 3 ? "underline" : ""}>Gallery</p>
        </div>
      </div>

      <div className="scroll-container pb-3">{renderSegmentView()}</div>
    </div>
  );
}

export default SinglePlantView;