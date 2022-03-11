import "./App.css";
import Landing from "./pages/Landing";
import Hub from "./pages/Hub";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Game } from "./interfaces/game";

function App() {
    const [users, setUsers] = useState({});
    const [games, setGames] = useState<Game[]>([]);

    // get a list of the users
    useEffect(() => {
        console.log("called");
        Axios.get("http://localhost:3001/getUsers").then((response) => {
            setUsers(response.data);
        });
        Axios.get("http://localhost:3001/getGames").then((response) => {
            if (!response.data) {
                setGames([{
                    players: [],
                    time: "",
                    buyin: "",
                    title: "",
                    day: "",
                    month: "",
                }])
            } else {
                setGames(response.data);
            }
        });
        console.log(games);
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/hub" element={<Hub games={games} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
