import {DragEvent, MouseEvent, useState} from 'react';
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import Card from "../components/Card";

const EventsExample = () => {
    const [value, setValue] = useState('')

    const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        console.log('Clicked!');
    }

    const dragHandler = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();

        console.log('Drag!');
    }

    return (
        <div className="flex col g-10">
            <Input
                value={value}
                setValue={setValue}
                type="text"
            />
            <Button onClick={clickHandler}>
                Click me!
            </Button>
            <Card
                width={'200px'}
                height={'200px'}
                draggable
                onDrag={dragHandler}
            >
                I'm drag box!
            </Card>
        </div>
    );
};

export default EventsExample;