import { useState, ChangeEvent} from "react";
import styles from "@styles/login.module.css";

const Login = () => {
    const [username, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const usernameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };
    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    // creates a new user
    const createUser = async () => {
        const request = await fetch(`http://localhost:3001/auth/login`, {
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            })
        });

        const response: {
            message: string;
        } = await request.json();

       
    };

    // just switches the page for now
    const loginUser = () => {};

    return (
        <div className={styles.form}>
            <form>
                <div>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={usernameHandler}
                        className={styles.inputfield}
                        placeholder="Username"
                    />
                </div>
                <div className={styles.input}>
                    <input
                        type="text"
                        id="pass"
                        name="pass"
                        value={password}
                        onChange={passwordHandler}
                        className={styles.inputfield}
                        placeholder="Password"
                    />
                </div>
                <div className={styles.button}>
                    <button >Submit</button>
                </div>
                <p>Forgot password?</p>
                <hr />
                <button>Create New Account</button>
            </form>
        </div>
    );
};

export { Login };
