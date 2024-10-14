import React from 'react';

const BlogCard = ({ title, description, imageUrl, rating, readMoreUrl }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[720px] mx-auto">
        <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white/20 backdrop-blur-md border border-white/20 shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-xl">
          {/* Display the image if imageUrl is passed */}
          {imageUrl && (
            <div className="relative mx-4 mt-4 overflow-hidden text-white rounded-lg">
              <img
                src={imageUrl}
                alt={title}
                loading="lazy"
                className="object-cover w-full h-48 rounded-t-xl"
              />
              <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent to-black/30"></div>
            </div>
          )}
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              {/* Display the title */}
              <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900">
                {title}
              </h5>
              {/* Display rating if passed */}
              {rating && (
                <p className="flex items-center gap-1.5 text-base font-normal text-blue-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {rating}
                </p>
              )}
            </div>
            {/* Display the description */}
            <p className="block text-base font-light leading-relaxed text-gray-700">
              {description}
            </p>
            {/* Display the read more button if readMoreUrl is passed */}
            {readMoreUrl && (
              <div className="mt-4">
                <a href={readMoreUrl} className="inline-block text-blue-600 hover:text-blue-700">
                  Read More
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
