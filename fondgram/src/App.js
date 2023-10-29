import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home/Home"
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Oops from './Pages/Oops/Oops';
import React, { useState } from 'react';
import Analytics from './Admin/Analytics/Analytics';
import Settings from './Admin/Settings/Settings';
import Reports from './Admin/Reports/Reports';
import { AppContext } from './AppContext';
import DbEntities from './Admin/DbEntities/DbEntities';
import Dashboards from './Admin/Dashboards/Dashboards';
import { Toaster } from 'react-hot-toast';

function App() {
  const [lightMode, setLightMode] = useState(false);
  return (
    <AppContext.Provider value={{ lightMode, setLightMode }}>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="*" element={<Oops />} />
          <Route path="/admin/settings" element={<Settings />} exact />
          <Route path="/admin/reports/" element={<Reports />} exact />
          <Route path="/admin/analytics" element={<Analytics />} exact />
          <Route path="/admin/dbentities" element={<DbEntities />} exact />
          <Route path="/admin/dashboards" element={<Dashboards />} exact />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
