"use client"
import React, { useState } from 'react';
import BlogCard from '../components/BlogCard';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { name: "Tech", href: "/category/tech", imageUrl: "/123.gif" },
  { name: "Digital Marketing", href: "/category/digital-marketing", imageUrl: "/234.gif" },
  { name: "Google Ads", href: "/category/google-ads", imageUrl: "/345.gif" },
  { name: "Marketing Agency", href: "/category/marketing-agency", imageUrl: "/456.gif" },
  { name: "Paid Advertising", href: "/category/paid-advertising", imageUrl: "/add1.png" },
  { name: "Social Media Marketing", href: "/category/social-media-marketing", imageUrl: "/add2" },
];

const blogPosts = [
  { title: "The Future of Artificial Intelligence", description: "Dive into how AI is shaping industries and the world around us.", category: "Tech", readMoreUrl: "/blog/the-future-of-ai", imageUrl: "/123.gif" },
  { title: "Mastering Digital Marketing in 2024", description: "Learn the key strategies and tools to excel in digital marketing this year.", category: "Digital Marketing", readMoreUrl: "/blog/mastering-digital-marketing", imageUrl: "/234.gif" },
  { title: "Google Ads: Optimizing for Success", description: "Get insights on how to create high-performing Google Ads campaigns.", category: "Google Ads", readMoreUrl: "/blog/google-ads-optimization", imageUrl: "/345.gif" },
  { title: "Building a Successful Marketing Agency", description: "Discover the steps to establish and grow a thriving marketing agency.", category: "Marketing Agency", readMoreUrl: "/blog/building-a-successful-marketing-agency", imageUrl: "/456.gif" },
  { title: "The Power of Paid Advertising", description: "Explore how paid advertising can elevate your brand and boost conversions.", category: "Paid Advertising", readMoreUrl: "/blog/the-power-of-paid-advertising", imageUrl: "/add1.png" },
  { title: "Effective Social Media Marketing Strategies", description: "Find out how to craft engaging social media campaigns that drive results.", category: "Social Media Marketing", readMoreUrl: "/blog/effective-social-media-marketing-strategies", imageUrl: "/add2.ong" },
  { title: "Tech Trends to Watch in 2024", description: "Explore the latest technologies that are set to disrupt industries this year.", category: "Tech", readMoreUrl: "/blog/tech-trends-to-watch", imageUrl: "/add3.png" },
  { title: "The Role of AI in Digital Marketing", description: "Discover how AI tools can enhance your digital marketing efforts.", category: "Digital Marketing", readMoreUrl: "/blog/the-role-of-ai-in-digital-marketing", imageUrl: "/add4.webp" },
  { title: "Google Ads vs. Facebook Ads: Which is Best?", description: "Compare these two major platforms to decide where to invest your ad budget.", category: "Google Ads", readMoreUrl: "/blog/google-ads-vs-facebook-ads", imageUrl: "/s1.webp" },
  { title: "Scaling Your Marketing Agency", description: "Learn the best practices for scaling your marketing agency to new heights.", category: "Marketing Agency", readMoreUrl: "/blog/scaling-your-marketing-agency", imageUrl: "/s2.png" },
  { title: "The Future of Paid Advertising", description: "Stay ahead of the curve by understanding upcoming trends in paid ads.", category: "Paid Advertising", readMoreUrl: "/blog/the-future-of-paid-advertising", imageUrl: "/s3.jpg" },
  { title: "Social Media Marketing for Small Businesses", description: "Uncover practical tips to boost your social media presence and engagement.", category: "Social Media Marketing", readMoreUrl: "/blog/social-media-marketing-for-small-businesses", imageUrl: "234.gif" },
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowAll(false); // Reset to show only a limited number of posts when changing category
  };

  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) => post.category === selectedCategory)
    : blogPosts;

  const postsToDisplay = showAll ? filteredPosts : filteredPosts.slice(0, 5);

  return (
    <>
      <h1 className='text-center text-[#093E61] font-bold text-5xl'>Blog</h1>
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

          {/* Hide Latest Posts on mobile screens */}
          <div className="col-span-2 md:col-span-2 my-3 p-4 w-[250px] min-h-[400px] rounded-lg border shadow-md hidden md:block">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Latest Posts
            </h2>
            {postsToDisplay.map((post, index) => (
              <div key={index} className="text-lg text-gray-600 dark:text-gray-400 py-1 px-2 rounded-md">
                {post.title}
              </div>
            ))}
          </div>
        </div>

        {/* Blog posts */}
        <div className="col-span-2 md:col-span-2 md:-ml-[100px]  flex flex-wrap justify-between">
          {postsToDisplay.map((post, index) => (
            <div key={index} className="w-full sm:w-1/2 p-2">
              <BlogCard
                title={post.title}
                description={post.description}
                imageUrl={post.imageUrl} // Use the image URL from the post
                readMoreUrl={post.readMoreUrl}
              />
            </div>
          ))}
          {!showAll && (
            <div className="w-full text-center mt-4">
              <button
                onClick={() => setShowAll(true)}
                className="text-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              >
                See More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
