// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import HomePage2 from "./pages/HomePage/HomePage2";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage2/>
            </PrivateRoute>
          }
        />
        <Route 
          path="/register" 
          element={<RegisterPage/>} 
        />
        <Route 
          path="/login" 
          element={<LoginPage/>} 
        />
        <Route 
          path="/videoplayer" 
          element={<VideoPlayer/>} 
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
