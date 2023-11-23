import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import NavBar from "./components/NavBar";
// import ChatBox from "./components/ChatBox";
import Login from "./pages/Login";
import Home from "./pages/Home";
import QuickPlay from "./pages/QuickPlay";
import QuickPlayResults from "./pages/QuickPlayResults";
import StartScuttlebudd from "./pages/StartScuttlebudd";
import Friends from "./pages/Friends";
import WhatsTheScuttlebudd from "./pages/WhatsTheScuttlebudd";
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
            <>
              <Route path="/" element={<Home />} />
              <Route path="/quickplay" element={<QuickPlay />} />
              <Route path="/results" element={<QuickPlayResults />} />
              <Route path="/startscuttlebudd" element={<StartScuttlebudd />} />
              <Route path="/friends" element={<Friends />} />
              <Route
                path="/whatsthescuttlebudd"
                element={<WhatsTheScuttlebudd />}
              />
            </>
          )}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
