import style from './myPosts.module.css'

function MyPosts() {
    return (
        <div className={style.main_card}>
            <img className={style.main_logo} src="https://petsi.net/images/dogbreed/12.jpg" alt=""/>
            <div className={style.text_card}>
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
            </div>
        </div>
    );
}

export default MyPosts;