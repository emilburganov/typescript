import {useEffect, useState} from "react";
import axios from "axios";
import {ITodo} from "../types/types";
import TodoItem from "../components/TodoItem";
import List from "../components/List";

const Todos = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const fetchTodos = async () => {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos', {
                params: {
                    _limit: 20,
                }
            });
            setTodos(response.data)
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        (async () => {
            await fetchTodos();
        })()
    }, [])

    return (
        <List
            title="Todos"
            items={todos}
            renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
        />
    );
};

export default Todos;