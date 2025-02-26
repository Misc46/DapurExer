const Footer = () => {
  return (
    <footer className="bg-red-700 text-white py-6 px-10 mt-10 w-full fixed bottom-0 left-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start border-t border-white/30 pt-6">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold">
            Teras Rumah <span className="text-lime-400">Nenek</span>
          </h2>
          <p className="mt-2">Follow Us:</p>
          <div className="flex space-x-4 mt-2 text-xl">
            <a href="#" aria-label="Instagram" className="hover:opacity-80">📷</a>
            <a href="#" aria-label="X" className="hover:opacity-80">❌</a>
            <a href="#" aria-label="YouTube" className="hover:opacity-80">▶️</a>
            <a href="#" aria-label="Pinterest" className="hover:opacity-80">📌</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm w-full md:w-auto">
          <div>
            <h3 className="font-semibold">Recipes</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:underline">By Category</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Terms & Conditions</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-xs mt-6 border-t border-white/30 pt-4">
        © EXERCISE FTUI 2025
      </div>
    </footer>
  );
};

export default Footer;
