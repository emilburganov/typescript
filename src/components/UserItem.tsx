import {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser;
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <li className="item">
            {user.id}. {user.email}
        </li>
    );
};

export default UserItem;