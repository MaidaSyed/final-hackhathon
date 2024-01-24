import React, { useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const ProjectForm = () => {
  const history = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    description: "",
    hostedUrl: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (Object.values(formData).some((value) => value.trim() === "")) {
      enqueueSnackbar("FILL ALL FIELDS", { variant: "error" });
      return;
    }

    axios
      .post("http://localhost:4000/projects", formData)
      .then((response) => {
        console.log(response.data);
        enqueueSnackbar("PROJECT ADDED SUCCESSFULLY", { variant: "success" });
        history("/home/:email")
        // Optionally, you can handle success in your UI
      })
      .catch((error) => {
        console.error("Error adding project:", error);
        // Optionally, you can handle errors in your UI
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="bg-white p-8 rounded-md shadow-lg w-96">
        <h2 className="text-4xl font-semibold mb-6 text-center text-gray-800">
          ADD PROJECT
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="flex flex-col">
            <span className="text-gray-800 mb-2">TITLE:</span>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="px-3 py-2 border rounded-md text-gray-800"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-gray-800 mb-2">NAME:</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="px-3 py-2 border rounded-md text-gray-800"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-gray-800 mb-2">DESCRIPTION:</span>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="px-3 py-2 border rounded-md text-gray-800"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-gray-800 mb-2">HOSTED URL:</span>
            <input
              type="text"
              name="hostedUrl"
              value={formData.hostedUrl}
              onChange={handleInputChange}
              className="px-3 py-2 border rounded-md text-gray-800"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            ADD PROJECT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
