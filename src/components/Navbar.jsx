import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Left: Logo + Name */}
      <div className="flex items-center space-x-3">
        <span className="text-2xl font-bold text-blue-600">Colligo</span>
      </div>

      {/* Right: Buttons */}
      <div className="flex items-center space-x-4">
        <button className="px-5 py-2 border border-blue-600 text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition">
          Sign In
        </button>
        <button className="px-5 py-2 bg-blue-600 text-white rounded-xl font-medium shadow-md hover:bg-blue-700 transition">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
