
import './App.css';
import Header from "./Components/Header/header";
import Sidebar from "./Components/Sidebar/sidebar";
import Profile from "./Components/Profile/profile";
import 'bootstrap/dist/css/bootstrap.min.css'

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
