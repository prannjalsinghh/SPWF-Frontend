import {
  Routes,
  Route,
 
} from "react-router-dom";
import React from "react";
import './App.css';
import HomePage from "./MainComponents/HomePage";
import AboutUsPage from './MainComponents/AboutUsPage'
import ContactUsPage from './MainComponents/ContactUsPage'

import Admin from "./components/Admin/admin";

import Donation from "./MainComponents/donation";
import AdminLogin from "./MainComponents/AdminLogin";
import ShowContactUsDataMain from "./components/Admin/ShowContactUsDataMain";
import ShowVolunteerDataMain from './components/Admin/ShowVolunteerDataMain'
import VolunteerForm from "./components/VolunteerForm";
import Shiksharth from "./components/shiksharth";
import ShowDonationDataMain from './components/Admin/ShowDonationDataMain'
import Aahar from "./components/Aahar";
import KaushalUthan from "./components/KaushalUthan";
import Chikitsa from "./components/Chikitsa"
import PageNotFound from './components/PageNotFound'



function App() {
  
  return (
    <div>
      <main>
      <React.StrictMode>
        <Routes>
         
         
          <Route exact path = '/' element={<HomePage/>}></Route>
          <Route exact path='/aboutUs' element={<AboutUsPage/>} ></Route>
          <Route exact path='/contactUs' element={<ContactUsPage/>} ></Route>

          <Route exact path='/admin' element={<Admin/>} ></Route>

          <Route exact path='/donation' element={<Donation/>}></Route>
          <Route exact path='/login' element={<AdminLogin/>}></Route>

    
          <Route exact path='/volunteer' element={<VolunteerForm/>}></Route>
          <Route exact path='/Shiksharth' element={<Shiksharth/>}></Route>
          <Route exact path="/Aahar" element={<Aahar/>}></Route>
          <Route exact path="/KaushalUthan" element={<KaushalUthan/>}></Route>
          <Route exact path="/Chikitsa" element={<Chikitsa/>}></Route>
          <Route path="/*" element={<PageNotFound/>} />
       
        </Routes>
        </React.StrictMode> 
      </main>
    </div>
  );
}

export default App;