import { useState } from "react";
import arrow from "../assets/nocircle_arrow.svg";
import favicon from "../assets/favicon.svg";

function AddPlant() {
  const [plantName, setPlantName] = useState("");
  const [plantSpecies, setPlantSpecies] = useState("");

  const handleAddPlant = () => {
    console.log("Plant Name:", plantName);
    console.log("Plant Species:", plantSpecies);
    // Here you can send the data to your backend or update state
  };

  return (
    <div className="blue_background">
      <div className="nav">
        <img src={arrow} style={{ transform: "rotate(180deg)" }} />
        <a className="nav_text" href="DashboardView.tsx">Dashboard</a>
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
          <button className="cancel" onClick={() => console.log("Cancelled")}>
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