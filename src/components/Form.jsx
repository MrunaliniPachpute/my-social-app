import { useContext, useRef } from "react";
import {PostList} from "../store/post-list-store";

const Form = () =>{

  const {addPost} = useContext(PostList)

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();
  const imageElement = useRef();




  const handleSubmit = (event) =>{
    event.preventDefault();
    const userID = userIdElement.current?.value || "";
    const postTitle = postTitleElement.current?.value || "";
    const postBody = postBodyElement.current?.value || "";
    const reactions = reactionsElement.current?.value || "";
    const tags = tagsElement.current?.value.split(/\s+/) || []; // Fix to remove empty spaces


    const imageFile = imageElement.current?.files[0]; // Get the first file selected
    const imageURL = imageFile ? URL.createObjectURL(imageFile) : "";

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    imageElement.current.value = "";
    tagsElement.current.value ="";


    addPost(userID,postTitle,postBody,reactions,tags,imageURL);
  
  }





  return <>
  <form className="create-post" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="user-id" className="form-label">User-Id</label>
    <input type="text" ref={userIdElement} placeholder="Enter your user id" className="form-control" id="user-id"/>
  </div>
  {/* <div className="mb-3">
    <label htmlFor="image" className="form-label">Add Image</label>
    <input type="image" placeholder="Upload image" className="form-control" id="image"/>
  </div> */}
  <div className="mb-3">
    <label htmlFor="Title" className="form-label">Title</label>
    <input type="text" ref={postTitleElement} placeholder="Enter post title" className="form-control" id="title"/>
  </div>
  <div className="mb-3">
    <label htmlFor="content"  className="form-label">Content</label>
    <textarea rows={4} type="text" ref={postBodyElement} placeholder="What do you want to talk about?" className="form-control" id="content"/>
  </div>
  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">No of reactions</label>
    <input type="text" ref={reactionsElement} placeholder="How many people reacted to this post?" className="form-control" id="reactions"/>
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Add tags</label>
    <input type="text" ref={tagsElement} placeholder="Enter user id" className="form-control" id="tags"/>
  </div>
  <div className="mb-3">
    <label htmlFor="image" className="form-label">Upload Image</label>
    <input type="file" ref={imageElement} className="form-control" id="tags"/>
  </div>

  
  <button type="submit" className="btn btn-primary">Post</button>
</form>
  </>
}

export default Form; 