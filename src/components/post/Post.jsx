import React, { useState } from "react";
import "./Post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";

function Post({ post }) {
  const liked = false;
  const [commentsOpened, setCommentsOpened] = useState(false);

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post?.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">há 1 min</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          {post.desc && <p>{post.desc}</p>}
          <img src={post?.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Curtidas
          </div>
          <div
            className="item"
            onClick={() => setCommentsOpened(!commentsOpened)}
          >
            <TextsmsOutlinedIcon />
            Ver todos os comentários
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Compartilhar
          </div>
        </div>

        {commentsOpened && <Comments />}
      </div>
    </div>
  );
}

export default Post;
