import shelf from "../assets/shelf.svg";
import arrow from "../assets/nocircle_arrow.svg";
import flower from "../assets/flower.svg";
import leafy from "../assets/leafy.svg";
import succulent from "../assets/succulent.svg";
import GardenPlant from "../components/GalleryPlant.tsx";
import { useNavigate } from "react-router-dom";
import { usePlants } from "../context/PlantContext";

function GalleryView() {
  const navigate = useNavigate();
  const { plants } = usePlants();

  // map plant type to image
  const plantImages: Record<string, string> = {
    flower,
    leafy,
    succulent,
  };

  // chunk plants into rows of 2
  const chunkPlants = (arr: any[], size: number) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const plantRows = chunkPlants(plants, 2);

  return (
    <div className="blue_background">
      <div className="nav" onClick={() => navigate("/dashboard")}>
        <img
          src={arrow}
          style={{ width: "8px", height: "auto", transform: "rotate(180deg)" }}
        />
        <p className="nav_text mb-0">Dashboard</p>
      </div>

      <div className="tan-card">
        <div className="header" onClick={() => navigate("/add-plant")}>
          <h1 className="gallery-title">My Garden</h1>
          <button className="add_plant">
            <p className="m-0">+ Add Plant</p>
          </button>
        </div>

        <div className="plant_scroll">
          {plantRows.map((row, rowIndex) => (
            <div key={rowIndex} className="plant-section">
              <div className="plants-row">
                {row.map((plant) => (
                  <div key={plant.plantId} onClick={() => navigate(`/plant/${plant.plantId}`)} style={{ cursor: "pointer" }} >
                    <GardenPlant name={plant.name} plantImage={plantImages[plant.plantType] || leafy} />
                  </div>
                ))}
              </div>
              <img src={shelf} alt="shelf" className="shelf-img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryView;