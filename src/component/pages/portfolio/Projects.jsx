import React from "react";
import Blogs from "../../../assets/images/blogs.png";
import Hotel from "../../../assets/images/hotelbabari.png";
import Hub from "../../../assets/images/hubit.png";
import Cab from "../../../assets/images/Cab.png";
import cms from "../../../assets/images/cms.png";
const Projects = () => {
  const ProjectDetails = [
    {
      name: "Blog-Management System",
      image: Blogs,
      path: "https://blogs-view.netlify.app/",
    },
    {
      name: "Hotel Sites",
      image: Hotel,
      path: "https://hotelbabari.com/",
    },
    {
      name: "Online Cab Booking System",
      image: Cab,
      path: "https://github.com/Himalf/clz-project-admin",
    },
    {
      name: "Institutional Sites",
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
    <div className="bg-secondColor text-white p-5">
      <h1 className="text-3xl text-center font-bold p-5">My Projects</h1>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 lf gap-10 justify-items-center">
        {ProjectDetails.map((val, i) => {
          return (
            <div
              key={i}
              className=" w-full shadow-md shadow-black rounded-md p-2 cursor-pointer bg-mainColor"
              onClick={() => {
                window.open(val.path, "_blank");
              }}
            >
              <div>
                <h1 className="text-center text-xl font-bold p-2">
                  {val.name}
                </h1>
                <hr />
              </div>
              <div className="">
                <img src={val.image} alt="loading..." className="w-full" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
