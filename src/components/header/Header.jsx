import React, { useState } from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { VscSearch } from "react-icons/vsc";
import { MdNotifications, MdApps } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ handletogglesidebar }) => {
  const [input, setinput] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };
  const user = useSelector((state) => state.auth?.user);

  return (
    <div className="header ">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handletogglesidebar()}
      />
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt=""
          className="header__logo"
        />
      </Link>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <button type="submit">
          <VscSearch size={22} />
        </button>
      </form>

      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src={user?.photoURL} alt="avatar" />
      </div>
    </div>
  );
};

export default Header;
