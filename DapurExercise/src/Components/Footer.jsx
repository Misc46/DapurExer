import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IconContext } from "react-icons";


const Footer = () => {
  return (
    <footer className="bg-red-700 text-white py-6 px-10 mt-10 w-full bottom-0 left-0">
      {/* Top Part, Website Name */}
      <h2 className="max-w-6xl text-3xl font-bold pb-4 mx-auto">
        Teras Rumah <span className="text-lime-400">Nenek</span>
      </h2>

      {/* Content Part */}
      <div className="max-w-6xl mx-auto flex flex-col sm:grid sm:grid-cols-4 sm:items-start border-b-3 border-t-3 border-white py-3">
        <div className="max-w-6xl place-items-center sm:place-items-start sm:items-start mb-6 sm:mb-0 mx-3 w-auto col-span-2">
          <p className="mt-1 font-semibold text-mdxl">Follow Us:</p>
          <div className="flex space-x-4 mt-2 text-xl">
            <a href="#" aria-label="Instagram" className="hover:opacity-80 scale:120">
              <IconContext.Provider value={{ size:40 }}>
                <FaInstagram />
              </IconContext.Provider>
            </a>
            <a href="#" aria-label="X" className="hover:opacity-80 scale:120">
              <IconContext.Provider value={{ size:40 }}>
                <FaXTwitter />
              </IconContext.Provider>
            </a>
            <a href="#" aria-label="YouTube" className="hover:opacity-80 scale:120">
              <IconContext.Provider value={{ size:40 }}>
                <FaYoutube/>
              </IconContext.Provider>
            </a>
            <a href="#" aria-label="Pinterest" className="hover:opacity-80 scale:120">
              <IconContext.Provider value={{ size:40 }}>
                <FaPinterest/>
              </IconContext.Provider>
            </a>
          </div>
        </div>

        <div className="my-auto h-auto pb-3 flex gap-x-3 flex-row place-content-center sm:place-content-start sm:flex-col sm:py-0 sm:border-l-2 border-white pl-3">
          <h3 className="font-semibold">Recipes</h3>
          <ul className="sm:mt-2 space-y-1">
            <li><a href="/browse" className="hover:underline">Browse</a></li>
          </ul>
          <ul className="sm:mt-2 space-y-1">
            <li><a href="/about" className="hover:underline">About Us</a></li>
          </ul>
        </div>

        <div  className="h-auto pb-3 flex gap-x-3 flex-row place-content-center sm:place-content-start sm:flex-col sm:py-0 sm:border-l-2 border-white pl-3">
            <h3 className="font-semibold">Terms & Conditions</h3>
            <ul className="sm:mt-2 space-y-1">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
            <ul className="sm:mt-2 space-y-1">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
        </div>
      </div>
  
      {/* Bottom Part, Website Description */}
      <div className="max-w-6xl mx-auto text-left text-sm mt-3">
        © EXERCISE FTUI 2025
      </div>
    </footer>
  );
};

export default Footer;
