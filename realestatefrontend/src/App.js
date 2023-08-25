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

function App() {
  const [loggedIn, setLoggedIn] = useState(
    sessionStorage.getItem("loggedIn") === "true"
  );
  const [userId, setUserId] = useState(sessionStorage.getItem("userId") || "");

  const handleLogin = (loggedIn, userId) => {
    setLoggedIn(loggedIn);
    setUserId(userId);
  };

  return (
    <Router>
      <div>
        <Header loggedIn={loggedIn} userId={userId}></Header>
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
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/owner" element={<OwnerDashboard />} />
          <Route
            path="/property/:propertyId"
            element={<PropertyServicePage />}
          />
          {/* Add more routes for other pages */}
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
