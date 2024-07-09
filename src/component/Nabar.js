import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Nabar({ authenticate, setAuthenticate }) {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Hone",
    "Sale",
    "지속가능성성",
  ];
  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate("/login");
  };
  const gotomain = () => {
    navigate("/");
  };
  const search =(e)=>{
    console.log(e.key)
    if(e.key == "Enter"){
      let keyword=e.target.value;
      console.log(keyword)
      navigate(`/?q=${keyword}`)
    }
  }
  return (
    <div>
      <div className="login-button" onClick={gotoLogin}>
        <FaRegUser />
        {authenticate ? (
          <span onClick={() => setAuthenticate(false)}>로그아웃 </span>
        ) : (
          <span>로그인 </span>
        )}
      </div>
      <div className="nav-section" onClick={gotomain}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/800px-Zara_Logo.svg.png"
          alt=""
          width={100}
        />
      </div>
      <div className="menu_list">
        <ul>
          {menuList.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <div className="input">
          <IoSearchSharp />
          <input type="text" onKeyDown={search} />
        </div>
      </div>
    </div>
  );
}

export default Nabar;
