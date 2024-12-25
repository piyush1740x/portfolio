import React from "react";
import { Typewriter } from "react-simple-typewriter";
import About from "./About";
const Main = () => {
  return (
    <>
      <div className="animated-background  text-white">
        <header className="h-screen px-10 py-16 md:px-20 md:py-24 flex flex-col md:flex-row justify-between items-center  text-white rounded-lg shadow-2xl">
          <div className="max-w-2xl text-center md:text-left flex flex-col justify-center space-y-6">
            <h1 className="text-3xl md:text-4xl font-semibold text-yellow-300">
              Hi there, I'm{" "}
              <span className="font-bold  text-green-500">Harsh</span>
            </h1>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-snug text-shadow-lg">
              Welcome to My Portfolio
            </h2>
            <h3 className="text-2xl font-medium text-gray-100">
              I'm a{" "}
              <span className="font-extrabold text-yellow-300">
                <Typewriter
                  words={[
                    "Student",
                    "Web Developer",
                    "Coder",
                    "Problem Solver",
                    "UI UX Designer",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={120}
                  deleteSpeed={80}
                  delaySpeed={1000}
                />
              </span>
            </h3>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              I'm a passionate network security engineer
            </p>
            <div className="flex justify-center md:justify-start space-x-4 text-3xl mt-6">
          
              <a
                href="https://github.com/piyush1740x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition duration-200 transform hover:scale-125"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/harsh-chaudhary-b9826229a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-300 transition duration-200 transform hover:scale-125"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/piyush_up_gkp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-300 transition duration-200 transform hover:scale-125"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/rahul.sanga.1048?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-500 transition duration-200 transform hover:scale-125"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>          
          <div className="animated-gradient relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg">
          <img
            className=" shaking-image animated-gradient object-cover w-full h-full transform hover:scale-105 transition duration-300"
            src="/images/me.webp"
            alt="Harsh"
          />
        </div>
        </header>
      </div>
      <About />
    </>
  );
};

export default Main;
