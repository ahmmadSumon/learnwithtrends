import React from 'react'
import JobCard from '../../app/components/BlogCard'

const CareerPage = () => {
  const jobs = [
    { title: "Software Engineer", description: "Develop and maintain software applications.", location: "Remote" },
    { title: "Marketing Manager", description: "Lead marketing campaigns and strategies.", location: "New York" },
    { title: "Data Analyst", description: "Analyze and interpret complex data sets.", location: "San Francisco" },
    { title: "UX Designer", description: "Design user interfaces for software applications.", location: "Los Angeles" },
    { title: "DevOps Engineer", description: "Ensure the smooth operation of software systems.", location: "Chicago" },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-center text-4xl font-bold mb-8">Career Opportunities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job, index) => (
          <JobCard key={index} title={job.title} description={job.description} location={job.location} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="max-w-sm bg-[#093E61] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#C8E0FB] hover:text-black transition-all">
          Apply Now
        </button>
      </div>
    </div>
  )
}

export default CareerPage
