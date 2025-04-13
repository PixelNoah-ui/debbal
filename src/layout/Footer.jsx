import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <h2 className="text-2xl font-bold text-blue-600">Debbal</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-xl">
              <BsTwitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-xl">
              <LiaLinkedin />
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-xl">
              <BsInstagram />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-2 text-sm">Quick Links</h3>
            <div className="flex flex-wrap gap-4 text-sm">
              {["Home", "About", "Services", "Portfolio", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    href="#"
                    className="text-gray-300 hover:text-white"
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>

          <div className="border-l border-gray-600 pl-6">
            <h3 className="font-semibold mb-2 text-sm">Contact</h3>
            <div className="text-gray-300 text-sm">
              <p className="mb-2">Beto 7th floor, Addis Ababa,Piassa</p>
              <p className="mb-2">+(251) 910-50-7045</p>
              <p className="mb-2">+(251) 921-85-9449</p>
              <p>+(251) 915-40-8683</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-4 border-t border-gray-700 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Debbal. All rights reserved</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
