import {Dispatch, SetStateAction} from "react";
import Card, {CardVariant} from "../components/Card";
import Button from "../components/UI/Button";

const Counter = () => {
    /**
     * Send alert notification onclick method
     * @param {number} count
     * @param {React.Dispatch<React.SetStateAction<number>>} setCount
     */
    const sendNotification = (count: number, setCount: Dispatch<SetStateAction<number>>) => {
        setCount(count += 1);
        alert(`You have ${count} point/points`);
    };

    return (
        <Card
            width={"200px"}
            height={"200px"}
            variant={CardVariant.outlined}
            onClick={sendNotification}
        >
            <Button>Click me!</Button>
        </Card>
    );
};

export default Counter;