interface GardenPlantProps {
  name: string;          // Plant name
  plantImage: string;    // Image of the plant
}

function GardenPlant({ name, plantImage }: GardenPlantProps) {
  return (
    <div>
      {/* Plant name */}
      <p className="plant_text">{name}</p>

      {/* Plant image */}
      <img src={plantImage} alt={name}/>
    </div>
  );
}

export default GardenPlant;