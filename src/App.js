
import './App.css';
import Header from "./Header/header";
import Sidebar from "./Sidebar/sidebar";
import Profile from "./Profile/profile";

function App() {
    return (
        <div className="app_wrapper">
           <Header></Header>
            <Sidebar></Sidebar>
            <Profile></Profile>
        </div>
    );
}

export default App;
