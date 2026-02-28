import ProgressBar from 'react-bootstrap/ProgressBar';
import Temperature from '../assets/temperature.svg';
import Humidity from '../assets/humidity.svg';
import Light from '../assets/light.svg';

function ProgressCard(props: any) {
    const category: string = props.category;
    
    const currentVal: number = props.currentVal;
    const maxVal: number = props.maxVal;

    const plantHealthString: string = currentVal / maxVal > 0.8 ? "Good" : "Bad";

    function renderIcon() {
        if (category === "Temperature") {
            return (<img src={Temperature} />);
        } else if (category === "Humidity Level") {
            return (<img src={Humidity} />);
        } else if (category === "Light Level") {
            return (<img src={Light} />);
        } else {
            return (<img src={Temperature} />);
        }
    }
    
    return (
    <div className="rounded-2xl grid grid-cols-5 gap-4 bg-green-200 ">
        <div className="col-start-1 col-end-2 flex flex-row justify-center py-3 px-2">
            {renderIcon()}
        </div>
        
        {/* main content*/}
        <div className="col-start-2 col-end-6 py-2 pr-3 flex-col justify-center"> 
            <div className="flex flex-row justify-between align-bottom">
                <p className="text-base font-bold">{category}</p>
                <p className="text-base font-bold">{plantHealthString}</p>
            </div>
            <div>
                <ProgressBar now={currentVal}  min={0} max={maxVal} label={`${currentVal/maxVal * 100}%`} />
            </div>
            <div className="flex flex-row justify-between">
                <p className="text-sm">Current</p>
                <p className="text-sm">Recommended</p>
            </div>
        </div>
    </div>
    );
}

export default ProgressCard; 