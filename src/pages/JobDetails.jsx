import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const dummyJobs = [
  {
    

  "data": [
    {
      "id": 1,
      "title": "Frontend Developer",
      "company": "TechCorp",
      "location": "Remote",
      "category": "Development",
      "salary": "₹8-12 LPA",
      "summary": "Build responsive web apps using React.",
      "description": "Develop with React, ensure accessibility, collaborate with backend teams."
    },
    {
      "id": 2,
      "title": "Backend Developer",
      "company": "WebSolutions",
      "location": "Bangalore",
      "category": "Development",
      "salary": "₹10-14 LPA",
      "summary": "Develop backend services using Node.js.",
      "description": "Design APIs, manage databases, support frontend integration."
    },
    {
      "id": 3,
      "title": "UI/UX Designer",
      "company": "DesignX",
      "location": "Mumbai",
      "category": "Design",
      "salary": "₹6-10 LPA",
      "summary": "Create intuitive user experiences.",
      "description": "Create wireframes and collaborate with frontend developers."
    },
    {
      "id": 4,
      "title": "Full Stack Developer",
      "company": "StackHouse",
      "location": "Chennai",
      "category": "Development",
      "salary": "₹10-15 LPA",
      "summary": "Work on both frontend and backend.",
      "description": "Design end-to-end systems using MERN stack."
    },
    {
      "id": 5,
      "title": "Data Analyst",
      "company": "DataMine",
      "location": "Hyderabad",
      "category": "Data",
      "salary": "₹7-9 LPA",
      "summary": "Analyze data trends and build reports.",
      "description": "Work with SQL, Excel, and visualization tools."
    },
    {
      "id": 6,
      "title": "DevOps Engineer",
      "company": "Cloudify",
      "location": "Remote",
      "category": "Infrastructure",
      "salary": "₹10-13 LPA",
      "summary": "Automate and monitor cloud services.",
      "description": "CI/CD, Docker, Kubernetes expertise needed."
    },
    {
      "id": 7,
      "title": "Mobile App Developer",
      "company": "AppWiz",
      "location": "Pune",
      "category": "Development",
      "salary": "₹9-11 LPA",
      "summary": "Build cross-platform mobile apps.",
      "description": "Experience with React Native or Flutter."
    },
    {
      "id": 8,
      "title": "Machine Learning Engineer",
      "company": "AIMinds",
      "location": "Remote",
      "category": "AI/ML",
      "salary": "₹12-18 LPA",
      "summary": "Work on intelligent systems.",
      "description": "Python, ML algorithms, deployment skills required."
    },
    {
      "id": 9,
      "title": "QA Tester",
      "company": "BugSmashers",
      "location": "Kolkata",
      "category": "QA",
      "salary": "₹5-7 LPA",
      "summary": "Ensure software quality.",
      "description": "Manual and automation testing experience preferred."
    },
    {
      "id": 10,
      "title": "Project Manager",
      "company": "AgileWorks",
      "location": "Delhi",
      "category": "Management",
      "salary": "₹15-20 LPA",
      "summary": "Lead software teams using Agile.",
      "description": "Scrum master certification preferred."
    },
    {
      "id": 11,
      "title": "System Administrator",
      "company": "InfraTech",
      "location": "Noida",
      "category": "Infrastructure",
      "salary": "₹6-9 LPA",
      "summary": "Maintain internal IT infrastructure.",
      "description": "Linux, Windows server management."
    },
    {
      "id": 12,
      "title": "Product Designer",
      "company": "CreateHub",
      "location": "Ahmedabad",
      "category": "Design",
      "salary": "₹8-11 LPA",
      "summary": "Design user-friendly product interfaces.",
      "description": "Tools: Figma, Adobe XD, Sketch."
    },
    {
      "id": 13,
      "title": "Data Scientist",
      "company": "BrainData",
      "location": "Chennai",
      "category": "AI/ML",
      "salary": "₹14-20 LPA",
      "summary": "Build data-driven models.",
      "description": "Strong in Python, ML, and business insights."
    },
    {
      "id": 14,
      "title": "React Developer",
      "company": "FrontendMasters",
      "location": "Remote",
      "category": "Development",
      "salary": "₹8-10 LPA",
      "summary": "Develop SPA with React.js.",
      "description": "Redux, hooks, component architecture experience."
    },
    {
      "id": 15,
      "title": "Tech Lead",
      "company": "LeaderSoft",
      "location": "Mumbai",
      "category": "Management",
      "salary": "₹18-25 LPA",
      "summary": "Lead engineering team.",
      "description": "Strong tech skills and team mentoring."
    },
    {
      "id": 16,
      "title": "Network Engineer",
      "company": "NetSecure",
      "location": "Hyderabad",
      "category": "Infrastructure",
      "salary": "₹6-8 LPA",
      "summary": "Maintain network health.",
      "description": "Cisco certified, network security experience preferred."
    },
    {
      "id": 17,
      "title": "AI Researcher",
      "company": "DeepMinds",
      "location": "Bangalore",
      "category": "AI/ML",
      "salary": "₹20-30 LPA",
      "summary": "Advance AI innovation.",
      "description": "Research in NLP, CV, and deep learning."
    },
    {
      "id": 18,
      "title": "UI Designer",
      "company": "PixelCraft",
      "location": "Chandigarh",
      "category": "Design",
      "salary": "₹5-8 LPA",
      "summary": "Design modern UI components.",
      "description": "Visual design and branding experience a plus."
    },
    {
      "id": 19,
      "title": "Content Strategist",
      "company": "WriteRight",
      "location": "Remote",
      "category": "Marketing",
      "salary": "₹4-6 LPA",
      "summary": "Plan and manage content strategy.",
      "description": "SEO, copywriting, and analytics experience required."
    },
    {
      "id": 20,
      "title": "Software Intern",
      "company": "StartUpTech",
      "location": "Bangalore",
      "category": "Internship",
      "salary": "₹10K/month",
      "summary": "Get hands-on with real projects.",
      "description": "Learning opportunity for freshers in development."
    }
  ]
}

  
];

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = dummyJobs[0].data.find(j => j.id === parseInt(id));

  if (!job) {
    return <p className="text-center p-6 text-red-500">Job not found.</p>;
  }

  const handleApplyClick = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      alert("Please login first to apply.");
      navigate('/login');
      return;
    }
    navigate(`/apply/${id}`);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold">{job.title}</h2>
      <p className="text-gray-700">{job.company} — {job.location}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p className="mt-2 italic">{job.summary}</p>
      <p className="mt-4">{job.description}</p>

      <div className="mt-6 flex gap-4">
        <button
          onClick={handleApplyClick}
          className="px-6 py-2 rounded bg-green-600 hover:bg-green-700 text-white"
        >
          Apply Now
        </button>
        <button
          onClick={() => navigate('/jobs')}
          className="px-6 py-2 rounded bg-gray-500 hover:bg-gray-600 text-white"
        >
          Back to Jobs
        </button>
      </div>
    </div>
  );
}

export default JobDetails;
