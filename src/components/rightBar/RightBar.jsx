import React from "react";
import "./RightBar.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
function RightBar() {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <div className="more">
            <span>Sugestões para você</span>
            <div className="icon">
              <MoreVertOutlinedIcon style={{ color: "#808080" }} />
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
                alt=""
              />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>Seguir</button>
              <button>Excluir</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
                alt=""
              />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>Seguir</button>
              <button>Excluir</button>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="more">
            <span>Últimas atividades</span>
            <div className="icon">
              <MoreVertOutlinedIcon style={{ color: "#808080" }} />
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
                alt=""
              />
              <p>
                <span>Jane Doe</span> Mudou a foto de perfil
              </p>
            </div>
            <span>1 min.</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
                alt=""
              />
              <p>
                <span>Jane Doe</span> Mudou a foto de perfil
              </p>
            </div>
            <span>1 min.</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
                alt=""
              />
              <p>
                <span>Jane Doe</span> Mudou a foto de perfil
              </p>
            </div>
            <span>1 min.</span>
          </div>
        </div>

        <div className="item">
          <div className="more">
            <span>Amigos Online</span>
            <div className="icon">
              <MoreVertOutlinedIcon style={{ color: "#808080" }} />
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
