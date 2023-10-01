import {FC} from "react";

interface CheckboxProps {
    checked: boolean,
}

const Checkbox: FC<CheckboxProps> = ({checked, ...props}) => {
    return (
        <input
            checked={checked}
            type="checkbox"
            className="checkbox"
            {...props}
        />
    );
};

export default Checkbox;