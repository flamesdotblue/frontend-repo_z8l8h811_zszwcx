import { Briefcase, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-md bg-indigo-600 text-white">
            <Briefcase size={18} />
          </div>
          <span className="font-semibold text-gray-900">HireHub</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#jobs" className="hover:text-gray-900">Jobs</a>
          <a href="#companies" className="hover:text-gray-900">Companies</a>
          <a href="#how-it-works" className="hover:text-gray-900">How it works</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
            <User size={16} /> Sign in
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Post a Job
          </button>
        </div>
      </div>
    </header>
  );
}
