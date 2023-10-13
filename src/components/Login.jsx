import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Login = () => {
  const { login } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const navigate = useNavigate();
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleSubmitProfile = (e) => {
    e.preventDefault();
    const storeEmail = JSON.parse(localStorage.getItem("email"));
    const storePassword = JSON.parse(localStorage.getItem("password"));
    const storeUserName = JSON.parse(localStorage.getItem("username"));
    console.log("storeUserName:", storeUserName);
    console.log("storeEmail:", storeEmail);
    console.log("storePassword:", storePassword);
    console.log("password registered with", password);
    if(!password && !email){
      setErrEmail(" please enter email "); 
      setErrPassword("please enter password");
      return;
    }
    if (!email) {
      setErrEmail(" please enter email ");
      return;
    }
    if(storeEmail !== email){
      setErrEmail(" email entered is wrong ");
      return;
    }
    if (!password) {
    setErrPassword("please enter password");
    return
    }
  
    if (storePassword !== password) {
      setErrPassword("password entered is wrong");
      return;
    }

    if(storeEmail===email && storePassword===password){
      alert("logged in successfully");
      login(storeUserName);
      console.log("you are logged in with profile name as", storeUserName);
      navigate("/"); 
    }
  };

  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 h-screen pb-10">
        <form
          className="w-[350px] mx-auto flex flex-col items-center"
          onSubmit={handleSubmitProfile}
        >
          <Link to={"/"}>
            <img
              className="h-[45px] w-[150px] m-2 ml-2"
              src={"../images/Amazon_logo.png"}
              alt="abc"
            />
          </Link>
          <div className="w-full border border-zinc-200 p-6">
            <h2 className="font-titleFont text-2xl font-medium mb-4">
              sign in
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-large font-normal">Email</p>
                <input
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none
               focus-within:border-[#e77600] focus-within:shadow-amazonclone-yellow duration-100"
                  type="text"
                  onChange={handleEmail}
                />
                {errEmail && (
                  <p className="text-red-500 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    {errEmail}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-medium font-normal">Password</p>
                <input
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none
              focus-within:border-[#e77600] focus-within:shadow-amazonclone-yellow duration-100"
                  type="password"
                  onChange={handlePassword}
                />
                {errPassword && (
                  <p className="text-red-500 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    {errPassword}
                  </p>
                )}
              </div>
              <button
                className="w-full py-1.5 text-sm font-normal rounded-md bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b
            border border-zinc-400 active:border-yellow-800 mt-2"
              >
                Continue
              </button>
            </div>
            <p className="text-xs text-black leading-4 mt-4">
              By continuing,you agree to Amazon`s{" "}
              <span className="text-blue-600">Condition of use</span> and{" "}
              <span className="text-blue-600">privacy Notice.</span>
            </p>
            <p></p>
          </div>
          <p className="w-full text-xs text-gray-600 my-4 flex items-center">
            <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
            <span className="w-1/3 text-center">New to Amazon?</span>
            <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
          </p>
        </form>
        <div className="flex justify-center items-center mt-2">
          <Link to="/registration">
            <button
              className="w-[300px] py-1.5 text-sm font-normal rounded-md bg-gradient-to-t from-[#ebe9e4] to-[#e7e5df] hover:bg-gradient-to-b
            border border-zinc-400 active:border-yellow-800"
            >
              Create your Amazon account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
