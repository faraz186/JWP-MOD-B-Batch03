import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Sign up Auth   

  const signUpHandler = async (e) => {
    try {
      e.preventDefault();

      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          console.log("user", user);
        })
        .catch((err) => console.log("error", err));
    } catch (error) {
      console.log("error", error);
    }
  };

  // Google Auth

  const googleHandler = async () => {
    try {
      const provider = new GoogleAuthProvider();

      signInWithPopup(auth, provider)
        .then((result) => {
          console.log("result", result);
        })
        .catch((error) => {
          console.log("error", error);
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  // Github Auth

  const githubHandler = async () => {
    try {
      const provider = new GithubAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log("result", result);
        })
        .catch((error) => {
          console.log("error", error);
        });
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <form onSubmit={signUpHandler}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
        />

        <br />
        <br />

        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter password"
        />

        <br />
        <br />

        <button>Sign up</button>
      </form>

      <button onClick={googleHandler}>Google</button>
      <br />
      <br />
      <button onClick={githubHandler}>Github</button>
    </div>
  );
};

export default App;
