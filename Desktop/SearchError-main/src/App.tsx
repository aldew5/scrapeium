import Menu from './components/Menu';
import { useState } from "react";
import {BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import "./App.css";
import Instructions from './pages/Instructions';

function App() {

  const [id, setId] = useState<string>('');

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={
            <Menu 
              setId={setId}
              id={id}
            />}
          />
          <Route path="/instructions" element={<Instructions />} />
        </Routes>  
      </div>
    </Router>
      
  );
}

export default App;
