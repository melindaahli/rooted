import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePlants } from "../context/PlantContext";
import ProgressCard from "../components/ProgressCard";
import PlantShelf from "../components/PlantShelf";
import HealthScoreHeart from "../components/HealthScoreHeart";

import humidity from "../assets/humidity.svg";
import arrow from "../assets/nocircle_arrow.svg";

function SinglePlantView() {
  const { plantId } = useParams();
  const navigate = useNavigate();
  const { plants } = usePlants();

  const plant = plants.find(p => p.plantId === plantId);

  const [segmentViewId, setSegmentViewId] = useState<number>(1);

  if (!plant) {
    return <div className="p-4">Loading plant...</div>;
  }

  const currentTemp = plant.airTempF;
  const maxTemp = plant.recAirTempF;

  const currentHumidity = plant.humidity;
  const maxHumidity = plant.recHumidity;

  const currentLight = plant.lightLevel === "Indirect Light" ? 70 : 100;
  const maxLight = 100;

  const currentMoisture = plant.soilMoisture;
  const maxMoisture = plant.recSoilMoisture;

  function getPartialScore(curr: number, max: number) {
    if (max === 0) return 0;
    const percentage = curr / max;
    if (percentage > 1 || percentage < 0) return percentage % 1;
    return percentage;
  }

  function calculateScore() {
    return (
      (getPartialScore(currentTemp, maxTemp) +
        getPartialScore(currentHumidity, maxHumidity) +
        getPartialScore(currentLight, maxLight) +
        getPartialScore(currentMoisture, maxMoisture)) /
      4 *
      100
    );
  }

  const healthScore = Math.round(calculateScore());

  function renderSegmentView() {
    if (segmentViewId === 1) {
      return (
        <div className="flex flex-col gap-2">
          <ProgressCard
            category="Temperature"
            srcIcon={humidity}
            currentVal={currentTemp}
            maxVal={maxTemp}
          />
          <ProgressCard
            category="Humidity"
            srcIcon={humidity}
            currentVal={currentHumidity}
            maxVal={maxHumidity}
          />
          <ProgressCard
            category="Light"
            srcIcon={humidity}
            currentVal={currentLight}
            maxVal={maxLight}
          />
          <ProgressCard
            category="Moisture"
            srcIcon={humidity}
            currentVal={currentMoisture}
            maxVal={maxMoisture}
          />
        </div>
      );
    } else if (segmentViewId === 2) {
      return (plant &&
        <div>
          {plant.tasks.length === 0
            ? "No tasks!"
            : plant.tasks.map(task => (
                <div key={task.id}>{task.message}</div>
              ))}
        </div>
      );
    } else {
      return <>Gallery coming soon</>;
    }
  }

  return (
    <div className="grid grid-cols-1 grid-rows-10 p-4 tan_background">
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

      <PlantShelf />

      <div className="flex justify-between m-2">
        <div>
          <h1 className="gamja-flower mb-0">{plant.name}</h1>
          <p className="mb-0 text-start">{plant.plantType}</p>
        </div>

        <HealthScoreHeart score={healthScore} />
      </div>

      <div className="flex justify-around p-2">
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

      <div className="scroll-container">{renderSegmentView()}</div>
    </div>
  );
}

export default SinglePlantView;