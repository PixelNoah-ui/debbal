import { HiOutlineBookmark } from "react-icons/hi";
import Button from "../../ui/Button";

function Service() {
  const webservice = [
    { icon: <HiOutlineBookmark />, description: "Responsive Design" },
    { icon: <HiOutlineBookmark />, description: "Visual Appeal and Usability" },
    { icon: <HiOutlineBookmark />, description: "Performance Optimization" },
  ];

  const Mobileservice = [
    { icon: <HiOutlineBookmark />, description: "Cross-Platform Solutions" },
    { icon: <HiOutlineBookmark />, description: "User-Centric Design" },
    { icon: <HiOutlineBookmark />, description: "End-to-End Development" },
  ];
  const SEOservice = [
    { icon: <HiOutlineBookmark />, description: "Keyword Research" },
    {
      icon: <HiOutlineBookmark />,
      description: "On-Page and Off-Page Optimization",
    },
    {
      icon: <HiOutlineBookmark />,
      description: "Continuous Performance Monitoring",
    },
  ];

  return (
    <div className="w-full bg-slate-100 px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-center mb-2">Our Service</h1>
          <p className="text-sm text-slate-700 text-center leading-relaxed tracking-wider">
            We offer comprehensive digital solutions to help your business grow
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-8">
            <div className="rounded-lg overflow-hidden h-72 shadow-md border border-gray-300">
              <img
                src="/web.avif"
                loading="lazy"
                alt="Web Development"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl text-blue-600 font-bold">Web Design</h2>
              <p className="mt-2 text-sm">
                We create visually appealing, responsive websites that offer
                excellent user experience and performance to help you achieve
                your business goals.
              </p>
              <ul className="mt-4 mb-4 space-y-2">
                {webservice.map((service, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-blue-500">{service.icon}</span>
                    <span>{service.description}</span>
                  </li>
                ))}
              </ul>
              <Button type="accent">Read full article</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-8">
            <div>
              <h2 className="text-3xl text-blue-600 font-bold">
                Mobile Development
              </h2>
              <p className="mt-2 text-sm">
                We develop intuitive and powerful mobile applications for iOS
                and Android, focusing on user experience and performance to
                ensure your app stands out.
              </p>
              <ul className="mt-4 mb-4 space-y-2">
                {Mobileservice.map((service, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-blue-500">{service.icon}</span>
                    <span>{service.description}</span>
                  </li>
                ))}
              </ul>
              <Button type="accent">Read full article</Button>
            </div>
            <div className="rounded-lg overflow-hidden h-72 shadow-md border border-gray-300">
              <img
                src="/mobile.webp"
                alt="Mobile Development"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-8">
            <div className="rounded-lg overflow-hidden h-72 shadow-md border border-gray-300">
              <img
                src="/seo.avif"
                alt="Web Development"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl text-blue-600 font-bold">
                SEO Optimization
              </h2>
              <p className="mt-2 text-sm">
                Our SEO optimization services improve your search engine
                rankings and drive more organic traffic to your site through
                effective strategies and continuous monitoring.
              </p>
              <ul className="mt-4 mb-4 space-y-2">
                {SEOservice.map((service, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-blue-500">{service.icon}</span>
                    <span>{service.description}</span>
                  </li>
                ))}
              </ul>
              <Button type="accent">Read full article</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
