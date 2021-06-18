import style from './header.module.css'

function Header() {
    return (
        <header className={style.header}>
            <img src="brand_wolf.png" className="" alt="logo"/>
        </header>
);
}

export default Header;