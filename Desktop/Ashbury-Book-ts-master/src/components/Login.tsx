import { useState } from "react";
import styles from "../styles/Login.module.css";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const usernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };
    const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const loginUser = async () => {
        const request = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        const response = await request.json();

        if (response.success) {
            window.localStorage.setItem("token", response.data);
            navigate("/hub");
        } else {
            alert(response.message);
        }
    };

    return (
        <div className={styles["form-style-2"]}>
            <form>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={usernameHandler}
                    className={styles["input-field"]}
                    placeholder="Username"
                />
                <input
                    type="text"
                    id="pass"
                    name="pass"
                    value={password}
                    onChange={passwordHandler}
                    className={styles["input-field"]}
                    placeholder="Password"
                />
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={loginUser}
                >
                    Log In
                </Button>
                <p>Forgot password?</p>
                <hr />
                <button>Create New Account</button>
            </form>
        </div>
    );
};

export default Login;
