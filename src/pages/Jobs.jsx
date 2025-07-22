    import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const dummyJobs = [
   { id: 1, title: "Frontend Developer", company: "TechCorp", location: "Remote", category: "Development" },
  { id: 2, title: "Backend Developer", company: "WebSolutions", location: "Bangalore", category: "Development" },
  { id: 3, title: "UI/UX Designer", company: "DesignX", location: "Mumbai", category: "Design" },
  { id: 4, title: "Full Stack Developer", company: "StackHouse", location: "Chennai", category: "Development" },
  { id: 5, title: "Data Analyst", company: "DataMine", location: "Hyderabad", category: "Data" },
  { id: 6, title: "DevOps Engineer", company: "Cloudify", location: "Remote", category: "Infrastructure" },
  { id: 7, title: "Mobile App Developer", company: "AppWiz", location: "Pune", category: "Development" },
  { id: 8, title: "Machine Learning Engineer", company: "AIMinds", location: "Remote", category: "AI/ML" },
  { id: 9, title: "QA Tester", company: "BugSmashers", location: "Kolkata", category: "QA" },
  { id: 10, title: "Project Manager", company: "AgileWorks", location: "Delhi", category: "Management" },
  { id: 11, title: "System Administrator", company: "InfraTech", location: "Noida", category: "Infrastructure" },
  { id: 12, title: "Product Designer", company: "CreateHub", location: "Ahmedabad", category: "Design" },
  { id: 13, title: "Data Scientist", company: "BrainData", location: "Chennai", category: "AI/ML" },
  { id: 14, title: "React Developer", company: "FrontendMasters", location: "Remote", category: "Development" },
  { id: 15, title: "Tech Lead", company: "LeaderSoft", location: "Mumbai", category: "Management" },
  { id: 16, title: "Network Engineer", company: "NetSecure", location: "Hyderabad", category: "Infrastructure", salary: "₹6-8 LPA", summary: "Maintain network health.", description: "Cisco certified, network security experience preferred." },
  { id: 17, title: "AI Researcher", company: "DeepMinds", location: "Bangalore", category: "AI/ML", salary: "₹20-30 LPA", summary: "Advance AI innovation.", description: "Research in NLP, CV, and deep learning." },
  { id: 18, title: "UI Designer", company: "PixelCraft", location: "Chandigarh", category: "Design", salary: "₹5-8 LPA", summary: "Design modern UI components.", description: "Visual design and branding experience a plus." },
  { id: 19, title: "Content Strategist", company: "WriteRight", location: "Remote", category: "Marketing", salary: "₹4-6 LPA", summary: "Plan and manage content strategy.", description: "SEO, copywriting, and analytics experience required." },
  { id: 20, title: "Software Intern", company: "StartUpTech", location: "Bangalore", category: "Internship", salary: "₹10K/month", summary: "Get hands-on with real projects.", description: "Learning opportunity for freshers in development." },

];


function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    const adminJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    setAllJobs([...dummyJobs, ...adminJobs]);
  }, []);

  const handleSearch = () => {
    const adminJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    const mergedJobs = [...dummyJobs, ...adminJobs];

    const filtered = mergedJobs.filter(job => {
      const keyword = searchTerm.toLowerCase();
      const keywordMatch =
        job.title.toLowerCase().includes(keyword) ||
        job.company.toLowerCase().includes(keyword) ||
        job.location.toLowerCase().includes(keyword);

      const categoryMatch = categoryFilter ? job.category === categoryFilter : true;
      return keywordMatch && categoryMatch;
    });

    setAllJobs(filtered);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Search Jobs</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-center">
        <input
          type="text"
          placeholder="Search jobs, companies, or locations"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 p-3 rounded-lg border shadow-sm"
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="p-3 rounded-lg border shadow-sm w-full md:w-1/4"
        >
          <option value="">All Categories</option>
          <option value="Development">Development</option>
          <option value="Design">Design</option>
          <option value="Data">Data</option>
          <option value="Infrastructure">Infrastructure</option>
          <option value="AI/ML">AI/ML</option>
          <option value="QA">QA</option>
          <option value="Management">Management</option>
          <option value="Marketing">Marketing</option>
          <option value="Internship">Internship</option>
        </select>

        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Search
        </button>
      </div>

      {allJobs.length === 0 ? (
        <p className="text-center text-gray-500">No jobs found.</p>
      ) : (
        <ul className="grid md:grid-cols-2 gap-6">
          {allJobs.map(job => (
            <li key={job.id} className="border p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-gray-600 mb-2">{job.company} — {job.location}</p>
              {job.category && (
                <p className="text-sm text-gray-500 mb-2">Category: {job.category}</p>
              )}
              <Link
                to={`/jobs/${job.id}`}
                className="text-blue-600 hover:underline font-medium"
              >
                View Details
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Jobs;
