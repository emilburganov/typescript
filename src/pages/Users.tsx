import {useEffect, useState} from "react";
import axios from "axios";
import {IUser} from "../types/types";
import UserItem from "../components/UserItem";
import List from "../components/List";

const Todos = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const fetchUsers = async () => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data)
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        (async () => {
            await fetchUsers();
        })()
    }, [])

    return (
        <List
            title="Users"
            items={users}
            renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}
        />
    );
};

export default Todos;