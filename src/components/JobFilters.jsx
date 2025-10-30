import { useState } from 'react';
import { Filter } from 'lucide-react';

export default function JobFilters({ onChange }) {
  const [filters, setFilters] = useState({
    type: 'Any',
    remote: 'Any',
    experience: 'Any',
    sort: 'Newest',
  });

  function update(k, v) {
    const next = { ...filters, [k]: v };
    setFilters(next);
    onChange(next);
  }

  const pill = (label, value, current, onClick) => (
    <button
      key={value}
      onClick={() => onClick(value)}
      className={`px-3 py-1.5 rounded-full text-sm border transition ${
        current === value
          ? 'bg-indigo-600 text-white border-indigo-600'
          : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
      <div className="w-full bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow-sm">
        <div className="flex items-center gap-2 text-gray-900 mb-3">
          <Filter size={18} />
          <span className="font-medium">Refine results</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs uppercase tracking-wide text-gray-500 mr-1">Type</span>
          {['Any','Full-time','Part-time','Contract'].map((t) => pill(t, t, filters.type, (v)=>update('type', v)))}

          <span className="text-xs uppercase tracking-wide text-gray-500 ml-3 mr-1">Work</span>
          {['Any','Remote','Hybrid','On-site'].map((t) => pill(t, t, filters.remote, (v)=>update('remote', v)))}

          <span className="text-xs uppercase tracking-wide text-gray-500 ml-3 mr-1">Experience</span>
          {['Any','Junior','Mid','Senior','Lead'].map((t) => pill(t, t, filters.experience, (v)=>update('experience', v)))}

          <div className="ml-auto flex items-center gap-2">
            <span className="text-xs uppercase tracking-wide text-gray-500">Sort</span>
            <select
              value={filters.sort}
              onChange={(e)=>update('sort', e.target.value)}
              className="text-sm border-gray-200 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option>Newest</option>
              <option>Oldest</option>
              <option>Salary: High to Low</option>
              <option>Salary: Low to High</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
