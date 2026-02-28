import shelf from "../assets/shelf.svg";

function GalleryView() {
    return (
     
    <div className="blue_background">
        <nav className="nav"><a href="DashboardView.tsx">Dashboard</a></nav>
        <div className="tan-card">
            <div>
                <h1 className="gallery-title">My Garden</h1>
                <button>+ Add Plant</button>
            </div>
            <div className="parent-shelf">
                <img src={shelf} style={{ width: '90%', height: 'auto' }}/>
            </div>
        </div>
    </div>
    
    );
}

export default GalleryView;