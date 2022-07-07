import Profile from "./pages/Profile";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Notes from "./pages/Notes";

import Probability from "./pages/BlogEntries/Probability";
import SingleQubit from "./pages/NoteEntries/SingleQubit";
import StateSpaces from "./pages/NoteEntries/StateSpaces";
import LifeOne from "./pages/BlogEntries/LifeOne";
import AshburyBook from "./pages/ProjectPages/AshburyBook";
import Transient from "./pages/BlogEntries/Transient";
import LanguageApps from "./pages/NoteEntries/LanguageApps";
import SpatialVision from "./pages/NoteEntries/SpatialVision";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TvLExperiment from "./pages/ProjectPages/TvLExperiment";
import ARCVision from "./pages/ProjectPages/ARCVision";
import FallingBlocks from "./pages/ProjectPages/FallingBlocks";
import Dewordle from "./pages/ProjectPages/Dewordle";


function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <Landing />
          }>
          </Route>
          <Route path="/profile" element={
            <Profile />
          }>
          </Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/notes" element={<Notes />}></Route>
          {/*Blog posts*/}
          <Route path="/probability" element={<Probability />}></Route>
          <Route path="/lifeOne" element={<LifeOne />}></Route>
          <Route path="/transient" element={<Transient />}></Route>
          {/*Notes*/}
          <Route path="/singleQubit" element={<SingleQubit />}></Route>
          <Route path="/stateSpaces" element={<StateSpaces />}></Route>
          <Route path="/languageApps" element={<LanguageApps />}></Route>
          <Route path="/spatialVision" element={<SpatialVision />}></Route>
          {/*Project Pages*/}
          <Route path="/ashburyBook" element={<AshburyBook />}></Route>
          <Route path="/tvlExperiment" element={<TvLExperiment />}></Route>
          <Route path='/arcvision' element={<ARCVision />}></Route>
          <Route path="/fallingblocks" element={<FallingBlocks />}></Route>
          <Route path="/dewordle" element={<Dewordle />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
