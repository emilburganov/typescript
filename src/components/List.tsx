import {ReactElement} from "react";

interface ListProps<T> {
    title: string;
    items: T[];
    renderItem: (item: T) => ReactElement;
}

const List: <T>(props: ListProps<T>) => ReactElement = ({title, items, renderItem}) => {
    return (
        <div className="flex col g-20 w-600">
            <h2 className="title">
                {title}
            </h2>
            <ul className="flex col g-10 list">
                {items.map(renderItem)}
            </ul>
        </div>
    );
};

export default List;