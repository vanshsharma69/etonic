import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GrGoogle } from 'react-icons/gr';

const Login = () => {
  return (
    <div className="font-sans">
      <Navbar />

      {/* Login Section */}
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white py-12 px-4 md:px-16">
        {/* Image Section */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src="https://imgs.search.brave.com/Z-6Ezqjii4Oi5mN4I1EtIacScFHZu5CEj8lSOmHThXo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/bW9iaWxlLWxvZ2lu/LWNvbmNlcHQtaWxs/dXN0cmF0aW9uXzEx/NDM2MC04My5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQw"
            alt="Shopping Illustration"
            className="rounded-md w-full"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-2">Welcome Back!</h2>
          <p className="text-sm text-gray-600 mb-6">Login to your account</p>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="w-full border-b border-gray-400 focus:outline-none py-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border-b border-gray-400 focus:outline-none py-2"
            />

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
            >
              Log In
            </button>

            <button
              type="button"
              className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center space-x-2"
            >
              <GrGoogle />
              <span>Log in with Google</span>
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            Don't have an account? <a href="sign" className="text-blue-500 underline">Sign up</a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
