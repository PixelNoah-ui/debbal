import { useSearchParams } from "react-router-dom";

function Porfolio() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = [
    {
      value: "all",
      label: "All",
      id: 1,
    },
    {
      value: "web",
      label: "Web",
      id: 2,
    },
    {
      value: "mobile",
      label: "Mobile",
      id: 3,
    },
    {
      value: "design",
      label: "Design",
      id: 4,
    },
  ];
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
    {
      image: "/health.avif",
      name: "Web",
      description: "Health Platform",
      type: "web",
      id: 4,
    },
    {
      image: "/fitness.avif",
      name: "Mobile",
      description: "Mobile Development",
      type: "mobile",
      id: 5,
    },
  ];

  const currentFilter = searchParams.get("category") || "all";

  function handleClick(value) {
    searchParams.set("category", value);
    setSearchParams(searchParams);
  }
  let filterProject;
  if (currentFilter === "all") filterProject = projectData;
  if (currentFilter == "web")
    filterProject = projectData.filter((project) => project.type === "web");
  if (currentFilter === "mobile")
    filterProject = projectData.filter((project) => project.type === "mobile");
  if (currentFilter === "design")
    filterProject = projectData.filter((project) => project.type === "design");

  return (
    <div className="w-full  px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">
            Our Portfolio
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses
            achieve their digital goals.
          </p>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          {filterValue.map((filter) => (
            <button
              onClick={() => handleClick(filter.value)}
              className={`px-4 py-1 rounded-full cursor-pointer ${
                currentFilter === filter.value
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              } `}
              key={filter.id}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filterProject.map((project) => (
            <div
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Porfolio;
