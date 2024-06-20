import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import All from './router/All';
import FullStackDevelopment from './router/FullStackDevelopment';
import DataScience from './router/DataScience';
import CyberSecurity from './router/CyberSecurity';
import Career from './router/Career';
import Navbarr from './components/Navbarr';


function App() {
  return (
    <Router>
    
       <Navbarr></Navbarr>
            <div className="container mt-4">
                <Routes>
                    <Route path="/all" element={<All />} />
                    <Route path="/fullstack-development" element={<FullStackDevelopment />} />
                    <Route path="/data-science" element={<DataScience />} />
                    <Route path="/cyber-security" element={<CyberSecurity />} />
                    <Route path="/career" element={<Career />} />
                </Routes>
            </div>
        </Router>
  )
}

export default App