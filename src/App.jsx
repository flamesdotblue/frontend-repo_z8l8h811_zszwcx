import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JobFilters from './components/JobFilters';
import JobList from './components/JobList';

const MOCK_JOBS = [
  {
    id: 1,
    title: 'Senior Frontend Engineer',
    company: 'Photon Labs',
    location: 'Remote',
    type: 'Full-time',
    salary: '$140k – $180k',
    experience: 'Senior',
    description:
      'Own the web experience for a fast-growing analytics platform. Work with React, TypeScript, and modern tooling to ship delightful interfaces.',
    tags: ['React', 'TypeScript', 'Tailwind', 'GraphQL'],
    featured: true,
    postedAt: '2025-05-01',
  },
  {
    id: 2,
    title: 'Product Designer',
    company: 'Aurora Health',
    location: 'Hybrid · Berlin',
    type: 'Full-time',
    salary: '€70k – €85k',
    experience: 'Mid',
    description:
      'Design intuitive healthcare experiences across web and mobile. Collaborate closely with product and engineering.',
    tags: ['Figma', 'Design Systems', 'UX'],
    featured: false,
    postedAt: '2025-04-28',
  },
  {
    id: 3,
    title: 'Data Engineer',
    company: 'NovaBank',
    location: 'On-site · London',
    type: 'Contract',
    salary: '£500/day',
    experience: 'Senior',
    description:
      'Build streaming data pipelines and model governance for risk analytics. Stack includes Python, Spark, Kafka.',
    tags: ['Python', 'Spark', 'Kafka', 'Airflow'],
    featured: false,
    postedAt: '2025-04-20',
  },
  {
    id: 4,
    title: 'Marketing Manager',
    company: 'Skyreach',
    location: 'Remote',
    type: 'Part-time',
    salary: '$60k – $80k',
    experience: 'Mid',
    description:
      'Own lifecycle campaigns and growth experiments for a SaaS product. Comfortable with analytics and content.',
    tags: ['Lifecycle', 'SEO', 'Content'],
    featured: false,
    postedAt: '2025-04-18',
  },
  {
    id: 5,
    title: 'Junior QA Engineer',
    company: 'Clarity AI',
    location: 'Hybrid · Toronto',
    type: 'Full-time',
    salary: '$55k – $70k',
    experience: 'Junior',
    description:
      'Test automation for web applications; collaborate on CI/CD quality gates and exploratory testing.',
    tags: ['Cypress', 'Playwright', 'CI/CD'],
    featured: false,
    postedAt: '2025-04-17',
  },
  {
    id: 6,
    title: 'Backend Engineer',
    company: 'OrbitOps',
    location: 'Remote',
    type: 'Full-time',
    salary: '$130k – $160k',
    experience: 'Senior',
    description:
      'Design resilient services and APIs for a logistics intelligence platform. Experience with Python and FastAPI a plus.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'AWS'],
    featured: true,
    postedAt: '2025-04-15',
  },
];

export default function App() {
  const [search, setSearch] = useState({ query: '', location: '' });
  const [filterState, setFilterState] = useState({ type: 'Any', remote: 'Any', experience: 'Any', sort: 'Newest' });

  const filtered = useMemo(() => {
    const q = search.query.toLowerCase().trim();
    const loc = search.location.toLowerCase().trim();

    let list = MOCK_JOBS.filter((j) => {
      const matchesQuery = q
        ? [j.title, j.company, j.description, ...(j.tags || [])]
            .join(' ')
            .toLowerCase()
            .includes(q)
        : true;
      const matchesLoc = loc ? j.location.toLowerCase().includes(loc) : true;
      const matchesType = filterState.type === 'Any' ? true : j.type === filterState.type;

      const remoteMap = {
        Any: true,
        Remote: j.location.toLowerCase().includes('remote'),
        Hybrid: j.location.toLowerCase().includes('hybrid'),
        'On-site': j.location.toLowerCase().includes('on-site') || j.location.toLowerCase().includes('onsite'),
      };
      const matchesRemote = remoteMap[filterState.remote];

      const matchesExp = filterState.experience === 'Any' ? true : j.experience === filterState.experience;

      return matchesQuery && matchesLoc && matchesType && matchesRemote && matchesExp;
    });

    // Basic sort
    if (filterState.sort === 'Newest') {
      list = list.sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt));
    } else if (filterState.sort === 'Oldest') {
      list = list.sort((a, b) => new Date(a.postedAt) - new Date(b.postedAt));
    } else if (filterState.sort === 'Salary: High to Low') {
      const parseSalary = (s) => {
        if (!s) return 0;
        const nums = s.replace(/[^0-9\-]/g, '').split('-').map(Number);
        return Math.max(...nums);
      };
      list = list.sort((a, b) => parseSalary(b.salary) - parseSalary(a.salary));
    } else if (filterState.sort === 'Salary: Low to High') {
      const parseSalary = (s) => {
        if (!s) return 0;
        const nums = s.replace(/[^0-9\-]/g, '').split('-').map(Number);
        return Math.min(...nums);
      };
      list = list.sort((a, b) => parseSalary(a.salary) - parseSalary(b.salary));
    }

    return list;
  }, [search, filterState]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero onSearch={setSearch} />
        <JobFilters onChange={setFilterState} />
        <JobList jobs={filtered} />
      </main>
      <footer className="border-t border-gray-200 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} HireHub. Built for showcasing live hiring pipelines.
          </p>
          <div className="flex items-center gap-4">
            <a className="hover:text-gray-900" href="#">Privacy</a>
            <a className="hover:text-gray-900" href="#">Terms</a>
            <a className="hover:text-gray-900" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
