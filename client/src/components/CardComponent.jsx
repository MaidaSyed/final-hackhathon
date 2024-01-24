import React from "react";

const CardComponent = ({ projects }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 ml-3">Projects Cards</h2>
      <div className="flex flex-wrap justify-center">
        {projects.map((project) => (
          <div
            key={project._id}
            className="m-4 p-6 max-w-md bg-white border border-gray-300 rounded-md shadow-md flex flex-col gap-4 w-[270px]"
          >
            <p className="text-lg font-semibold text-gray-800">
              <span className="text-blue-500">NAME:</span> {project.name}
            </p>
            <p className="text-lg font-semibold text-gray-800">
              <span className="text-blue-500">TITLE:</span> {project.title}
            </p>
            <p className="text-lg text-gray-700">
              <span className="text-blue-500">DESCRIPTION:</span>{" "}
              {project.description}
            </p>
            <div className="text-lg">
              <span className="text-blue-500">HOSTED URL:</span>{" "}
              <a
                href={project.hostedUrl}
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.hostedUrl}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
