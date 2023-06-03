import { useState } from "react";

import Profile from "./pages/Profile";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Notes from "./pages/Notes";
import Resume from "./pages/Resume";
import Reading from "./pages/Reading";

import Probability from "./pages/BlogEntries/Probability";
import SingleQubit from "./pages/NoteEntries/SingleQubit";
import StateSpaces from "./pages/NoteEntries/StateSpaces";
import LifeOne from "./pages/BlogEntries/LifeOne";
import AshburyBook from "./pages/ProjectPages/AshburyBook";
import Transient from "./pages/BlogEntries/Transient";
import LanguageApps from "./pages/NoteEntries/LanguageApps";
import SpatialVision from "./pages/NoteEntries/SpatialVision";

import Eden from "./pages/Reviews/Eden";
import Feynman from "./pages/Reviews/Feynman";
import Farm from "./pages/Reviews/Farm";
import Crime from "./pages/Reviews/Crime";
import Cities from "./pages/Reviews/Cities";
import War from "./pages/Reviews/War";
import Brave from "./pages/Reviews/Brave";
import Algebra from "./pages/Reviews/Algebra";
import Sea from "./pages/Reviews/Sea";
import Delusion from "./pages/Reviews/Delusion";
import Orange from "./pages/Reviews/Orange";
import Hitchhiker from "./pages/Reviews/Hitchhiker";
import Slaughter from "./pages/Reviews/Slaughter";


import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TvLExperiment from "./pages/ProjectPages/TvLExperiment";
import ARCVision from "./pages/ProjectPages/ARCVision";
import FallingBlocks from "./pages/ProjectPages/FallingBlocks";
import Dewordle from "./pages/ProjectPages/Dewordle";
import MammogramChecking from "./pages/ProjectPages/MammogramChecking";
import Publications from "./pages/Publications";
import ConvNet from "./pages/NoteEntries/ConvNet";
import Kaio from "./pages/ProjectPages/Kaio";
import Detection from "./pages/NoteEntries/Detection";
import Camp from "./pages/BlogEntries/Camp";
import EmptyNotebook from "./pages/BlogEntries/EmptyNotebook";
import HowWrong from "./pages/BlogEntries/HowWrong";
import Apple from "./pages/BlogEntries/Apple";

function App() {

  const [timeline, setTimeline] = useState<boolean>(false);
  const [list, setList] = useState<boolean>(true);
  const [favourites, setFavourites] = useState<boolean>(false);
  const [showBar, setShowBar] = useState<boolean>(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <Profile 
              showBar={showBar}
              setShowBar={setShowBar}
            />
          }>
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/reading" element={<Reading
            favourites={favourites}
            list={list}
            timeline={timeline}
            setFavourites={setFavourites}
            setTimeline={setTimeline}
            setList={setList}
          />} />
          {/*Blog posts*/}
          <Route path="/camp" element={<Camp />} />
          <Route path="/emptyNotebook" element={<EmptyNotebook />} />
          <Route path="/transient" element={<Transient />} />
          <Route path="/howWrong" element={<HowWrong />} />
          <Route path="/apple" element={<Apple />} />
          {/*Notes*/}
          <Route path="/singleQubit" element={<SingleQubit />} />
          <Route path="/stateSpaces" element={<StateSpaces />} />
          <Route path="/languageApps" element={<LanguageApps />} />
          <Route path="/spatialVision" element={<SpatialVision />} />
          <Route path="/convnet" element={<ConvNet />} />
          <Route path="/detect" element={<Detection />} />
          {/*Project Pages*/}
          <Route path="/ashburyBook" element={<AshburyBook />} />
          <Route path="/tvlExperiment" element={<TvLExperiment />} />
          <Route path='/arcvision' element={<ARCVision />} />
          <Route path="/fallingblocks" element={<FallingBlocks />} />
          <Route path="/dewordle" element={<Dewordle />} />
          <Route path="/mammogramchecking" element={<MammogramChecking />} />
          <Route path="/kaio" element={<Kaio />} />
          {/*Books*/}
          <Route path="/eden" element={<Eden />} />
          <Route path="/feynman" element={<Feynman />} />
          <Route path="/animal" element={<Farm />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/crime" element={<Crime />} />
          <Route path="/war" element={<War />} />
          <Route path="/brave" element={<Brave />} />
          <Route path="/algebra" element={<Algebra />} />
          <Route path="/sea" element={<Sea />} />
          <Route path="/delusion" element={<Delusion />} />
          <Route path="/orange" element={<Orange />} />
          <Route path="/hitchhiker" element={<Hitchhiker />} />
          <Route path="/slaughter" element={<Slaughter />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
