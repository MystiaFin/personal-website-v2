const ProjectListsStyle: string =
  "pl-2 sm:pl-3 relative py-3 sm:py-5 font-extralight border-b border-black overflow-hidden group";

const projects = [
  {
    name: "dynoboo-web-mobile",
    url: "https://github.com/MystiaFin/dynoboo-web-mobile.git",
  },
  {
    name: "dynoboo-server",
    url: "https://github.com/MystiaFin/dynoboo-server.git",
  },
  {
    name: "WeatherAPP",
    url: "https://github.com/MystiaFin/WeatherAPP",
  },
  {
    name: "redpost",
    url: "https://github.com/MystiaFin/redpost",
  },
  {
    name: "personal-website-v2",
    url: "https://github.com/MystiaFin/personal-website-v2",
  },
];

export default function Projects() {
  return (
    <main className="px-4 sm:px-0">
      <h1 className="text-2xl sm:text-3xl font-light mb-3 sm:mb-5">Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <a href={project.url}>
              <div className={ProjectListsStyle}>
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white text-sm sm:text-base">
                  {project.name}
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
