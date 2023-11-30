import React from "react";
import { auth } from "./firebase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
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
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import "./App.css";

function App() {
  const [user] = useAuthState(auth);

  return (
    <Container className="App" maxWidth={false} disableGutters={true}>
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
    </Container>
  );
}

export default App;
