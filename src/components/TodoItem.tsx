import {FC} from 'react';
import {ITodo} from "../types/types";
import Checkbox from "./UI/Checkbox";

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    return (
        <li className="item flex g-20 ac">
            <Checkbox checked={todo.completed}/>
            {todo.id}. {todo.title}
        </li>
    );
};

export default TodoItem;