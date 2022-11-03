import React, { useContext } from "react";
import "./Comments.scss";
import { AuthContext } from "../../context/authContext";

function Comments() {
  const { currentUser } = useContext(AuthContext);

  const comments = [
    {
      id: 1,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      name: "Carlos",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/8089969/pexels-photo-8089969.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 2,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      name: "Henrique",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/13996231/pexels-photo-13996231.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input autoFocus type="text" placeholder="Adicione um comentário..." />
        <button>Publicar</button>
      </div>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">há 1 hora</span>
        </div>
      ))}
    </div>
  );
}

export default Comments;
