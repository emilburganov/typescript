import classnames from "classnames";
import {Dispatch, FC, ReactNode, SetStateAction, useState} from "react";

export enum CardVariant {
    outlined = "outlined",
    primary = "primary",
}

interface CardProps {
    width: string;
    height: string;
    variant?: CardVariant;
    onClick?: (count: number, setCount: Dispatch<SetStateAction<number>>) => void;
    children: ReactNode;

    [props: string]: any;
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
        const [count, setCount] = useState<number>(0);

        return (
            <div
                className={classnames("card", variant)}
                style={{width, height}}
                onClick={() => onClick && onClick(count, setCount)}
                {...props}
            >
                {children}
            </div>
        );
    };

export default Card;