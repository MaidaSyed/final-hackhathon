import React from "react";

const TableComponent = ({ projects }) => {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 ml-3">Projects Table</h2>
      <table className="w-full border-collapse border border-gray-300 bg-white shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 py-3 px-4">Name</th>
            <th className="border border-gray-300 py-3 px-4">Title</th>
            <th className="hidden sm:table-cell border border-gray-300 py-3 px-4">Description</th>
            <th className="border border-gray-300 py-3 px-4">Hosted URL</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr
              key={project._id}
              className={`transition-colors duration-300 ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } hover:bg-gray-50`}
            >
              <td className="border border-gray-300 py-3 px-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-800">
                {project.name}
              </td>
              <td className="border border-gray-300 py-3 px-4 whitespace-no-wrap text-sm leading-5 text-gray-600">
                {project.title}
              </td>
              <td className="hidden sm:table-cell border border-gray-300 py-3 px-4 whitespace-no-wrap text-sm leading-5 text-gray-600">
                {project.description}
              </td>
              <td className="border border-gray-300 py-3 px-4 whitespace-no-wrap text-sm leading-5">
                <a
                  href={project.hostedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {project.hostedUrl}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
