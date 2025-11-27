import { FaBell, FaUser, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-[#0b0f19]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-purple-500" />
          <h1 className="text-xl font-semibold text-white">Peekit.ai</h1>
        </div>

        {/* Navbar */}
        <nav className="flex items-center gap-4 text-gray-300">
          <button className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20">
            Trends
          </button>

          <button className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20">
            Alerts & Bookmarks
          </button>

          <Link
            to="/dashboard"
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20"
          >
            My Dashboard
          </Link>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <FaDownload className="text-gray-300 text-lg" />
          <FaBell className="text-gray-300 text-lg" />
          <FaUser className="text-gray-300 text-lg" />
        </div>
      </div>
    </header>
  );
}
