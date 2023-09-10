import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import SignIn from "./Component/SignIn/SignIn";
import SignUp from "./Component/SignUp/SignUp";
import PropertyPage from "./Component/Properties/PropertyPage";
import PostProperty from "./Component/Properties/PostProperty";
import AdminPage from "./Component/Admin/AdminPage";
import OwnerDashboard from "./Component/Dashboard/OwnerDashboard";
import PropertyServicePage from "./Component/Properties/PropertyServicePage";
import PropertyUpdate from "./Component/Properties/PropertyUpdate";
import ForgotPassword from "./Component/Service/ForgotPassword";
import UpdateAccount from "./Component/Service/UpdateAccount";
import AboutUs from "./Component/AboutUs";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    sessionStorage.getItem("loggedIn") === "true"
  );
  const [userId, setUserId] = useState(sessionStorage.getItem("userId") || "");
  // const loggedIn = sessionStorage.getItem("loggedIn") === "true";
  const userRole = sessionStorage.getItem("userRole");
  // const handleLogin = (loggedIn, userId) => {
  //   setLoggedIn(loggedIn);
  //   setUserId(userId);
  // };

  const handleLogin = (loggedIn, userId) => {
    setLoggedIn(loggedIn);
    setUserId(userId);
    sessionStorage.setItem("loggedIn", loggedIn ? "true" : "false");
    sessionStorage.setItem("userId", userId);
  };

  return (
    <Router>
      <div className="App">
        <Header loggedIn={loggedIn} userId={userId}></Header>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/signin"
              element={<SignIn onSuccessfulLogin={handleLogin} />}
            />
            {/* <Route path="/signin" element={<SignIn />} /> */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/properties" element={<PropertyPage />} />
            <Route path="/postproperty" element={<PostProperty />} />
            {loggedIn && userRole === "admin" && (
              <Route path="/admin" element={<AdminPage />} />
            )}
            {loggedIn && userRole === "owner" && (
              <Route path="/owner" element={<OwnerDashboard />} />
            )}
            <Route
              path="/property/:propertyId"
              element={<PropertyServicePage />}
            />
            <Route
              path="/propertyupdate/:propertyId"
              element={<PropertyUpdate />}
            />
            <Route path="/update/:userId" element={<UpdateAccount />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/about" element={<AboutUs />}></Route>
            {/* Add more routes for other pages */}
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
