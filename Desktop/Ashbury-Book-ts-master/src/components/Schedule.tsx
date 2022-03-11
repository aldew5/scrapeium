import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "../styles/Schedule.css";
import { Game } from "../interfaces/game";

interface ScheduleProps {
    date: Date,
    games: Game[],
    setDate: Function,
    setShow: Function,
    setPokerDay: Function,
}



const Schedule = ({date, games, setDate, setShow, setPokerDay}: ScheduleProps) => {

    const possible_months = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "Semptember", "October", "November", "December"];

    function isPokerDay(date: Date, games: Game[]) {
        let index: number = -1;
        let months: string[] = [];
        var days: string[] = [];

        games.map((game) => {
            months.push(game.month);
            days.push(game.day);
        })
       
        for (var i = 0; i < months.length; i++){
            if (date.getDate().toString() === days[i] && possible_months[date.getMonth()] === months[i]){
                index = i;
                break;
            }
        }
        return index;
    }

    const onChange = (date: Date) => {
        setDate(date);
        setShow(true);
        setPokerDay(isPokerDay(date, games));
    }

    return (
        <div>
            <Calendar 
                onChange={onChange} 
                value={date}
            />
        </div>
    );
}

export default Schedule;