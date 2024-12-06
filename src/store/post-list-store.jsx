import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: ()=>{},
  deletePost: ()=>{}
});

const postListReducer = (currPostList, action) =>{
  let newPostList = currPostList;
  if(action.type==="DELETE_POST"){
    newPostList = currPostList.filter((post)=>post.id!==action.payload.postId)
  }else if(action.type==="ADD_POST"){
    newPostList =[ action.payload,...currPostList]
  }
  return newPostList;
}

const PostListProvider = ({children}) =>{

  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POSTLIST);

  const addPost=(userID, postTitle, postBody, reactions, tags, imageURL ) =>{
    dispatchPostList({
      type:"ADD_POST",
      payload:{
        id: Date.now(),
        title : postTitle,
        body : postBody,
        reactions : reactions,
        userId : 'unknown-9',
        tags:tags ,
        image : imageURL
        }
    }
    )
  }



  const deletePost = (postId) =>{
    dispatchPostList({
      type:"DELETE_POST",
      payload: {postId}
    })
  }


  return <PostList.Provider value={
   { postList: postList,
    addPost: addPost, 
    deletePost: deletePost}
  }>
    {children}
  </PostList.Provider>
}

const DEFAULT_POSTLIST=[
  {id: '1',
  title : "Paris in Full Bloom 🌸✨",
  body : "The perfect blend of art, culture, and love!",
  reactions : '600M',
  userId : 'unknown-9',
  tags:['ParisVibes' ,'TravelDiaries', 'CityOfLove'] ,
  image : "../images/paris.jpg"
  },
  {id: '2',
    title : "Hidden heaven. A Home in Nature 🌳🏡",
    body : "Experience tranquility like never before!",
    reactions : '900k',
    userId : 'unknown-4',
    tags:['ForestHideaway', 'PeacefulLiving'],
    image : "../images/p.jpg"
  },
  {id: '3',
    title : "Shaping Tomorrow with AI 🤖✨",
    body : "The future is here!",
    reactions : '243k',
    userId : 'unknown-4',
    tags:['ArtificialIntelligence', 'TechInnovation', 'FutureIsNow'],
    image : "../images/p4.jpg"
  }

  ]


export default PostListProvider;
