import style from './myPosts.module.css'
import Post from "./Post/post";

function MyPosts() {
    return (
        <div>
            <div className='row justify-content-between align-items-center m-2'>
                <h2>My posts</h2>
                <button type="button" className="btn btn-primary mx-4"> Send </button>
            </div>
            <div className='row m-2 justify-content-center'>
                <textarea name="" id=""   className='w-100 bg-light text-dark'></textarea>
            </div>
            <div className='m-5'>
                <Post/>
            </div>

        </div>

    );
}

export default MyPosts;