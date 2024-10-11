import React from "react"
import {Route ,Routes } from "react-router-dom"

import Crud from "./Components/crud";


function App() {
  return (
    <Routes>

      {/* <Route path="/" exact element={<Home/>}/> */}
      <Route path="/" exact element={<Crud/>}/>
      
    
    </Routes>
    
    
  );
}

export default App;
