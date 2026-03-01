import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import DashboardView from './pages/DashboardView';
import GalleryView from './pages/GalleryView';
import SinglePlantView from './pages/SinglePlantView';
import AddPlant from './pages/AddPlant';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>

      <div className="App">
          {/* nav bar for dev */}
          {/* <nav>
            <Link to="/dashboard">Dashboard</Link> | {" "}
            <Link to="/gallery">Gallery</Link> | {" "}
            <Link to="/plant/1">Single Plant</Link> | {" "}
            <Link to="/add-plant">Add Plant</Link> 
          </nav> */}

          {/* routes */}
          <Routes>
            <Route path="/dashboard" element={<DashboardView />} />
            <Route path="/gallery" element={<GalleryView />} /> 
            <Route path="/add-plant" element={<AddPlant />} />
            <Route path="/plant/:plantId" element={<SinglePlantView />} />
          </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
