import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="card">
            <div className="flex ac sb g-20 wrap w-max">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/users">Users</Link>
                <Link className="link" to="/todos">Todos</Link>
                <Link className="link" to="/counter">Counter</Link>
                <Link className="link" to="/events-example">Events Example</Link>
            </div>
        </header>
    );
};

export default Header;