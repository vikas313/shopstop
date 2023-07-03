import { useState } from "react";
import Loginpagedata from "./Loginpagedata";
import { auth, googleProvider } from "../configs/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Login(props) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, seterror] = useState("");
  const [iserror, setiserror] = useState(false);
  const handlechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const signIn = async () => {
    setiserror(false);
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      await props.setLogIn(true);
    } catch (err) {
      isError(err)
    }
  };
  const logIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      await props.setLogIn(true);
    } catch (err) {
      isError(err)
    }
  };
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      await props.setLogIn(true);
    } catch (err) {
      isError(err)
    }
  };
  const isError = (err)=>{
    setiserror(true);
      seterror(err.message.split(":")[1]);
  }
  return (
    <>
      <Loginpagedata />
      <div className="form">
        {
          <>
            <div className="signups">
              <div className="inputLabels">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  name="email"
                  placeholder="enter mail"
                  onChange={handlechange}
                />
              </div>
              <div>
                <label htmlFor="email">Password:</label>
                <input
                  type="text"
                  name="password"
                  placeholder="Enter password"
                  onChange={handlechange}
                />
              </div>
              <button onClick={signIn}>Sign up</button>
            </div>

            {iserror ? error : null}
            <div className="preaccount">
              <p>Allready have an account?</p>
              <button onClick={logIn}>Login</button>
            </div>
            <div className="preaccount">
              <button onClick={signInWithGoogle}>Sign in with GOOGLE</button>
            </div>
          </>
        }
      </div>
    </>
  );
}
export default Login;
