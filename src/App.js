
import './App.css';

function App() {
    return (
        <div className="app_wrapper">
            <header className="header">
                <img src="brand_wolf.png" className="" alt="logo"/>
            </header>
            <nav className='sadebar'>
                <div>
                     Profile
                </div>
                <div>
                    Messages
                </div>
                <div>
                    News
                </div>
                <div>
                    Music
                </div>
                <div>
                    Settings
                </div>
            </nav>
            <div className='main_content'>
                <img src="https://lh3.googleusercontent.com/proxy/nfoHufZSQ0C6CKQX7eRzZCi1iAgld9lXIGpAL-oH6k8WIpDuFla-O9P7gOnFxIkJvQot-YO0z3BweSLYm2L4PTE6KefsoyCMPK1GSClHaNR0XgOy5cPMgEhOHs8RJ31GTYx7Ycv4LeOu0htrJsLe2RKadwW1rw8ksB5agLJoDw0tlNiaa8olnmRmFJE9eeaz9BcbA2ngOEvtH3FBLb0jCM1QBA" alt=""/>
                <div className="main_card">
                    <img className="main_logo" src="https://petsi.net/images/dogbreed/12.jpg" alt=""/>
                    <div>
                        <p>Mars Mopsovich</p>
                        <p>Date of birth: august 2012 </p>
                        <p>Education: home education</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
