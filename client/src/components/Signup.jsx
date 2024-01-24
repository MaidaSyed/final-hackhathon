import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";

const Signup = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:4000/signup", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            enqueueSnackbar("user already exist", { variant: "error" });
          } else if (res.data == "notexist") {
            history(`/home/${email}`);
            enqueueSnackbar("SIGNUP SUCCESSFULLY", { variant: "success" });
          }
        })
        .catch((e) => {
          enqueueSnackbar("WRONG DETAILS", { variant: "error" });
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="bg-white p-8 rounded-md shadow-lg w-96">
        <h2 className="text-4xl font-semibold mb-6 text-center text-gray-800">
          Signup
        </h2>
        <form onSubmit={submit} className="flex flex-col gap-4">
          <label className="flex flex-col">
            <span className="text-gray-800 mb-2">Email:</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 border rounded-md text-gray-800"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-gray-800 mb-2">Password:</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 py-2 border rounded-md text-gray-800"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Signup
          </button>
        </form>
        <p className="mt-4 text-center text-gray-800">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
