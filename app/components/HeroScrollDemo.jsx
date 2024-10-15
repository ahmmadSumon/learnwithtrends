"use client";
import React from "react";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    (<div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
            Freelancing Course Enrollment Ongoing <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              20% Discount
              </span>
            </h1>
          </>
        }>
        {/* <Image
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false} /> */}
          <div className="container mx-auto px-6 py-12 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl">
  <div className="inner-div">
   
    <p className="text-md mb-6 text-gray-600 leading-relaxed max-w-[80%] text-center mx-auto">
    A three-month freelancing course covering all subjects, with both online and offline classes. All sessions are uploaded in groups for later viewing if missed. Get 16-hour support for problem-solving. Learn to work in and outside of marketplaces and build your personal brand online.
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
      </ContainerScroll>
    </div>)
  );
}
