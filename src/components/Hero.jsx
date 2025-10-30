import { Search, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Hero({ onSearch }) {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSearch({ query, location });
  }

  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700 mb-4">
            Live openings from verified companies
          </span>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900">
            Find your next role. Smart. Fast. Simple.
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover curated opportunities from top companies actively hiring right now.
            Search by role, skills, or location and apply in minutes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 bg-white shadow-sm ring-1 ring-gray-200 rounded-xl p-2 sm:p-3 flex flex-col sm:flex-row gap-2 sm:gap-3">
          <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search roles, skills, or companies"
              className="w-full bg-transparent outline-none text-sm text-gray-900 placeholder:text-gray-400"
            />
          </div>
          <div className="flex-1 sm:flex-[0.6] flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50">
            <MapPin size={18} className="text-gray-500" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location (e.g., Remote, Berlin)"
              className="w-full bg-transparent outline-none text-sm text-gray-900 placeholder:text-gray-400"
            />
          </div>
          <button
            type="submit"
            className="inline-flex justify-center items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700"
          >
            Search jobs
          </button>
        </form>
      </div>
    </section>
  );
}
