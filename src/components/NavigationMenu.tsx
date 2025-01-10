import { Link, useLocation } from "react-router-dom";

export function NavigationMenu() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-slate-950/80 border-b border-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-white">
            Product Radar
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`${
                isActive("/")
                  ? "text-teal-400"
                  : "text-slate-400 hover:text-white"
              } transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/insights"
              className={`${
                isActive("/insights")
                  ? "text-teal-400"
                  : "text-slate-400 hover:text-white"
              } transition-colors`}
            >
              Insights
            </Link>
            <Link
              to="/docs"
              className={`${
                isActive("/docs")
                  ? "text-teal-400"
                  : "text-slate-400 hover:text-white"
              } transition-colors`}
            >
              Docs
            </Link>
            <Link
              to="/resources"
              className={`${
                isActive("/resources")
                  ? "text-teal-400"
                  : "text-slate-400 hover:text-white"
              } transition-colors`}
            >
              Resources
            </Link>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button - to be implemented */}
            <button className="text-slate-400 hover:text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}