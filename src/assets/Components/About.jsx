import React from "react";
import profile from "../images/img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="container mx-auto flex mt-10 gap-2 py-5 px-16" id="About">
      <div className="flex w-1/2">
        <img
          src={profile}
          alt="profile"
          className="rounded-3xl w-fit h-72 mx-auto"
        />
      </div>
      <div className="flex w-1/2 flex-col">
        <h1 className="text-3xl font-bold text-gray-600">
          <span className="bg-gray-600 px-1 mr-2"></span>ABOUT ME
        </h1>
        <p className="text-lg mt-5 text-gray-500">
          Hi, I'm
          <span className="text-blue-600 font-bold"> Ashish Adhikari</span>! I'm
          a passionate software developer specializing in crafting dynamic,
          responsive, and user-friendly websites. With expertise in Laravel and
          React, I thrive on solving complex problems and building innovative
          solutions that bring ideas to life.
        </p>
        <div className="flex justify-center">
          <button className="mt-5 text-gray-600 border-2 border-gray-300 p-3 rounded-3xl hover:bg-gray-200 font-bold">
            Download CV <FontAwesomeIcon icon={faDownload} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
