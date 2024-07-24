import { useState } from "react";
import { Link } from "react-router-dom";

function Drawer() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="drawer">
      <input
        id="my-drawer"
        type="checkbox"
        checked={isChecked}
        className="drawer-toggle"
      />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn btn-square btn-ghost drawer-button"
          onClick={() => setIsChecked(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={() => setIsChecked(false)}
        ></label>
        <ul className="menu p-4 w-56 rounded-box min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}

          <Link to="/" onClick={() => setIsChecked(false)}>
            <li className="p-2 hover:bg-slate-400 hover:text-white hover:rounded-lg">
              All Questions
            </li>
          </Link>
          <Link to="/network-fundamentals" onClick={() => setIsChecked(false)}>
            <li className="p-2 hover:bg-slate-400 hover:text-white hover:rounded-lg">
              Network Fundamentals
            </li>
          </Link>
          <Link to="/ip-connectivity" onClick={() => setIsChecked(false)}>
            <li className="p-2 hover:bg-slate-400 hover:text-white hover:rounded-lg">
              IP Connectivity
            </li>
          </Link>
          <Link to="/quizzes" onClick={() => setIsChecked(false)}>
            <li className="p-2 hover:bg-slate-400 hover:text-white hover:rounded-lg">
              Quiz Section
            </li>
          </Link>
          <Link to="/wireless-lan" onClick={() => setIsChecked(false)}>
            <li className="p-2 hover:bg-slate-400 hover:text-white hover:rounded-lg">
              Wireless LAN
            </li>
          </Link>
          <Link to="/ip-services-network" onClick={() => setIsChecked(false)}>
            <li className="p-2 hover:bg-slate-400 hover:text-white hover:rounded-lg">
              IP Services-Network Associate
            </li>
          </Link>
          <Link to="/quick-revision" onClick={() => setIsChecked(false)}>
            <li className="p-2 hover:bg-slate-400 hover:text-white hover:rounded-lg">
              Quick Revision Section
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
export default Drawer;
