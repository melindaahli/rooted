import ProgressBar from 'react-bootstrap/ProgressBar';
import Temperature from '../assets/temperature.svg';
import Humidity from '../assets/humidity.svg';
import Light from '../assets/light.svg';

function ProgressCard(props: any) {
    const category: string = props.category;
    
    const currentVal: number = props.currentVal;
    const maxVal: number = props.maxVal;

    const plantHealthString: string = currentVal / maxVal > 0.8 && currentVal / maxVal <= 1.0 ? "Good" : "Bad";
    const barVariant: string = plantHealthString == "Good" ? "success" : "danger";

    // var healthScore = 

    function renderIcon() {
        if (category === "Temperature") {
            return (<img src={Temperature} className="scale-50" />);
        } else if (category === "Humidity Level") {
            return (<img src={Humidity} className="scale-50" />);
        } else if (category === "Light Level") {
            return (<img src={Light} className="scale-50" />);
        } else {
            return (<img src={Temperature} />);
        }
    }
    
    return (
    <div className="rounded-2xl grid grid-cols-5 h-fit bg-linear-to-t from-[#92cb4f4d] to-[#d4e6974d]">
        <div className="col-start-1 col-end-2 flex flex-row justify-center py-3 px-2">
            {renderIcon()}
        </div>
        
        {/* main content*/}
        <div className="col-start-2 col-end-6 py-2 pr-3 flex-col justify-center h-25"> 
            <div className="flex flex-row justify-between h-fit align-center">
                <p className="text-base font-bold m-0">{category}</p>
                <p className="text-sm font-bold m-0">{plantHealthString}</p>
            </div>
            <div className="my-1">
                <ProgressBar now={currentVal}  min={0} max={maxVal} 
                            label={`${currentVal/maxVal * 100}%`} 
                            variant={barVariant} />
            </div>
            <div className="flex flex-row justify-between">
                <p className="text-xs mb-0">Current</p>
                <p className="text-xs mb-0">Recommended</p>
            </div>
        </div>
    </div>
    );
}

export default ProgressCard; 