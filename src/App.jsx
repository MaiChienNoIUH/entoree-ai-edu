import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
    const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setCurrentUser(storedUser);
    }
    const handleStorageChange = () => {
      const updatedUser = JSON.parse(localStorage.getItem("currentUser"));
      setCurrentUser(updatedUser);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  return (
    <Router>
      <div className="app-container">
        <Header currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <Routes>
          <Route path="/" element={<HomePage currentUser={currentUser} />}/>
          <Route path="/favorites" element={<FavoritesPage currentUser={currentUser}/>}/>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <ToastContainer position="top-center" />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
