import React from "react";

const InstaProfileCard = ({ username, btntext, profileurl, imageurl, viewprofileurl }) => {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-black/90 backdrop-blur-lg 
                      border border-gray-700/50 rounded-2xl w-80 sm:w-96 text-center shadow-[0_0_30px_rgba(255,20,180,0.4)] 
                      transition-all duration-500 hover:scale-[1.04] hover:shadow-[0_0_50px_rgba(255,20,180,0.7)]">
        
        {/* Header Neon Bar */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-pink-500 to-purple-700 rounded-t-2xl blur-[1px] opacity-80"></div>
        
        {/* Profile Image */}
        <div className="relative flex justify-center mt-10">
          <div className="absolute inset-0 flex justify-center">
            <div className="w-32 h-32 bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 rounded-full blur-2xl opacity-50"></div>
          </div>
          <img
            src={imageurl}
            alt="Profile"
            className="relative w-28 h-28 rounded-full object-cover border-4 border-gray-900 shadow-[0_0_20px_rgba(255,0,150,0.6)]"
          />
        </div>

        {/* Profile Info */}
        <h2 className="text-white text-2xl font-semibold mt-5 tracking-wide">{username}</h2>
        <p className="text-pink-400 text-sm mb-5">@{profileurl}</p>

        {/* Buttons */}
        <div className="flex flex-col gap-3 items-center mb-6">
          <button className="px-8 py-2 bg-gradient-to-r from-pink-500 to-purple-700 rounded-full 
                             text-white font-medium tracking-wide shadow-md 
                             hover:shadow-[0_0_25px_rgba(255,0,150,0.8)] transition-all duration-300">
            Follow
          </button>
          <a
            href={viewprofileurl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-2 border border-pink-500 rounded-full text-pink-400 font-medium 
                       hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-700 hover:text-white 
                       transition-all duration-300"
          >
            {btntext}
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstaProfileCard;

