import React from "react";
import './App.css';
const Login = () => {
  return (
    <div className="flex min-h-screen w-full bg-gray-100">
      {/* Left Side - Illustration */}
      <div className="w-2/5 flex items-center justify-center p-10">
        <img
          src="/illustration.png" // Đổi thành đường dẫn ảnh của bạn
          alt="POS Illustration"
          className="max-w-full h-auto"
        />
      </div>
      
      {/* Right Side - Login Form */}
      <div className="w-3/5 flex flex-col justify-center p-10 bg-white shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4 text-black -mt-32 cutom-font-label">POS</h1> 
        <form className="space-y-2 flex flex-col items-center mt-24">
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-xl px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-xl px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="w-xl flex items-end justify-between">
            <label className="flex items-center text-black">
              <input type="checkbox" className="mr-2 " /> Keep me signed in
            </label>
          </div>
          
          <button
            type="submit"
            className="w-xl bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;