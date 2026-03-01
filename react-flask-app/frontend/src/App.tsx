import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import DashboardView from './pages/DashboardView';
import GalleryView from './pages/GalleryView';
import SinglePlantView from './pages/SinglePlantView';
import AddPlant from './pages/AddPlant';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState({ name: '', message: '' });
  var endpoint = '/api/data'

  useEffect(() => {
    fetch('http://127.0.0.1:5000' + endpoint) // Fetch from the Flask API
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <BrowserRouter>

      <div className="App">
          {/* nav bar */}
          <nav>
            <Link to="/dashboard">Dashboard</Link> | {" "}
            <Link to="/gallery">Gallery</Link> | {" "}
            <Link to="/single-plant">Single Plant</Link> {" "}
            <Link to="/add-plant">Add Plant</Link> 
          </nav>

          {/* <h1>name is: |{data.name}|</h1>
          <p>message is: |{data.message}|</p> */}

          {/* routes */}
          <Routes>
            <Route path="/dashboard" element={<DashboardView />} />
            <Route path="/gallery" element={<GalleryView />} /> 
            <Route path="/single-plant" element={<SinglePlantView />} />
            <Route path="/add-plant" element={<AddPlant />} />
          </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
