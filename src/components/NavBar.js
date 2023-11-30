import React, { useEffect } from "react";
import { auth, db } from "../firebase";
import {
  addDoc,
  collection,
  serverTimestamp,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      createUser();
    }
  }, [user]);

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth, provider);
  };

  const createUser = async () => {
    if (!auth.currentUser) return;

    const uid = auth.currentUser.uid;
    const userName = auth.currentUser.email.split("@")[0];

    const usersRef = collection(db, "users");
    const q = query(usersRef, where("id", "==", uid));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      await addDoc(usersRef, {
        id: uid,
        userName: userName,
        createdAt: serverTimestamp(),
      });
    }
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#00d8ffff" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link to="/" className="main-link">
            <h1>Scuttlebudd</h1>
          </Link>
          {user ? (
            <button onClick={signOut} className="logout-button" type="button">
              Sign Out
            </button>
          ) : (
            <button
              onClick={googleSignIn}
              className="login-button"
              type="button"
            >
              Login
            </button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
