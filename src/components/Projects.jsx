import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "Tic-Tac-Toe Game",
      description:
        "A fun and interactive Tic-Tac-Toe game built using React. Features dynamic state management and a sleek UI.",
      techStack: ["React", "CSS", "JavaScript"],
      link: "https://game1740x.netlify.app/",
      image: "/images/tikTak.png",
    },
    {
      title: "Employee Management System",
      description:
        "A full-stack application for managing employees with admin and employee dashboards, task assignments, and progress tracking. employee id :- employee1@example.com pass:-123 change employee1 to employee2, admin id:- harsh@gmail.com pass:- 123",
      techStack: ["Node.js", "Express", "MongoDB", "EJS"],
      link: "https://gleaming-empanada-0f75e2.netlify.app",
      image: "/images/emp.webp",
    },
    {
      title: "Weather check Website",
      description:
        "A Weather website to showcase my skills, projects, and achievements. Built with modern web technologies.",
      techStack: ["React", "Tailwind CSS", "JavaScript"],
      link: "https://weather-233.netlify.app/",
      image: "/images/weather.png",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-12 text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-teal-300 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap space-x-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-teal-500 text-white text-sm font-medium py-1 px-2 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-teal-400 hover:text-teal-300 text-sm font-bold transition duration-300"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
