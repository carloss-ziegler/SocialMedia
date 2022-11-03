import React from "react";
import Post from "../post/Post";
import "./Posts.scss";

function Posts() {
  const posts = [
    {
      id: 1,
      name: "Rebeca",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/13996231/pexels-photo-13996231.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aspernatur dignissimos enim sequi libero",
      img: "https://images.pexels.com/photos/13378650/pexels-photo-13378650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Carlos",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/8089969/pexels-photo-8089969.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "",
      img: "https://images.pexels.com/photos/13865998/pexels-photo-13865998.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];

  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
