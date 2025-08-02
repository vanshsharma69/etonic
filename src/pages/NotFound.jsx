import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center min-h-[70vh] px-4">
        <div className="w-full max-w-2xl">
          <p className="text-sm text-gray-500 mb-2">
            <Link to="/" className="text-gray-500 hover:underline">Home</Link> / 404 Error
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">404 Not Found</h1>
          <p className="text-gray-600 mb-6">
            Your visited page not found. You may go home page.
          </p>
          <Link
            to="/"
            className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded transition"
          >
            Back to home page
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
