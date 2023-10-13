import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
// import { findAllByTestId } from "@testing-library/react";
// import validator from "validator";

const Registration = () => {
  const { login } = useUserContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  const [errName, setErrName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [errPassword, setErrPassword] = useState("");

  const navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
    setErrName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
    console.log("Password value:", e.target.value);
    console.log("ErrPassword state:", errPassword);
  };

  const emailValidation=(email)=>{
 return (email).toLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  }
  const handleSubmitProfile = (e) => {
    e.preventDefault();
    if (!name) {
      setErrName("Enter your Name");
      return;
    }
    if (!email) {
      setEmailError("Enter Your Email");
      return;
    }
    else if(!emailValidation(email)){
      setEmailError("enter a valid email")
    }
    if (!password) {
      setErrPassword("Enter Password");
      console.log("ErrPassword after keeping password field empty:", errPassword);
      return;
    }
    else if (password && password.length < 6) {
      setErrPassword("Password should be of minimum 6 characters");
      return;
    }

    const existingEmail = JSON.parse(localStorage.getItem("email"));
    if (existingEmail && existingEmail === email) {
      setEmailError("email already exists. Please choose a different email.");
      return;
    }
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("password", JSON.stringify(password));
    localStorage.setItem("username", JSON.stringify(name));
    login(name);
    setSignedUp(!signedUp);
    navigate("/");
  };

  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">
        <div class="flex justify-center items-center mt-2">
          <Link to={"/"}>
            <img
              className="h-[45px] w-[150px] m-2 ml-2 "
              src={"../images/Amazon_logo.png"}
              alt="abcd"
            />
          </Link>
        </div>
        <form
          className="w-[350px] mx-auto flex flex-col items-center"
          onSubmit={handleSubmitProfile}
        >
          <div className="w-full border border-zinc-200 p-6">
            <h2 className="font-titleFont text-2xl font-medium mb-4">
              Create account
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Your Name</p>
                <input
                  onChange={handleName}
                  className="w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none
                            focus-within:border-[#e77600] focus-within:shadow-amazonclone-yellow duration-100"
                  type="text "
                  value={name}
                />
                {errName && (
                  <p className="text-red-500 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    {errName}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Email</p>
                <input
                  onChange={handleEmail}
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none
                            focus-within:border-[#e77600] focus-within:shadow-amazonclone-yellow duration-100"
                  type="email "
                  value={email}
                />
                {emailError && (
                  <p className="text-red-500 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    {emailError}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Password</p>
                <input
                  value={password}
                  type="password"
                  title="Must be exactly six characters"
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none
                            focus-within:border-[#e77600] focus-within:shadow-amazonclone-yellow duration-100"
                  onChange={handlePassword}
              
                />
                {errPassword && (
                  <p className="text-red-500 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    {errPassword}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-1.5 mt-2 text-sm font-normal bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b
            border border-zinc-400 active:border-yellow-800 rounded-md"
              >
                Continue
              </button>
            </div>
            <p className="text-xs text-black leading-4 mt-4">
              By creating an account you agree to Amazon`s{" "}
              <span className="text-blue-600">Condition of use</span> and{" "}
              <span className="text-blue-600">privacy Notice.</span>
            </p>
          </div>
        </form>
        <div class="flex justify-center items-center mt-2">
          <p className="text-s text-black mt-2">
            {" "}
            Already have an account?
            <Link to="/login">
              <span
                className="text-s text-blue-600 hover:text-orange-600 hover:underline
		 underline-offset-1 cursor-pointer duration-100"
              >
                Sign in{" "}
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
