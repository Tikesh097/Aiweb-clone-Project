import { FaBell, FaUser, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full bg-[#0b0f19] min-h-[140px] border-b border-white/10">

      {/* ================= HEADER ================= */}
      <header className="w-full">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between py-5 px-8">

          {/* Left Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400 to-indigo-500 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
            <h1 className="text-xl font-medium text-white">Peekit.ai</h1>
          </div>

          {/* Center Buttons */}
          <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-2xl border border-white/10">
            <button className="text-white text-sm px-4 py-1 rounded-xl bg-white/10">
              Trends
            </button>

            <button className="text-gray-300 text-sm px-4 py-1 rounded-xl hover:bg-white/10">
              Alerts & Bookmarks
            </button>

            <Link
              to="/dashboard"
              className="text-gray-300 text-sm px-4 py-1 rounded-xl hover:bg-white/10"
            >
              My Dashboard
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-5">
            <FaDownload className="text-gray-300 text-xl hover:text-white" />
            <FaBell className="text-gray-300 text-xl hover:text-white" />
            <FaUser className="text-gray-300 text-xl hover:text-white" />
          </div>
        </div>
      </header>

      {/* ================= BROWSE TRENDS SECTION ================= */}
      <div className="w-full flex justify-center mt-05">
        <div className="flex items-center gap-4">


          <button className="px-4 py-1 text-white bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 text-sm">
            Browse All Trends
          </button>

          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white text-sm font-medium">
            Or
          </div>

          <button className="px-4 py-1 text-gray-300 bg-white/10 border border-white/20 rounded-xl hover:bg-white/40 text-sm">
            Keyword Search
          </button>

        </div>
      </div>

    </div>
  );
}
