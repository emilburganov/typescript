import {ChangeEvent} from "react";

const Input = ({value, setValue}) => {
    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return (
        <input
            className="input"
            value={value}
            onChange={changeHandler}
        />
    );
};

export default Input;