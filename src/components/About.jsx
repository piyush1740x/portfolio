import React from "react";
import Contact from "./Contact";

const About = () => {
  return (
    <div className="bg-gradient-to-tl from-gray-800 via-gray-900 to-black text-white min-h-screen">
      <section className="px-8 py-16 md:px-20 md:py-24 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10">
        <div className="max-w-xl text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-400">
            About Me
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Hi! I'm <span className="font-bold text-teal-400">Harsh</span>, a
            Web developerwho enjoys providing responsive sites to companies. With a
            passion for both design and development, I aim to create seamless
            user experiences that leave a lasting impact.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I also work on development using modern tools like{" "}
            <span className="font-bold text-teal-400">HTML</span>,{" "}
            <span className="font-bold text-teal-400">CSS</span>, and{" "}
            <span className="font-bold text-teal-400">Javascript</span>, blending
            <span className="font-bold text-teal-400">Tailwind</span>, blending
            <span className="font-bold text-teal-400">React</span>, blending
            creativity and technology to bring ideas to life. I'm always eager
            to learn and contribute to meaningful projects.
          </p>
        </div>
        <div className="animated-gradient relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-400 shadow-lg">
          <img
            className="shaking-image animated-gradient object-cover w-full h-full transform hover:scale-105 transition duration-300"
            src="/images/project.jpeg"
            alt="Harsh"
          />
        </div>
      </section>

      
      <section className="px-8 py-16 md:px-20 bg-gray-900 rounded-xl mx-4 md:mx-20 shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-6 text-center">
          Skills & Expertise
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-200 text-lg">
          {[
            "HTML",
            "CSS",
            "Tailwind",
            "JavaScript",
            "React",
            "NodeJs",
            "C",
            "C++",
            "Mongo DB",
            "CyberSecurity",
            "UI/UX Design",
            "Problem Solving",
          ].map((skill, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 hover:text-teal-300 transition duration-200"
            >
              <span className="text-teal-400 text-2xl">✔</span>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="bg-gray-800 py-16">
       
      <Contact />
      </section>
    </div>
  );
};

export default About;
