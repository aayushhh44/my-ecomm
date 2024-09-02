import React from "react";

const Login = () => {
  return (
    <div className="flex items-center mt-4">
      <div className="w-1/2">
        <img
          className="h-[600px] w-[600px]"
          src="/assets/login.jpg"
          alt="Login Image" 
        />
      </div>
      <div className="flex gap-8 flex-col w-1/2">
        <h1 className="text-3xl font-poppins">Create an Account</h1>
        <p className="font-poppins">Enter your details below</p>

        <input
          type="text"
          class="border-b-2 w-96 border-black focus:outline-none placeholder:font-poppins"
          placeholder="Name"
        />
        <input
          type="email"
          class="border-b-2 w-96 border-black focus:outline-none placeholder:font-poppins"
          placeholder="Email"
        />
        <input
          type="password"
          class="border-b-2 w-96 border-black focus:outline-none placeholder:font-poppins"
          placeholder="Password"
        />

        <button className="w-96 bg-[#DB4444] p-2">Create Account</button>
      </div>
    </div>
  );
};

export default Login;
