import React from "react";
import {
  MdExitToApp,
  MdHistory,
  MdHome,
  MdLibraryBooks,
  MdSentimentDissatisfied,
  MdSubscriptions,
  MdThumbUp,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { log_out } from "../../redux/actions/auth.action";
import "./_sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = ({ togglsideebar, handletogglesidebar }) => {
  const dispatch = useDispatch();
  const handlelogout = () => {
    dispatch(log_out());
  };
  return (
    <nav
      className={togglsideebar ? "sidebar open" : "sidebar"}
      onClick={() => handletogglesidebar(false)}
    >
      <Link to="/">
        <li>
          <MdHome size={23} />
          <span>Home</span>
        </li>
      </Link>

      <Link to="/feed/subscriptions">
        <li>
          <MdSubscriptions size={23} />
          <span>Subscriptions</span>
        </li>
      </Link>

      <li>
        <MdThumbUp size={23} />
        <span>Liked Video</span>
      </li>
      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>
      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={23} />
        <span>I dont't Know</span>
      </li>
      <hr />
      <li>
        <MdExitToApp size={23} onClick={handlelogout} />
        <span>Log Out</span>
      </li>
      <hr />
    </nav>
  );
};

export default Sidebar;
