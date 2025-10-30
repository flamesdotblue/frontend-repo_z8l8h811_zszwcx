import { Building2, MapPin, Clock, DollarSign, ChevronRight } from 'lucide-react';

function JobCard({ job }) {
  return (
    <div className="group border border-gray-200 rounded-xl p-4 sm:p-5 bg-white hover:shadow-md transition">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center ring-1 ring-gray-200">
            <Building2 className="text-gray-500" size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">{job.title}</h3>
              {job.featured && (
                <span className="px-2 py-0.5 rounded-full text-xs bg-amber-100 text-amber-800">Hot</span>
              )}
            </div>
            <div className="mt-1 text-sm text-gray-600 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1"><Building2 size={14} /> {job.company}</span>
              <span className="inline-flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
              <span className="inline-flex items-center gap-1"><Clock size={14} /> {job.type}</span>
              <span className="inline-flex items-center gap-1"><DollarSign size={14} /> {job.salary}</span>
            </div>
          </div>
        </div>
        <button className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700">
          View details <ChevronRight size={16} />
        </button>
      </div>

      <p className="mt-3 text-sm text-gray-700 line-clamp-2">{job.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {job.tags.map((tag) => (
          <span key={tag} className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-700 border border-gray-200">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function JobList({ jobs }) {
  if (!jobs.length) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center border border-dashed border-gray-300 rounded-xl p-10 bg-white">
          <p className="text-gray-700 font-medium">No matching roles right now.</p>
          <p className="text-gray-500 text-sm mt-1">Try adjusting filters or check back later.</p>
        </div>
      </div>
    );
  }

  return (
    <section id="jobs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Live openings</h2>
          <p className="text-sm text-gray-600">{jobs.length} roles found</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}
