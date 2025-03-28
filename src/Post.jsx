export default function Post({post}){
    return(
        <div className="card">
            <h6>{post.id}</h6>
            <h6>{post.title}</h6>
            <p>{post.body}</p>
        </div>
    )
}