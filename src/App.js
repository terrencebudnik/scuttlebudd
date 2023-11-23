import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          {!user ? (
            <Route path="/" element={<Login />} />
          ) : (
            <Route path="/" element={<Home />} />
          )}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

