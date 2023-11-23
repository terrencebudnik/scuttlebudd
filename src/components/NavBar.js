import React, { useEffect } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp, query, where, getDocs } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
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
    <nav className="nav-bar">
      <Link to="/" className="nav-bar-link">
      
      <h1 className="nav-bar-header">Scuttlebudd</h1>
      </Link>
      {user ? (
        <button onClick={signOut} className="logout-button" type="button">
          Sign Out
        </button>
      ) : (
        <button onClick={googleSignIn} className="login-button" type="button">
          Login
        </button>
      )}
    </nav>
  );
};

export default NavBar;
