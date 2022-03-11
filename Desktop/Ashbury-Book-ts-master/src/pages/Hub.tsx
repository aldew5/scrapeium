import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Leaderboard from "../components/Leaderboard";
import styles from "../styles/Hub.module.css";
import Schedule from "../components/Schedule";
import Day from "../components/Day.js";

import { Game } from "../interfaces/game";

interface HubProps {
    games: Game[];
}

const Hub = ({ games }: HubProps) => {
    const [show, setShow] = useState<boolean>(false);
    const [date, setDate] = useState<Date>(new Date());
    const [pokerDay, setPokerDay] = useState<number>(-1);

    const checkAuth = async () => {
        const request = await fetch(`${process.env.REACT_APP_API_URL}/auth/status`, {
            method: "GET",
            headers: {
                authorization: localStorage.getItem("token") || "",
            }
        });

        const response: {
            success: boolean;
        } = await request.json();

        if (!response.success) {
            window.location.href = '/';
        }
    }

    useEffect(() => {
        checkAuth();
    }, []);

    return (
        <div>
            <NavBar />
            <div className={styles.container}>
                <div className={styles.sched}>
                    <Schedule
                        date={date}
                        setDate={setDate}
                        setShow={setShow}
                        games={games}
                        setPokerDay={setPokerDay}
                    />
                </div>
                <div className={styles.leaderboard}>
                    <Leaderboard />
                </div>
                {show ? (
                    <div className={styles.day}>
                        <Day
                            date={date}
                            setShow={setShow}
                            games={games}
                            pokerDay={pokerDay}
                        />
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
};

export default Hub;
