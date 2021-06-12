import style from './profile.module.css'
import MyPosts from "./MyPosts/myPosts";
import User from "./MyPosts/User/user";

function Profile() {
    return (
        <main className={style.main_content}>
            <img className={style.fon}
                 src='sea_beach.jpg'/>
            <User></User>


        </main>
    );
}

export default Profile;