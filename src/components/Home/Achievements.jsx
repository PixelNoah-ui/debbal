import { FaPercent } from "react-icons/fa6";
import { HiOutlinePlus } from "react-icons/hi";

function Achievements() {
  const Achievement = [
    {
      name: "Project completed",
      number: 250,
      icon: <HiOutlinePlus />,
      id: 1,
    },
    {
      name: "Happy Clients",
      number: 120,
      icon: <HiOutlinePlus />,
      id: 2,
    },
    {
      name: "Team Members",
      number: 15,
      icon: <HiOutlinePlus />,
      id: 3,
    },
    {
      name: "Success Rate",
      number: 250,
      icon: <FaPercent />,
      id: 4,
    },
  ];
  return (
    <div className="w-full  py-8 px-6">
      <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-4 gap-4 sm:grid-cols-2">
        {Achievement.map((eachAchivement) => (
          <div
            key={eachAchivement.id}
            className="px-4 py-8 rounded-md flex flex-col items-center justify-center border border-gray-300 shadow-md"
          >
            <div className="flex items-center ">
              <span className="text-blue-600 text-3xl font-semibold">
                {eachAchivement.number}
              </span>
              <span className="text-blue-600 text-2xl">
                {eachAchivement.icon}
              </span>
            </div>
            <p className="mt-2 text-sm ">{eachAchivement.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
