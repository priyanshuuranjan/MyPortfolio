import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { PROJECTS } from "../../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col lg:flex-row lg:justify-center items-center"
          >
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>

            <div className="w-full max-w-xl lg:w-2/3 lg:ml-8">
              <h6 className="mb-2 font-semibold text-lg text-white flex items-center">
                {project.title}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 text-purple-500 hover:text-purple-400"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 text-purple-600 hover:text-purple-400"
                >
                  <FaExternalLinkAlt className="text-2xl" />
                </a>
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-3 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
