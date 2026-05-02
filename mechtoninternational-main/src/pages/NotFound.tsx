import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B0B0B] text-white p-6">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-8 border border-primary/20">
          <AlertTriangle size={40} className="text-primary" />
        </div>
        <h1 className="mb-4 text-6xl md:text-8xl font-black uppercase tracking-tighter opacity-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">404</h1>
        <h2 className="mb-4 text-2xl md:text-4xl font-black uppercase tracking-wider relative z-10">Oops! Page not found</h2>
        <p className="mb-8 text-[#B3B3B3] text-sm md:text-base max-w-xs mx-auto relative z-10">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold uppercase tracking-wider text-sm rounded shadow-[0_0_20px_rgba(225,6,0,0.3)] hover:scale-105 transition-all duration-300 relative z-10"
        >
          <Home size={18} />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
