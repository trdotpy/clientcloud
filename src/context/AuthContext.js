import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../utils/firebase";

export const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  function logIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function logOut() {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth", user);
      if (user) {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        setUser(null);
        localStorage.removeItem("user");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider value={{ user, logIn, signUp, logOut }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(userAuthContext);
}
