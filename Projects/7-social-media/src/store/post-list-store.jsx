import { createContext, useReducer } from "react";



export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer =(currPostList,action)=>{

  let newPostList =currPostList;
  if (action.type === "DELETE_POST") {
    
    newPostList=currPostList.filter(post=>post.id !==action.payload.postId)
  }else if (action.type=== "ADD_POST"){
    newPostList=[action.payload, ...currPostList]


  }
  return newPostList;

}



const PostListProvider =({children})=>{
 const [postList,dispatchPostList] = useReducer(postListReducer,DEFAULT_POST_LIST);

 const addPost = (userId, postTitle, postbody, reactions, tags) => {
  dispatchPostList({
    type:'ADD_POST',
    payload:{
      
    id:Date.now() ,
    title: postTitle,
    body: postbody,
    reactions: reactions,
    userId: userId,
    tags:tags,
  
    }
  })
 };

 const deletePost=(postId)=>{
  dispatchPostList({
    type:'DELETE_POST',
    payload:{
      postId,
    },
  });
 };


  return <PostList.Provider value={{ postList, addPost,deletePost}

  }> {children}
  </PostList.Provider>
}

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: " Going To Mumbai",
    body: " Hi friends ,i m going to mumbai for my vacations.Hope to enjoy a lot.peace out.",
    reactions: 2,
    userId: "user-8",
    tags: ["vacations", "mumbai", "enjoying"],
  },
  {
    id: "2",
    title: " Pass hogye bhai",
    body: " 4 saal ki masti ke baad bhi ho gaye hain pass. Hard to beleive.",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbelievable"],
  },
];
export default PostListProvider;