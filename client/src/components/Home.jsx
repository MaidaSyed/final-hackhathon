import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import TableComponent from "./TableComponent";
import CardComponent from "./CardComponent";

const Home = () => {
  const userId = useParams();
  const id = userId.email;
  const [projects, setProjects] = useState([]);
  const [displayTable, setDisplayTable] = useState(true);

  useEffect(() => {
    // Fetch all projects from the backend
    axios
      .get("http://localhost:4000/projects")
      .then((res) => {
        setProjects(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const toggleDisplay = () => {
    setDisplayTable((prevDisplay) => !prevDisplay);
  };

  return (
    <div>
      <Header userId={userId} />
      <div className="flex items-center justify-evenly h-16 bg-blue-600 text-white">
        <p className="text-xl font-semibold">
          <span className="text-yellow-300">EMAIL:</span> {id}
        </p>
        <button
          onClick={toggleDisplay}
          className="px-4 py-2 bg-blue-500 text-white rounded-md mr-4 shadow-sm shadow-black"
        >
          {displayTable ? "Switch to Cards" : "Switch to Table"}
        </button>
      </div>
      <div className="flex flex-wrap mt-3"></div>
      {displayTable ? (
        <TableComponent projects={projects} />
      ) : (
        <CardComponent projects={projects} />
      )}
    </div>
  );
};

export default Home;
