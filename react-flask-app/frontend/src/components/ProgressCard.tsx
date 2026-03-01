import ProgressBar from 'react-bootstrap/ProgressBar';
import Temperature from '../assets/temperature.svg';
import Humidity from '../assets/humidity.svg';
import Light from '../assets/light.svg';

function ProgressCard(props: any) {
    const category: string = props.category;
    const healthString: string = props.healthString;

    const currentText: string = props.currentText?? "No data";
    
    const currentVal: number = props.currentVal;
    const maxVal: number = props.maxVal;

    let barVariant: string = "danger";
    if (props.healthString === "Good") {
        barVariant = "success";
    } else if (props.healthString === "Okay") {
        barVariant = "warning";
    }

    var labelText: string = `${currentVal/maxVal * 100}%`;
    if (category === "Temperature") {
        labelText = `${currentVal}F`;
    } else if (category === "Light" || category === "Moisture") {
        labelText = `${currentText}`;
    }

    function renderIcon() {
        if (category === "Temperature") {
            return (<img src={Temperature} className="scale-50" />);
        } else if (category === "Humidity") {
            return (<img src={Humidity} className="scale-50" />);
        } else if (category === "Light") {
            return (<img src={Light} className="scale-50" />);
        } else {
            return (<img src={Humidity} className="scale-50" />);
        }
    }

    function renderMainContent() {
        if (category === "Temperature" || category === "Humidity") {
            return (
            <>
                <div className="flex flex-row justify-between h-fit align-center">
                    <p className="text-base font-bold m-0">{category}</p>
                    <p className="text-sm font-bold m-0">{healthString}</p>
                </div>
                <div className="my-1">
                    <ProgressBar now={currentVal}  min={0} max={maxVal} 
                                label={labelText} 
                                variant={barVariant} />
                </div>
                <div className="flex flex-row justify-between">
                    <p className="text-xs mb-0">Current</p>
                    <p className="text-xs mb-0">Recommended</p>
                </div>
            </>
            );
        } else {
            return (
            <>
                <div className="flex flex-row justify-between h-fit align-center mt-2">
                    <p className="text-base font-bold mb-0">{category}</p>
                    <p className="text-sm font-bold mb-0">{healthString}</p>
                </div>
                <div>
                    <p className="text-sm m-0 text-start">{labelText}</p>
                </div>
            </>
            );
        }
    }
    
    return (
    <div className="rounded-2xl grid grid-cols-5 h-fit bg-linear-to-t from-[#92cb4f4d] to-[#d4e6974d]">
        <div className="col-start-1 col-end-2 flex flex-row justify-center py-3 px-2">
            {renderIcon()}
        </div>
        
        {/* main content*/}
        <div className="col-start-2 col-end-6 py-2 pr-3 flex-col justify-center align-center h-fit"> 
            {renderMainContent()}
        </div>
    </div>
    );
}

export default ProgressCard; 