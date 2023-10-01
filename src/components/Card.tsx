import {Dispatch, FC, SetStateAction, useState} from "react";
import classnames from 'classnames';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary',
}

interface CardProps {
    width: string;
    height: string;
    variant?: CardVariant;
    onClick?: (count: number, setCount: Dispatch<SetStateAction<number>>) => void;
}

const Card: FC<CardProps> =
    ({
         width,
         height,
         variant = CardVariant.primary,
         children,
         onClick,
         ...props
     }) => {
        const [count, setCount] = useState(0);

        return (
            <div
                className={classnames('card', variant)}
                style={{width, height}}
                onClick={() => onClick && onClick(count, setCount)}
                {...props}
            >
                {children}
            </div>
        );
    };

export default Card;