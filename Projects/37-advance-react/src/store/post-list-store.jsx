import { createContext, useCallback, useReducer } from "react";



export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts:() => {},
  deletePost: () => {},
});
const postListReducer =(currPostList,action)=>{

  let newPostList =currPostList;
  if (action.type === "DELETE_POST") {
    
    newPostList=currPostList.filter(post=>post.id !==action.payload.postId)
  }else if (action.type === "ADD_Initial_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;

}



const PostListProvider =({children})=>{
 const [postList,dispatchPostList] = useReducer(postListReducer,[]);

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


 const addInitialPosts = (posts) => {
   dispatchPostList({
     type: "ADD_Initial_POSTS",
     payload:{
      posts,
     }


     
     
   });
 };
//useCallback and useMemo is used for optimize the code
 const deletePost= useCallback((postId) =>
  {

   dispatchPostList({
    type:'DELETE_POST',
    payload:{
      postId,
    },
  });
},
   [dispatchPostList]
 );

 



  return(
     <PostList.Provider value={{ postList, addPost,addInitialPosts,deletePost}

  }> {children}
  </PostList.Provider>
  );
};



export default PostListProvider;