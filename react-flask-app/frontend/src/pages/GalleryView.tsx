import shelf from "../assets/shelf.svg";
import arrow from "../assets/nocircle_arrow.svg";
import plant from "../assets/plant_placeholder.png";

function GalleryView() {
    return (
     
    <div className="blue_background">
        <div className="nav">
            <img src={arrow} style={{transform: 'rotate(180deg)' }}/>
            <a className="nav_text" href="DashboardView.tsx">Dashboard</a>
        </div>
        
        <div className="tan-card">
            <div className="header">
                <h1 className="gallery-title">My Garden</h1>
                <button className="add_plant"><a href="AddPlant.tsx">+ Add Plant</a></button>
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