import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import video files for different places in Anakulam
import anakulamVideo1 from "../Assets/home18.mp4";
import anakulamVideo2 from "../Assets/rivercross-2.mp4";
import anakulamVideo3 from "../Assets/home23.mp4";
import anakulamVideo4 from "../Assets/Anakulam2.mp4";
import anakulamVideo5 from "../Assets/Anakulam1.mp4";
import anakulamVideo6 from "../Assets/Anakulam3.mp4";
import Kottappara1 from "../Assets/kottapara.mp4"

const VideoSlider = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <div className="relative aspect-w-16 aspect-h-10 rounded-md overflow-hidden shadow-lg mb-4 sm:mb-6">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        key={videos[currentVideoIndex]}
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-between p-3 sm:p-4">
        <button
          onClick={prevVideo}
          className="bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition-all"
          aria-label="Previous video"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextVideo}
          className="bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition-all"
          aria-label="Next video"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

const PlaceCard = ({ name, description, videos }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <VideoSlider videos={videos} />
      <div className="p-6">
        <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600 mb-2">
          {name}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Anakulam = () => {
  const places = [
    {
      name: "Kottapara Viewpoint",
      description: "Experience breathtaking panoramic views of the surrounding hills and valleys.",
      videos: [Kottappara1, anakulamVideo3]
    },
    {
      name: "Anakulam Tea Plantations",
      description: "Wander through lush green tea gardens and learn about tea production.",
      videos: [anakulamVideo2, anakulamVideo3, anakulamVideo1]
    },
    {
      name: "Anakulam 33 Waterfall",
      description: "Witness the mesmerizing beauty of cascading waters surrounded by dense forests.",
      videos: [anakulamVideo3, anakulamVideo1, anakulamVideo2]
    },
    {
      name: "River-Cross",
      description: "Witness the mesmerizing beauty of cascading waters surrounded by dense forests.",
      videos: [anakulamVideo1, anakulamVideo4, anakulamVideo2]
    },
    {
      name: "Hanging Bridge",
      description: "Witness the mesmerizing beauty of cascading waters surrounded by dense forests.",
      videos: [anakulamVideo3, anakulamVideo1, anakulamVideo2]
    },
    {
      name: "Anakulam Viewpoint (The Land of Elephants)",
      description: "Witness the mesmerizing beauty of cascading waters surrounded by dense forests.",
      videos: [anakulamVideo3, anakulamVideo4, anakulamVideo6, anakulamVideo5]
    },
    // Add more places as needed
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-gray-800 mb-8">
          Discover <span className="text-green-600">Anakulam</span>
        </h1>
        
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Explore the hidden gems of Anakulam, where nature's beauty unfolds in every corner. From misty mountains to serene lakes, embark on a journey of wonder and tranquility.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
  <h1 className="text-3xl font-bold text-green-600 mb-4">Tour Description</h1>
  <p className="text-gray-700 mb-4">
    Anakulam Jeep tour invites you on a thrilling adventure journey in a Jeep Safari to explore the hidden beauty of Munnar. Even though Munnar is a small town, every inch is equally beautiful. Experience the flora and fauna up close. The jeep safari offers even more fun and adventures, making it a memorable trip for a lifetime.
  </p>
  
  <div className="bg-white p-4 rounded-lg mb-4">
    <h2 className="text-2xl font-semibold text-green-500 mb-2">Package Highlights</h2>
    <ul className="list-disc list-inside text-gray-600">
      <li>Thrilling off-road journey</li>
      <li>Visit to a tourist village </li>
      <li>Tea- Plantations</li>
      <li>Kottappara view-point</li>
      <li>Tiger-cave</li>
      <li>Hanging bridge</li>
      <li>Waterfall</li>
      <li>River-crossing</li>
      <li>Anakulam-Elephant view-point(The land of Wild-Elephants)</li>
      
    </ul>
    <p className="mt-3 text-lg text-gray-800 font-semibold"> 7-8 Hours - ₹6500 per trip (up to 6 people)</p>
  </div>

  <h2 className="text-2xl font-bold text-green-600 mt-6 mb-2">Details</h2>
  <div className="bg-white p-4 rounded-lg mb-4">
    <h3 className="text-xl font-semibold text-green-500 mb-2">Inclusions</h3>
    <ul className="list-inside list-disc text-gray-600">
      <li>All taxes, fees, and handling charges</li>
      <li>GST (Goods and Services Tax)</li>
      <li>Bottled water & fruits</li>
      <li>Professional guide</li>
    </ul>
  </div>

  <div className="bg-white p-4 rounded-lg mb-4">
    <h3 className="text-xl font-semibold text-green-500 mb-2">Exclusions</h3>
    <ul className="list-inside list-disc text-gray-600">
      <li>Gratuities (recommended)</li>
      <li>Transportation to/from attractions</li>
    </ul>
  </div>

  <div className="bg-white p-4 rounded-lg mb-4">
    <h3 className="text-xl font-semibold text-green-500 mb-2">Additional Info</h3>
    <p className="text-gray-600">
      Confirmation will be received at the time of booking. Our team will connect with you for further details. The duration of transfers is approximate, depending on traffic and time of day.
    </p>
  </div>

  <div className="bg-white p-4 rounded-lg mb-4">
    <h3 className="text-xl font-semibold text-green-500 mb-2">Cancellation Policy</h3>
    <p className="text-gray-600">For a full refund, cancel at least 24 hours before the start date of the experience.</p>
  </div>

  <div className="bg-white p-4 rounded-lg mb-4">
    <h3 className="text-xl font-semibold text-green-500 mb-2">Departure Point</h3>
    <p className="text-gray-600"> Return : At Pick up point</p>
    <p className="text-gray-600">Anachal, Munnar,Kerala</p>
    <p className="text-gray-600">Contact: +91 6238343996</p>
  </div>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {places.map((place, index) => (
            <PlaceCard key={index} {...place} />
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">About Anakulam</h2>
          <p className="text-gray-600 mb-4">
            Anakulam is a picturesque destination nestled in the heart of Munnar, Kerala. Known for its stunning landscapes and serene atmosphere, it offers visitors a perfect blend of natural beauty and tranquility.
          </p>
          <p className="text-gray-600 mb-4">
            The area is famous for its lush green tea plantations, misty mountains, and crystal-clear streams. Visitors can enjoy activities such as trekking, photography, and simply basking in the region's unspoiled natural splendor.
          </p>
          <p className="text-gray-600">
            Whether you're an adventure enthusiast or someone looking for a peaceful retreat, Anakulam has something to offer for everyone.
          </p>
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/+917560966897"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:from-green-600 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg sm:text-xl"
          >
            Book Your Anakulam Adventure Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Anakulam;
