import { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../assets/nocircle_arrow.svg";
import favicon from "/favicon.svg";

function AddPlant() {
  const [plantName, setPlantName] = useState("");
  const [plantSpecies, setPlantSpecies] = useState("");

  const navigate = useNavigate();

  const handleAddPlant = () => {
    console.log("Plant Name:", plantName);
    console.log("Plant Species:", plantSpecies);
    // Here you can send the data to your backend or update state
  };

  return (
    <div className="blue_background">
      <div className="nav" onClick={() => navigate("/dashboard")}>
        <img src={arrow} style={{ width: '8px', height: 'auto', transform: 'rotate(180deg)' }} />
        <p className="nav_text m-0">Dashboard</p>
      </div>

      <div className="tan-card">
        <div className="header">
          <h1 className="gallery-title">Add Plant</h1>
        </div>

        <br></br>
        {/* Plant Name */}
        <p className="dashboard-title self-start">Plant Name</p>
        <input
          type="text"
          value={plantName}
          onChange={(e) => setPlantName(e.target.value)}
          placeholder="Enter plant name"
          className="textInput"
        />
        <br></br>
        {/* Plant Species */}
        <p className="dashboard-title self-start">Plant Species</p>
        <input
          type="text"
          value={plantSpecies}
          onChange={(e) => setPlantSpecies(e.target.value)}
          placeholder="Enter plant species"
          className="textInput"
        />

        <br></br>
        {/* Buttons */}
        <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
          <button className="cancel" onClick={() => navigate("/gallery")}>
            Cancel
          </button>
          <button className="add_plant" onClick={handleAddPlant}>
            Add Plant
          </button>
        </div>
        
        <img className="bottom_icon" src={favicon} style={{width: "170px", height: "auto"}} />
      </div>
    </div>
  );
}

export default AddPlant;