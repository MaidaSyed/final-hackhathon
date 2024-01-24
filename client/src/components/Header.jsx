import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ userId }) => {
  const navigate = useNavigate();
  const id = userId.email;
  console.log(id);

  const navigateToForm = () => {
    // Convert userId to string and then append it to the URL
    navigate(`/form/${id}`);
  };

  const logout = () => {
    navigate(`/`);
  };

  return (
    <div className=" w-full">
      <div className="flex flex-col md:flex-row justify-between items-center h-fit md:h-20 px-5 gap-3 bg-gray-800">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-wide">
          Project Sharing Application
        </h1>
        <div className="flex gap-2 md:gap-5 md:mt-0 items-center">
          <button
            onClick={navigateToForm}
            className="bg-blue-500 text-white py-1 px-2 md:py-2 md:px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            ADD PROJECT
          </button>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-2 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
