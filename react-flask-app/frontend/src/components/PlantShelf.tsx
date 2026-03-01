import LeftButton from "../assets/arrow_left.svg"
import RightButton from "../assets/arrow_right.svg";
import Plant from "../assets/plant_placeholder.png";
import Shelf from "../assets/shelf.svg";

function PlantShelf() {
    return (
    <div className="flex flex-row justify-between align-center my-3">
        <div className="flex w-[100px] align-center">
            <img src={LeftButton} className="scale-50" />
        </div>
        <div className="flex flex-col justify-center">
            <img src={Plant} />
            <img src={Shelf} />
        </div>
        <div className="flex w-[100px] align-center">
            <img src={RightButton} className="scale-50" />
        </div>
    </div>
);
}

export default PlantShelf;