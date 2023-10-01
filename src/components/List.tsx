import {ReactElement, ReactNode} from 'react';

interface ListProps<T> {
    title: string;
    items: unknown[];
    renderItem: (item: T) => ReactNode
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
}

export default List;