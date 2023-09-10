import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css"; // Import your CSS file for styling

const Header = () => {
  const navigate = useNavigate();
  const loggedIn = sessionStorage.getItem("loggedIn") === "true";
  const userId = sessionStorage.getItem("userId");
  const userRole = sessionStorage.getItem("userRole"); // Get user's role

  const handleLogout = () => {
    // Clear sessionStorage and navigate to the home page
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">RealEstate</div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* {userRole === "owner" && ( // Render only for owners
            <li>
              <Link to="/postproperty">Post Properties</Link>
            </li>
          )} */}

          {loggedIn && userRole==="owner" ? (
            <li>
              <Link to="/postproperty">Post Properties</Link>
            </li>
          ) : (
            
            <li>
             
              
              <Link to="/signin">Post Properties</Link>
            </li>
          )}

          {loggedIn ? (
            <>
              <li>
                <Link className="log">{userId}</Link>
              </li>
              <li>
                <Link onClick={handleLogout} className="log"  to="/">
                  LogOut
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
