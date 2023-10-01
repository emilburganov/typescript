import {FC} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Counter from "./pages/Counter";
import EventsExample from "./pages/EventsExample";
import './App.css';

const App: FC = () => {
    return (
        <BrowserRouter>
            <div className="container flex ac sb jc col p-20 g-20">
                <Header/>
                <Routes>
                    <Route path="/users" element={<Users/>}/>
                    <Route path="/todos" element={<Todos/>}/>
                    <Route path="/counter" element={<Counter/>}/>
                    <Route path="/events-example" element={<EventsExample/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="*" element={<Home/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;