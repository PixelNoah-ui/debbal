import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";
import { HiOutlineBookmarkSlash } from "react-icons/hi2";

function WhyChooseus() {
  const Advantage = [
    {
      description: "Expert team with proven track record",
      id: 1,
    },
    {
      description: "Cutting-edge technology solutions",
      id: 2,
    },
    {
      description: "Dedicated support and maintenance",
      id: 3,
    },
    {
      description: "Results-driven approach",
      id: 4,
    },
  ];

  return (
    <div className="w-full px-6 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col  justify-center">
          <h1 className="text-5xl mb-6 font-semibold">
            Why Choose <span className="text-blue-600">Debbal</span>?
          </h1>
          <ul className="mt-3">
            {Advantage.map((advan) => (
              <li key={advan.id} className="flex items-center gap-2 mb-4">
                <span className="text-blue-500">
                  <BsFillJournalBookmarkFill />
                </span>
                <span>{advan.description}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-md shadow-lg overflow-hidden h-94">
          <img
            src="why.webp"
            loading="lazy"
            alt="why we choose us"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default WhyChooseus;
