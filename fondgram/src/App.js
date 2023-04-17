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
import SimpleDashboards from './Admin/SimpleDashboards/SimpleDashboards';

function App() {
  const [lightMode, setLightMode] = useState(false);
  return (
    <AppContext.Provider value={{ lightMode, setLightMode }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="*" element={<Oops />}  />
          <Route path="/admin/settings" element={<Settings />} exact />
          <Route path="/admin/reports/" element={<Reports />} exact />
          <Route path="/admin/analytics" element={<Analytics />} exact />
          <Route path="/admin/simpledashboards" element={<SimpleDashboards />} exact />
          
      {/*<Route path="/fundraisers" element={<Fundraisers />} exact />
      <Route path="/sign_in" element={<SignIn />} exact />
      <Route path="/sign_up" element={<SignUp />} exact />
      <Route path="/search" element={<Search />} exact />
      <Route path="/newfundraiser" element={<NewFundraiser/>} exact></Route>
      <Route path="/welcome" element={<Welcome/>} exact></Route>
      <Route path="/donate" element={<Donate/>} exact></Route>
      <Route path="/user" element={<User />} exact></Route>
      <Route path="/contact" element={<Contact />} exact></Route>
      <Route path="/fundraiser" element={<Fundraiser />} exact></Route>
      <Route path="/admin" element={<Admin />} exact></Route> */}
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
