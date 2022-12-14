
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export class App extends Component {
  render() {
    return (
      <div>
           <Navbar/>
           <Router>
     
     <Routes>
    
   <Route exact path="/" element={<News key="general" category="general"/>} />
   <Route exact path="/health" element={<News key="health" category="health"/>} />
   <Route exact path="/business" element={<News key="business" category="business"/>} />
   <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment"/>} />
   <Route exact path="/general" element={<News key="general" category="general"/>} />
   <Route exact path="/science" element={<News key="science" category="science"/>} />
   <Route exact path="/technology" element={<News key="technology" category="technology"/>} />
   <Route exact path="/sports" element={<News key="sports" category="sports"/>} />
            
       
     </Routes>

     </Router>
      </div>
    )
  }
}


export default App;
