import style from './user.module.css'

function User() {
    return (
        <div className={style.main_card}>
            <img className={style.main_logo} src="https://petsi.net/images/dogbreed/12.jpg" alt=""/>
            <div className={style.text_card}>
                <p>Mars Mopsovich</p>
                <p>Date of birth: august 2012 </p>
                <p>Education: home education</p>
            </div>
        </div>
    );
}

export default User;