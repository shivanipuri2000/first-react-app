import React, { useContext, useRef } from "react";
import { PostList}from "../store/post-list-store";

const CreatePost = () => {

const {addPost}=  useContext(PostList);

   const userIdElement= useRef();
   const postTitleElement = useRef();
   const postbdyElement = useRef();
   const reactionsElement= useRef();
   const tagsElement = useRef();
   

   const handleSubmit=(event)=>{
      event.preventDefault();
      const userId= userIdElement.current.value;
      const postTitle=postTitleElement.current.value;
      const postbody= postbdyElement.current.value;
      const reactions= reactionsElement.current.value;
      const tags = tagsElement.current.value.split(' ');

      userIdElement.current.value="";
      postTitleElement.current.value="";
       postbdyElement.current.value="";
        reactionsElement.current.value="";
        tagsElement.current.value="";

      fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          
          title: postTitle,
          body: postbody,
          reactions: reactions,
          userId: userId,
          tags: tags,
        }),
      })
        .then((res) => res.json())
        .then(post=>addPost(post));
            
   }
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id Here
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          placeholder="Your User Id"
          id="userId"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          placeholder="How are you feeling today....."
          id="title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postbdyElement}
          rows="4"
          className="form-control"
          placeholder="Tell us more about it "
          id="body"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          placeholder="How many people reacted to this post"
          id="reactions"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          placeholder="Please enter tags using space"
          id="tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
