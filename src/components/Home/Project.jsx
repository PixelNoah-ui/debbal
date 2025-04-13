import { Link } from "react-router-dom";
import Button from "../../ui/Button";

function Project() {
  const projectData = [
    {
      image: "/e-commerce.avif",
      name: "E-Commerce Platform",
      description: "Web Development",
      type: "web",
      id: 1,
    },
    {
      image: "/dashboard.webp",
      name: "Marketing dashboard",
      description: "UI/UX Design",
      type: "design",
      id: 2,
    },
    {
      image: "/mobile-bank.webp",
      name: "Mobile Banking App",
      description: "App Development",
      type: "mobile",
      id: 3,
    },
  ];

  return (
    <div className="w-full px-6 py-12 bg-sky-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-600 mb-2.5">
            Our Latest Work
          </h1>
          <h3 className="text-xl text-slate-950">
            Explore some of our recent projects and success stories.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <Link
              to={`portfolio?category=${project.type}`}
              key={project.id}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-72 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 hover:bg-black  group-hover:opacity-70 flex items-end transition-all duration-500">
                <div className="w-full p-6 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    {project.name}
                  </h3>
                  <p className="text-blue-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-6">
          <Button type="accent" to="all">
            View All Project
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Project;
