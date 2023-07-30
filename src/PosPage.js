import { useParams, Link} from "react-router-dom"

const PostPage = ({posts, handleDelete}) => {
    const {id} = useParams();
    const post  = posts.find(post => (post.id).toString() === id)
    return (
        <main className="PostPage"> 
            <article className="post">
                {post && 
                    <>
                        <h2> {post.title}</h2>
                        <p className="postDate">{post.datetime}</p>
                        <p className="postBody">{post.body}</p>
                        <Link to ={`/edit/${post.id}`}>Edit
                        </Link>
                        <button onClick={() =>handleDelete(post.id)}>
                            Delete Post
                        </button>
                    </>
                }
                {!post &&
                    <>
                    <p> No post, you bozo</p>
                    <p>
                        <Link to ='/'> VIsit Our Homepage</Link>
                    </p>
                    
                    </>
                }
            </article>
        </main>
    )
}
export default PostPage