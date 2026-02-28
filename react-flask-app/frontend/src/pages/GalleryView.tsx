import shelf from "../assets/shelf.svg";
import arrow from "../assets/nocircle_arrow.svg";
import plant from "../assets/plant_placeholder.png";

function GalleryView() {
    return (
     
    <div className="blue_background">
        <div className="nav">
            <img src={arrow} style={{ width: '8px', height: 'auto', transform: 'rotate(180deg)' }}/>
            <p className="nav_text"><a href="DashboardView.tsx">Dashboard</a></p>
        </div>
        
        <div className="tan-card">
            <div className="header">
                <h1 className="gallery-title">My Garden</h1>
                <button className="add_plant">+ Add Plant</button>
            </div>
            
            <div className="plant_scroll">
                <div className="plant-section">
                    <div className="plants-row">
                        <div>
                            <p className="plant_text"><a href="DashboardView.tsx">plant name</a></p>
                            <img src={plant} alt="plant" />
                        </div>
                        <div>
                            <p className="plant_text"><a href="DashboardView.tsx">plant name</a></p>
                            <img src={plant} alt="plant" />
                        </div>
                    </div>

                    <img src={shelf} alt="shelf"className="shelf-img"/>
                </div>

                <div className="plant-section">
                    <div className="plants-row">
                        <div>
                            <p className="plant_text"><a href="DashboardView.tsx">plant name</a></p>
                            <img src={plant} alt="plant" />
                        </div>
                        <div>
                            <p className="plant_text"><a href="DashboardView.tsx">plant name</a></p>
                            <img src={plant} alt="plant" />
                        </div>
                    </div>

                    <img src={shelf} alt="shelf"className="shelf-img"/>
                </div>

                <div className="plant-section">
                    <div className="plants-row">
                        <div>
                            <p className="plant_text"><a href="DashboardView.tsx">plant name</a></p>
                            <img src={plant} alt="plant" />
                        </div>
                        <div>
                            <p className="plant_text"><a href="DashboardView.tsx">plant name</a></p>
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