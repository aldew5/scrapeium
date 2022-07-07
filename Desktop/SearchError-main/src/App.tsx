import Menu from './Menu';
import { useState } from "react";
import "./App.css";

function App() {

  const [id, setId] = useState<string>('');


  return (
    <div className="App">
      <Menu 
        id={id}
        setId={setId}
      />
    </div>
  );
}

export default App;
