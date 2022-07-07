import { SetStateAction, Dispatch } from "react";

interface MenuProps {
    setId: Dispatch<SetStateAction<string>>;
    id: string;
}

const Menu = ({setId, id}: MenuProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setId(event.target.value);
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const target = event.target as HTMLInputElement;
        setId(target.value);

        console.log(id);
    }

    return(
        <div className="fullMenu">
            <div className="intro">
                <h1>Enter Your MTurk ID</h1>
            </div>
            <div className="actions">
                <input type="text" placeholder="Enter Your MTurk ID" onChange={handleChange}></input>
                <button type="submit" onClick={handleClick}>Submit</button>
            </div>
        </div> 
    );
}

export default Menu;