import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ClearIcon from '@mui/icons-material/Clear';
import { Box } from "@material-ui/core";
import Axios from "axios";

const Day = ({pokerDay, games, date, setShow }) => {
    
    const [showMenu, setShowMenu] = useState(false);
    const [gameTime, setGameTime] = useState();
    const [cost, setCost] = useState();
    const [gameTitle, setGameTitle] = useState();
    const [players, setPlayers] = useState([]);

    const possible_months = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "Semptember", "October", "November", "December"];

    const closeWindow = () => {
        setShow(false);
    }
    
    useEffect(() => {
        var i = 0;
        games.map((game) => {
            if (pokerDay == i){
                setPlayers(game.players);
                setGameTime(game.time);
                setGameTitle(game.title);
                setCost(game.buyin);
            }
            i += 1;
        })
    }, [])

    const createGame = () => {
        Axios.post("http://localhost:3001/createGame", {
            players: [],
            month: possible_months[date.getMonth()],
            day: date.getDate(),
            time: gameTime,
            buyin: cost,
            title: gameTitle,
            
        }).then((response) => {
            console.log("Game created");
        });
    };

    const handleCreateGame = (e) => {
        setShowMenu(true);
    }
    const gameTimeHandler = (e) => {
        setGameTime(e.target.value);
    }
    const costHandler = (e) => {
        setCost(e.target.value);
    }
    const titleHandler = (e) => {
        setGameTitle(e.target.value);
    }

    return (
        <div>
            { (pokerDay != -1) ?
                <Card sx={{ minWidth: 275, border: 2 }}>
                
                <CardContent>
                    <Box style={{float: "right"}}>
                        <ClearIcon onClick={closeWindow}/>
                    </Box>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {possible_months[date.getMonth()]} {date.getDate()}, 2022
                        </Typography>
                        <Typography variant="h5" component="div">
                            {gameTitle}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Game Time: {gameTime}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Buy-in: ${cost}
                        </Typography>
                        <Typography variant="body2">
                            Current Players: {players.join(" ")}
                        </Typography>
                    </CardContent>
                        <CardActions style={{justifyContent: 'center'}}>
                            <Button size="small" >Join Game</Button>
                        </CardActions>
                </Card>
                    : 
                    <div>
                        {(showMenu) ? 
                            <Card sx={{ minWidth: 275, border: 2 }}>
                                <div style={{ display:'flex', justifyContent:'center' }}>
                                <CardContent>
                                    <Box style={{float: "right"}}>
                                        <ClearIcon onClick={closeWindow}/>
                                    </Box>
                                    <Typography>
                                        Enter Game Data: <br></br>
                                    </Typography>
                                    <Box>
                                        <form>
                                            <input type="text" id="title" name="title"
                                                value={gameTitle} onChange={titleHandler}
                                                className="input-field" placeholder="Title"/><br /><br /><br/>
                                            <br/>
                                            <input type="text" id="time" name="time"
                                                value={gameTime} onChange={gameTimeHandler}
                                                className="input-field" placeholder="Game Time"/><br /><br /><br/>
                                            <br/>
                                            <input type="text" id="cost" name="cost"
                                                value={cost} onChange={costHandler}
                                                className="input-field" placeholder="Buy-in"/><br /><br /><br/>
                                            <br/>
                                    
                                            <button onClick={createGame}>Confirm Game</button>
                                        </form>
                                    </Box>
                                </CardContent>
                                </div>
                            </Card>
                        :
                        <Card sx={{ minWidth: 275, border: 2 }}>
                            <CardContent>
                                <Box style={{float: "right"}}>
                                    <ClearIcon onClick={closeWindow}/>
                                </Box>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {possible_months[date.getMonth()]} {date.getDate()}, 2022
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        NO GAME
                                    </Typography>
                                </CardContent>
                            
                                <CardActions style={{justifyContent: 'center'}}>
                                    <Button size="small" onClick={handleCreateGame}>Create Game</Button>
                                </CardActions>
                        </Card>
                        }
                    </div>
                }
        </div>
    );
}

export default Day;