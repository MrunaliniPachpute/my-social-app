import { useContext } from "react";
import { AiFillLike } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
import {PostList} from "../store/post-list-store";

const Post = ({post}) =>{


  const {deletePost}= useContext(PostList);



  return <>
  <div className="card post-card " style={{width: "18rem"}}>
    
    <button type="button" className="position-relative del-button">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>(deletePost(post.id))}>
          <TiDelete/>
        </span>
      </button>


    <img src={post.image} style={{ height: "150px", padding: "5px",objectFit: "cover" }}  className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{post.title}</h5>

      
      <p className="card-text">{post.body}</p>
      

      {post.tags.map((tag)=>(
        <span key={tag} className="badge rounded-pill text-bg-primary hashtag">{tag}</span>
      ))}

      <hr/>

      <button type="button" className="btn btn-primary position-relative">
        <AiFillLike />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {post.reactions}
        </span>
      </button>
      <input type="search" className="input-comment"  placeholder={`Comment...`} aria-label="Search"/>
      
    </div>
  </div>
  </>
}

export default Post;