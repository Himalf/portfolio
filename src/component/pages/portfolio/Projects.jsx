import React from "react";
import Blogs from "../../../assets/images/blogs.png";
import Hotel from "../../../assets/images/hotelbabari.png";
import Hub from "../../../assets/images/hubit.png";
import Cab from "../../../assets/images/Cab.png";
import cms from "../../../assets/images/cms.png";
import movie from "../../../assets/images/movie.png";

const Projects = ({ isDarkMode }) => {
  const ProjectDetails = [
    {
      name: "Online Movie Ticket Booking System With DSA Algorithm",
      image: movie,
      path: "https://github.com/Himalf/movieadmin.git",
    },
    {
      name: "Blog-Management System",
      image: Blogs,
      path: "https://blogs-view.netlify.app/",
    },
    {
      name: "Hotel Website",
      image: Hotel,
      path: "https://hotelbabari.com/",
    },
    {
      name: "Online Cab Booking System",
      image: Cab,
      path: "https://github.com/Himalf/clz-project-admin",
    },
    {
      name: "Institutional Website",
      image: Hub,
      path: "https://blogs-view.netlify.app/",
    },
    {
      name: "Content Management System",
      image: cms,
      path: "https://blog-himal.netlify.app/",
    },
  ];

  return (
    <div
      className={`min-h-screen py-16 px-8 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1
          className={`text-5xl font-bold ${
            isDarkMode ? "text-indigo-400" : "text-indigo-600"
          }`}
        >
          My Projects
        </h1>
        <p
          className={`text-lg mt-4 ${
            isDarkMode ? "text-gray-400" : "text-gray-700"
          }`}
        >
          Explore some of my recent works showcasing my skills and expertise.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ProjectDetails.map((project, i) => (
          <div
            key={i}
            className={`group relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 ${
              isDarkMode
                ? "bg-gradient-to-b from-gray-700 to-gray-900"
                : "bg-gradient-to-b from-white to-gray-200"
            }`}
            onClick={() => window.open(project.path, "_blank")}
          >
            {/* Image Section */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover group-hover:opacity-75 transition-opacity duration-300"
            />
            {/* Project Details */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold text-white">{project.name}</h3>
              <button
                className="mt-2 py-2 px-4 rounded-md bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-400 transition-colors"
                onClick={() => window.open(project.path, "_blank")}
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
