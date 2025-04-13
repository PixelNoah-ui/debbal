import {
  HiOutlineCode,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineTemplate,
  HiOutlineChartBar,
  HiOutlineCog,
} from "react-icons/hi";

import {
  HiOutlineGlobe,
  HiOutlineDatabase,
  HiOutlineShoppingCart,
  HiOutlineViewGrid,
  HiOutlineDeviceTablet,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineChartSquareBar,
  HiOutlinePencilAlt,
  HiOutlineTrendingUp,
  HiOutlineDocumentReport,
} from "react-icons/hi";
import { HiOutlineMegaphone } from "react-icons/hi2";

function Service() {
  const serviceValue = [
    {
      icon: <HiOutlineCode className="text-3xl" />,
      name: "Custom Software Development",
      id: 1,
      description:
        "Tailored software solutions designed to meet your specific business needs and challenges.",
      list: [
        {
          icon: <HiOutlineGlobe className="text-blue-500" />,
          name: "Custom Web Applications",
          id: 1,
        },
        {
          icon: <HiOutlineDatabase className="text-blue-500" />,
          name: "Enterprise Software",
          id: 2,
        },
        {
          icon: <HiOutlineViewGrid className="text-blue-500" />,
          name: "API Development",
          id: 3,
        },
        {
          icon: <HiOutlineTemplate className="text-blue-500" />,
          name: "Cloud Solutions",
          id: 4,
        },
      ],
    },
    {
      icon: <HiOutlineDesktopComputer className="text-3xl" />,
      name: "Web Design & Development",
      id: 2,
      description:
        "Beautiful, responsive websites that engage visitors and drive conversions.",
      list: [
        {
          icon: <HiOutlineDeviceTablet className="text-blue-500" />,
          name: "Responsive Design",
          id: 1,
        },
        {
          icon: <HiOutlineTemplate className="text-blue-500" />,
          name: "UX/UI Development",
          id: 2,
        },
        {
          icon: <HiOutlineShoppingCart className="text-blue-500" />,
          name: "E-commerce Solutions",
          id: 3,
        },
        {
          icon: <HiOutlineViewGrid className="text-blue-500" />,
          name: "CMS Integration",
          id: 4,
        },
      ],
    },
    {
      icon: <HiOutlineDeviceMobile className="text-3xl" />,
      name: "Mobile App Development",
      id: 3,
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      list: [
        {
          icon: <HiOutlineTemplate className="text-blue-500" />,
          name: "iOS Development",
          id: 1,
        },
        {
          icon: <HiOutlineTemplate className="text-blue-500" />,
          name: "Android Development",
          id: 2,
        },
        {
          icon: <HiOutlineDeviceTablet className="text-blue-500" />,
          name: "Cross-platform Apps",
          id: 3,
        },
        {
          icon: <HiOutlineCog className="text-blue-500" />,
          name: "App Maintenance",
          id: 4,
        },
      ],
    },
    {
      icon: <HiOutlineTemplate className="text-3xl" />,
      name: "UI/UX Design",
      id: 4,
      description:
        "User-centered design solutions that create intuitive and engaging digital experiences.",
      list: [
        {
          icon: <HiOutlineChartBar className="text-blue-500" />,
          name: "User Research",
          id: 1,
        },
        {
          icon: <HiOutlinePencilAlt className="text-blue-500" />,
          name: "Interface Design",
          id: 2,
        },
        {
          icon: <HiOutlineDesktopComputer className="text-blue-500" />,
          name: "Prototyping",
          id: 3,
        },
        {
          icon: <HiOutlineShieldCheck className="text-blue-500" />,
          name: "Usability Testing",
          id: 4,
        },
      ],
    },
    {
      icon: <HiOutlineChartBar className="text-3xl" />,
      name: "Digital Marketing",
      id: 5,
      description:
        "Data-driven marketing strategies to grow your online presence and reach.",
      list: [
        {
          icon: <HiOutlineTrendingUp className="text-blue-500" />,
          name: "SEO Optimization",
          id: 1,
        },
        {
          icon: <HiOutlineMegaphone className="text-blue-500" />,
          name: "Content Marketing",
          id: 2,
        },
        {
          icon: <HiOutlineTemplate className="text-blue-500" />,
          name: "Social Media",
          id: 3,
        },
        {
          icon: <HiOutlineDocumentReport className="text-blue-500" />,
          name: "Analytics & Reporting",
          id: 4,
        },
      ],
    },
    {
      icon: <HiOutlineCog className="text-3xl" />,
      name: "Support & Maintenance",
      id: 6,
      description:
        "Ongoing technical support and maintenance to keep your digital assets running smoothly.",
      list: [
        {
          icon: <HiOutlineClock className="text-blue-500" />,
          name: "24/7 Support",
          id: 1,
        },
        {
          icon: <HiOutlineChartSquareBar className="text-blue-500" />,
          name: "Performance Monitoring",
          id: 2,
        },
        {
          icon: <HiOutlineShieldCheck className="text-blue-500" />,
          name: "Security Updates",
          id: 3,
        },
        {
          icon: <HiOutlineDatabase className="text-blue-500" />,
          name: "Regular Backups",
          id: 4,
        },
      ],
    },
  ];

  return (
    <div className="w-full px-6 py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the
            modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceValue.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    {service.icon}
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {service.name}
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-3">
                  {service.list.map((item) => (
                    <li key={item.id} className="flex items-center">
                      <span className="mr-3">{item.icon}</span>
                      <span className="text-gray-700">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
