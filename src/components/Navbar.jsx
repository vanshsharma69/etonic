import React, { useState } from 'react';
import {
  Heart,
  ShoppingCart,
  Search,
  Menu,
  X,
  User,
  LogOut,
  Star,
  XCircle,
  ClipboardList,
  UserCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 px-4 w-full z-50 relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Mobile View */}
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Left Menu Button */}
          <div className="md:hidden w-1/3">
            <button
              className="flex items-center"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6 text-black" />
            </button>
          </div>

          {/* Logo */}
          <div className="w-1/3 text-center text-xl font-bold">
            <Link to="/">ETONIC</Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center justify-end space-x-4 w-1/3 md:hidden relative">
            <Link to="/wishlist">
              <Heart className="h-5 w-5 cursor-pointer text-black" />
            </Link>
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5 cursor-pointer text-black" />
            </Link>
            <div className="relative">
              <User
                className="h-5 w-5 cursor-pointer text-black"
                onClick={() => setUserMenuOpen(prev => !prev)}
              />
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black text-white rounded shadow-lg py-2 z-50">
                  <Link to="/account" className="flex items-center px-4 py-2 hover:bg-gray-800">
                    <UserCircle2 className="w-4 h-4 mr-2" />
                    Manage My Account
                  </Link>
                  <Link to="/orders" className="flex items-center px-4 py-2 hover:bg-gray-800">
                    <ClipboardList className="w-4 h-4 mr-2" />
                    My Order
                  </Link>
                  <div className="flex items-center px-4 py-2 hover:bg-gray-800">
                    <XCircle className="w-4 h-4 mr-2" />
                    My Cancellations
                  </div>
                  <div className="flex items-center px-4 py-2 hover:bg-gray-800">
                    <Star className="w-4 h-4 mr-2" />
                    My Reviews
                  </div>
                  <Link to="/sign" className="flex items-center px-4 py-2 hover:bg-gray-800">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign-in
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li><Link to="/" className="text-sm text-black hover:underline underline-offset-4">Home</Link></li>
          <li><Link to="/college" className="text-sm text-black hover:underline underline-offset-4">Buy & Sell</Link></li>
          <li><Link to="/pg" className="text-sm text-black hover:underline underline-offset-4">Browse PG</Link></li>
          <li><Link to="/about" className="text-sm text-black hover:underline underline-offset-4">About Us</Link></li>
          <li><Link to="/partner" className="text-sm text-black hover:underline underline-offset-4">Become A Partner</Link></li>
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-6 relative">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="pl-4 pr-12 py-2 text-sm border rounded-md bg-gray-100 placeholder:text-gray-500"
            />
            <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          </div>
          <Link to="/wishlist">
            <Heart className="h-5 w-5 cursor-pointer text-black" />
          </Link>
          <Link to="/cart">
            <ShoppingCart className="h-5 w-5 cursor-pointer text-black" />
          </Link>
          <div className="relative">
            <User
              className="h-5 w-5 cursor-pointer text-black"
              onClick={() => setUserMenuOpen(prev => !prev)}
            />
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-black text-white rounded shadow-lg py-2 z-50">
                <Link to="/account" className="flex items-center px-4 py-2 hover:bg-gray-800">
                  <UserCircle2 className="w-4 h-4 mr-2" />
                  Manage My Account
                </Link>
                <Link to="/orders" className="flex items-center px-4 py-2 hover:bg-gray-800">
                  <ClipboardList className="w-4 h-4 mr-2" />
                  My Order
                </Link>
                <div className="flex items-center px-4 py-2 hover:bg-gray-800">
                  <XCircle className="w-4 h-4 mr-2" />
                  My Cancellations
                </div>
                <div className="flex items-center px-4 py-2 hover:bg-gray-800">
                  <Star className="w-4 h-4 mr-2" />
                  My Reviews
                </div>
                <Link to="/sign" className="flex items-center px-4 py-2 hover:bg-gray-800">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign-in
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar from LEFT */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-40 transition-opacity duration-300 ${
          sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
      >
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 transition-transform duration-300 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold">ETONIC</span>
            <button onClick={() => setSidebarOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6 text-black" />
            </button>
          </div>
          <ul className="flex flex-col space-y-6">
            <li><Link to="/" className="text-base text-black hover:underline underline-offset-4">Home</Link></li>
            <li><Link to="/college" className="text-base text-black hover:underline underline-offset-4">Buy&Sell</Link></li>
            <li><Link to="/pg" className="text-base text-black hover:underline underline-offset-4">Browse PG</Link></li>
            <li><Link to="/about" className="text-base text-black hover:underline underline-offset-4">About Us</Link></li>
            <li><Link to="/partner" className="text-base text-black hover:underline underline-offset-4">Become A Partner</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
