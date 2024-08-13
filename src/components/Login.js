import React, { useState, useRef, useEffect } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useSelector } from "react-redux";

const Login = () => {
  const email = useRef("");
  const password = useRef("");
  const dispatch = useDispatch();
  const name = useRef("");
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    if (user) {
      navigate("/browse");
    }
  }, [user])
 

  const [errorMsg, setErrorMsg] = useState("");

  const [value, setValue] = useState("Sign in");

  const convert = () => {
    if (value == "Sign in") {
      setValue("Sign Up");
    } else {
      setValue("Sign in");
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    const result = validateData(email.current.value, password.current.value);
  
    if (result == null) {
      if (value === "Sign Up") {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
            return updateProfile(user, {
              displayName: name.current.value,
              photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwme89cM8YZvHcybGrZl_Obd9U9p5QabozJQ&s",
            });
          })
          .then(() => {
            const user = auth.currentUser;
            if (user) {
              const { uid, email, displayName, photoURL } = user;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              navigate("/browse");
            }
          })
          .catch((error) => {
            
          });
      } else {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
            const { uid, email, displayName, photoURL } = user;
            dispatch(addUser({ uid, email, displayName, photoURL }));
            navigate("/browse");
          })
          .catch((error) => {
          
          });
      }
    }
    setErrorMsg(result);
  };
  

  return (
    <div className="relative h-screen">
      <Header />
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/813635c2-ab2e-416f-aca0-2fe712618ed4/CA-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_9148549a-7358-4ba2-93c6-b061d704ac8e_large.jpg"
        alt="background-image"
      />
      <div className="absolute inset-0 z-10 bg-black bg-opacity-40 flex justify-center items-center">
        {/* Add any content here that you want to display on top of the overlay */}
      </div>
      <div className="w-3/12 gap-3 bg-black absolute top-48 mx-auto left-0 right-0 rounded-lg z-40 text-white p-3 bg-opacity-70">
        <form>
          <h2 className="text-white font-bold text-3xl text-center mb-7">
            {value}
          </h2>
          <div className="flex gap-3 align-middle justify-center">
            <input
              type="text"
              ref={email}
              placeholder="Enter email address"
              className="w-64 rounded-lg p-4 h-11 mb-5 text-black"
            />
            <br />
            <br />
          </div>
          {value == "Sign Up" && (
            <div className="flex gap-3 align-middle justify-center">
              <input
                type="text"
                ref={name}
                placeholder="Enter your name"
                className="w-64 rounded-lg p-4 h-11 mb-5 text-black"
              />
              <br />
              <br />
            </div>
          )}

          <div className="flex gap-2 align-middle justify-center">
            <input
              type="text"
              ref={password}
              placeholder="Enter password"
              className="w-64 rounded-lg p-4 h-11 mb-5 text-black"
            />
            <br />
            <br />
          </div>

          <p>{errorMsg}</p>

          <div className="text-center">
            <button
              className="p-2 bg-red-500 text-white text-xl rounded-lg mb-7 w-64"
              onClick={handleClick}
            >
              {value}
            </button>
            {value == "Sign in" ? (
              <p className="text-gray-300">
                If you are new user,{" "}
                <span className="text-red-500 text-xl italic font-bold">
                  <button onClick={convert}>Sign Up here</button>
                </span>
              </p>
            ) : (
              ""
            )}
            {value == "Sign Up" ? (
              <p className="text-gray-300">
                Continue to{" "}
                <span className="text-red-500 text-xl italic font-bold">
                  <button onClick={convert}>Sign In</button>
                </span>
              </p>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
