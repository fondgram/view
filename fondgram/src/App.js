import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home/Home"
import React, { useState } from 'react';
import { AppContext } from './AppContext';

// import SignIn from "./pages/SignIn/Signin"
// import SignUp from "./pages/SignUp/Signup"
// import About from './pages/About/About'
// import Search from './pages/Search/Search'
// import NewFundraiser from './pages/NewFundraiser/NewFundraiser'
// import Welcome from './pages/Welcome/Welcome'
// import Fundraisers from './pages/Fundraisers/Fundraisers'
// import Donate from './pages/Donate/Donate'
// import User from './pages/User/User'
// import Contact from './pages/Contact/Contact'
// import Fundraiser from './pages/Fundraiser/Fundraiser'
// import Admin from './pages/Admin/Admin'
// import './App.css';

function App() {
  const [lightMode, setLightMode] = useState(false);
  return (
    <AppContext.Provider value={{ lightMode, setLightMode }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          {/* <Route path="/about" element={<About />} exact />
      <Route path="/fundraisers" element={<Fundraisers />} exact />
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
