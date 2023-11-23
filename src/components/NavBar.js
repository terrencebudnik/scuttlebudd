import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className="nav-bar">
      <h1 className="nav-bar-header">Scuttlebudd</h1>
      {user ? (
        <button onClick={signOut} className="logout-button" type="button">
          Sign Out
        </button>
      ) : (
        <button className="login-button"
            onClick={googleSignIn}
            type="button"
          >
            Login
        </button>
      )}
    </nav>
  );
};

export default NavBar;
