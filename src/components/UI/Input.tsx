import {ChangeEvent, Dispatch} from "react";

interface InputProps {
    value: string;
    setValue: Dispatch<any>;

    [props: string]: any;
}

const Input = ({value, setValue, ...props}: InputProps) => {
    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <input
            className="input"
            value={value}
            onChange={changeHandler}
            {...props}
        />
    );
};

export default Input;