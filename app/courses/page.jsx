"use client";
import React, { useState } from 'react';
import CourseCard from '../components/BlogCard';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { name: "Web Development", href: "/category/web-development", imageUrl: "/web-dev.gif" },
  { name: "Data Science", href: "/category/data-science", imageUrl: "/data-science.gif" },
  { name: "Cyber Security", href: "/category/cyber-security", imageUrl: "/cyber-security.gif" },
  { name: "Artificial Intelligence", href: "/category/artificial-intelligence", imageUrl: "/ai.gif" },
  { name: "Digital Marketing", href: "/category/digital-marketing", imageUrl: "/digital-marketing.gif" },
  { name: "Cloud Computing", href: "/category/cloud-computing", imageUrl: "/cloud-computing.gif" },
];

const coursePosts = [
  { title: "Full Stack Web Development", description: "Learn to build dynamic web applications.", category: "Web Development", readMoreUrl: "/course/full-stack-web-development", imageUrl: "/123.gif" },
  { title: "Data Analysis with Python", description: "Master data analysis using Python.", category: "Data Science", readMoreUrl: "/course/data-analysis-with-python", imageUrl: "/234.gif" },
  { title: "Cyber Security Fundamentals", description: "Understand the basics of cyber security.", category: "Cyber Security", readMoreUrl: "/course/cyber-security-fundamentals", imageUrl: "/345.gif" },
  { title: "Introduction to AI", description: "Explore the world of artificial intelligence.", category: "Artificial Intelligence", readMoreUrl: "/course/introduction-to-ai", imageUrl: "/456.gif" },
  { title: "Digital Marketing Strategies", description: "Learn effective digital marketing strategies.", category: "Digital Marketing", readMoreUrl: "/course/digital-marketing-strategies", imageUrl: "/add1.png" },
  { title: "Cloud Computing Essentials", description: "Discover the essentials of cloud computing.", category: "Cloud Computing", readMoreUrl: "/course/cloud-computing-essentials", imageUrl: "/add2.png" },
];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowAll(false); // Reset to show only a limited number of courses when changing category
  };

  const filteredCourses = selectedCategory
    ? coursePosts.filter((course) => course.category === selectedCategory)
    : coursePosts;

  const coursesToDisplay = showAll ? filteredCourses : filteredCourses.slice(0, 5);

  return (
    <>
      <h1 className='text-center text-[#093E61] font-bold text-5xl'>Courses</h1>

      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col">
          <div
            className="col-span-1 md:col-span-1 rounded-lg shadow-md p-4 dark:bg-gray-800 border"
            style={{ float: 'right', width: '250px', height: '400px' }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Categories
            </h2>
            <ul>
              {categories.map((category, index) => (
                <li key={index} className="mb-2">
                  <button
                    onClick={() => handleCategoryChange(category.name)}
                    className={`text-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 ${
                      selectedCategory === category.name
                        ? 'bg-[#093E61] text-white px-2 py-1 rounded-md'
                        : ''
                    }`}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 md:col-span-2 my-3 p-4 w-[250px] min-h-[400px] rounded-lg border shadow-md hidden md:block">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Latest Courses
            </h2>
            {coursesToDisplay.map((course, index) => (
              <div key={index} className="text-lg text-gray-600 dark:text-gray-400 py-1 px-2 rounded-md">
                {course.title}
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2 md:col-span-2 md:-ml-[100px] flex flex-wrap justify-between">
          {/* Change to flex-wrap to handle responsive display */}
          {coursesToDisplay.map((course, index) => (
            <div key={index} className="w-full md:w-1/2 p-2"> {/* Show 1 card on mobile, 2 on md+ */}
              <CourseCard
                title={course.title}
                description={course.description}
                imageUrl={course.imageUrl} // Use the image URL from the course
                readMoreUrl={course.readMoreUrl}
              />
            </div>
          ))}

          <div className="w-full text-center mt-4">
            <button
              className="max-w-sm bg-[#093E61] text-white my-5 px-6 py-3 rounded-full shadow-lg hover:bg-[#C8E0FB] hover:text-black transition-all flex justify-start ml-[80px]"
            >
              Join Our Courses
            </button>
          </div>
        </div>
      </div>

      {/* Freelancing Course Section */}
      <div className="container mx-auto px-6 py-12 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl">
  <div className="inner-div">
    <h2 className="text-4xl font-bold mb-6 text-center text-[#093E61]">Freelancing Course Enrollment Ongoing</h2>
    <p className="text-xl text-center mb-4 font-semibold text-gray-700">20% Discount</p>
    <p className="text-md mb-6 text-gray-600 leading-relaxed max-w-[80%] text-center mx-auto">
      Online and offline classes will be taken on all subjects of freelancing in a three-month course.
      All videos are uploaded in groups. If for some reason someone can’t attend the class, they can watch the class from the group at a later time.
      16 hours support will be provided to solve any problems.
      This course will teach you how to work both in and out of the marketplace and establish yourself as a brand in the online world.
    </p>
    
    {/* Use flex-col for mobile stacking and flex-row for larger screens */}
    <div className='flex flex-col md:flex-row gap-5'>
      
      {/* Why Learn from Us Card */}
      <div className='border shadow rounded-md p-5 flex-1'>
        <h3 className="text-3xl font-bold mb-4 text-[#093E61]">Why Learn from Us?</h3>
        <ul className="list-none list-inside mb-6 text-gray-600">
          <li>★ Income within 30 days of admission</li>
          <li>★ Reputed Institute</li>
          <li>★ Quiet environment</li>
          <li>★ Lifetime support</li>
          <li>★ Assurance of income</li>
          <li>★ Modern computer lab</li>
          <li>★ Certificate awarded at the end of the course</li>
          <li>★ Huge discount on the purchase of a laptop or desktop</li>
          <li>★ Online and offline class opportunities</li>
          <li>★ Access to classes from any part of the country</li>
          <li>★ Skilled trainer standing training</li>
          <li>★ Long-time work opportunities</li>
        </ul>
      </div>

      {/* Our Courses Card */}
      <div className='border shadow rounded-md p-5 flex-1'>
        <h3 className="text-3xl font-bold mb-4 text-[#093E61]">Our Courses</h3>
        <ul className="list-none list-inside mb-6 text-gray-600">
          <li>★ SEO</li>
          <li>★ Data Entry</li>
          <li>★ Graphics Design</li>
          <li>★ Digital Marketing</li>
          <li>★ Affiliate Marketing</li>
          <li>★ CPA Affiliate Marketing</li>
          <li>★ YouTube Marketing</li>
          <li>★ Social Media Marketing</li>
          <li>★ Video Editing</li>
          <li>★ Web Page Design and Web Security</li>
          <li>★ Ethical Hacking</li>
        </ul>
      </div>

      {/* Contact Card */}
      <div className='border shadow rounded-md p-5 flex-1'>
        <h3 className="text-3xl font-bold mb-4 text-[#093E61]">Contact</h3>
        <ul className="list-none list-inside mb-6 text-gray-600">
          <li>Contact Number: 0170000000</li>
          <li>Email: info@example.com</li>
          <li>Location: Dhaka, Bangladesh</li>
        </ul>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Courses;
