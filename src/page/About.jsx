import { FaHandshake, FaLightbulb, FaUserGroup } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";

function About() {
  const missionValue = [
    {
      icon: <FaUserGroup />,
      name: "Client Focus",
      description: "our priority",
      id: 1,
    },
    {
      icon: <FaLightbulb />,
      name: "Innovation",
      description: "Always ahead of the curve",
      id: 2,
    },
    {
      icon: <MdVerified />,
      name: "Excellence",
      description: "Committed to quality",
      id: 3,
    },
    {
      icon: <FaHandshake />,
      name: "Trust",
      description: "Building lasting relationships",
      id: 4,
    },
  ];
  return (
    <div className="w-full  py-24">
      <div className="border-b border-gray-400 pb-6 px-6">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">About Debbal</h1>
        <p>
          We're a team of passionate digital creators, committed to delivering
          exceptional solutions that drive real business growth
        </p>
      </div>
      <div className=" bg-sky-100 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mt-6">
            <h1 className="text-3xl font-bold">Our Mission & Values</h1>
            <p className="text-sm mt-3">
              At Debbal, we believe in pushing the boundaries of digital
              innovation while maintaining a strong focus on delivering real
              value to our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 mt-5  gap-4">
            {missionValue.map((value) => (
              <div
                key={value.id}
                className="px-4 py-6 text-center bg-blue-200  rounded-md shadow-md "
              >
                <span className="text-blue-700 flex items-center justify-center text-5xl">
                  {value.icon}
                </span>
                <div>
                  <h1 className="text-slate-900 font-semibold">{value.name}</h1>
                  <p className="text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 ">
          <div className="h-64 rounded-md overflow-hidden border-2 border-gray-300 shadow-md ">
            <img
              src="https://debbal.com/assets/logo-CRJTn7sd.jpg"
              loading="lazy"
              alt="Debbal-foftware-development-plc"
              className="object-contain h-full w-full
            "
            />
          </div>
          <div>
            <h1 className="text-3xl text-blue-600 font-bold mb-4">About Us</h1>
            <p>
              Founded in 2021 in Addis Ababa, Ethiopia, Debbal PLC specializes
              in providing innovative tech solutions, including software
              development, web development, mobile app development, and digital
              marketing. Our mission is to help businesses and individuals
              achieve their goals through cutting-edge technology and
              exceptional service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
