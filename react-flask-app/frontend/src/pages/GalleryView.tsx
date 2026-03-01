import shelf from "../assets/shelf.svg";
import arrow from "../assets/nocircle_arrow.svg";
import plant from "../assets/plant_placeholder.png";
import { useNavigate } from "react-router-dom";

function GalleryView() {
    const navigate = useNavigate();

    return (
     
    <div className="blue_background">
        {/* <div className=" flex flex-row align-center gap-2 row-start-1 row-end-2" onClick={() => { navigate("/gallery")}}>
            <img src={arrow} style={{ width: '8px', height: 'auto', transform: 'rotate(180deg)' }}/>
            <p className="m-0">Garden</p>
        </div> */}

        <div className="nav" onClick={() => { navigate("/dashboard")}}>
            <img src={arrow} style={{ width: '8px', height: 'auto', transform: 'rotate(180deg)' }} />
            <p className="nav_text mb-0">Dashboard</p>
        </div>
        
        <div className="tan-card">
            <div className="header" onClick={() => { navigate("/add-plant")}} >
                <h1 className="gallery-title">My Garden</h1>
                <button className="add_plant"><p className="m-0">+ Add Plant</p></button>
            </div>
            
            <div className="plant_scroll">
                <div className="plant-section">
                    <div className="plants-row">
                        <div>
                            <p className="plant_text">plant name</p>
                            <img src={plant} alt="plant" />
                        </div>
                        <div>
                            <p className="plant_text">plant name</p>
                            <img src={plant} alt="plant" />
                        </div>
                    </div>

                    <img src={shelf} alt="shelf"className="shelf-img"/>
                </div>

                <div className="plant-section">
                    <div className="plants-row">
                        <div>
                            <p className="plant_text">plant name</p>
                            <img src={plant} alt="plant" />
                        </div>
                        <div>
                            <p className="plant_text">plant name</p>
                            <img src={plant} alt="plant" />
                        </div>
                    </div>

                    <img src={shelf} alt="shelf"className="shelf-img"/>
                </div>

                <div className="plant-section">
                    <div className="plants-row">
                        <div>
                            <p className="plant_text">plant name</p>
                            <img src={plant} alt="plant" />
                        </div>
                        <div>
                            <p className="plant_text">plant name</p>
                            <img src={plant} alt="plant" />
                        </div>
                    </div>

                    <img src={shelf} alt="shelf"className="shelf-img"/>
                </div>
                
            </div>
            
        </div>
    </div>
    
    );
}

export default GalleryView;