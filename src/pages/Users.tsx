import axios from "axios";
import {useEffect, useState} from "react";
import List from "../components/List";
import UserItem from "../components/UserItem";
import {IUser} from "../types/types";

const Todos = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    /**
     * Fetch users from jsonplaceholder method
     * @returns {Promise<void>}
     */
    const fetchUsers = async () => {
        try {
            const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
            setUsers(response.data);
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        (async () => {
            await fetchUsers();
        })();
    }, []);

    return (
        <List
            title="Users"
            items={users}
            renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}
        />
    );
};

export default Todos;