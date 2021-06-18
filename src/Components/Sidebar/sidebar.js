import style from './sidebar.module.css'

function Sidebar() {
    return (
        <nav className={style.sadebar}>
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
    );
}

export default Sidebar;