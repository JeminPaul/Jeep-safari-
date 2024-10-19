import React from 'react';
import { Play } from 'lucide-react';
import AnimatedWord from '../Components/Animatedword';

// Import all video files
import mainVideo from "../Assets/v1.mp4";
import home1 from "../Assets/home1.mp4";
import home2 from "../Assets/home2.mp4";
import home3 from "../Assets/home3.mp4";
import home4 from "../Assets/home4.mp4";
import home5 from "../Assets/home5.mp4";
import home6 from "../Assets/home6.mp4";
import home7 from "../Assets/home7.mp4";
import home8 from "../Assets/home8.mp4";

const Home = () => {
  const phrase1 = [
    ["E", "X", "P", "L", "O", "R", "E"],
    ["Y", "O", "U", "R", " ", "H", "O", "L", "I", "D", "A", "Y'", "S"],
    ["<","W", "I", "T", "H", " ", "U", "S",">"]
  ];

  const videoSources = [home1, home2, home3, home4, home5, home6, home7, home8];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Video Section */}
      <div className="relative h-screen">
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src={mainVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to South India's Kashmir</h1>
            <p className="text-2xl">Explore amazing Munnar tour packages with us.</p>
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="py-16 bg-white">
        <h1 className="text-4xl text-teal-500 text-center">
          <AnimatedWord phrase={phrase1} />
        </h1>
      </div>

      {/* Video Grid Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Discover Munnar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoSources.map((video, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative aspect-w-16 aspect-square">
                  <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                    <source src={video} type="video/mp4" />
                  </video>
                  
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Scenic Beauty {index + 1}</h3>
                  <p className="text-gray-600">Experience the breathtaking landscapes of Munnar.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <p className="text-xl text-gray-700 leading-relaxed">
            Experience the thrill of Munnar Jeep Safari exploring the wildlife of Munnar, Kerala with the Kolukumalai Jeep Safari. This exciting full-day tour takes you on a journey to the Kolukkumalai Tea Estate, also known as the tea plantation in the sky. Accessible only by 4-wheel drive, this estate is situated in the mountains at a height of approximately 8000ft, offering breathtaking views of the mountains and the vast plains of Tamil Nadu.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mt-4">
            Book your Munnar jeep safari online and get ready for an adventure of a lifetime. Our experienced guides will take you on a thrilling ride through the rugged terrain, giving you a chance to witness the beauty of nature up close. You will get to see exotic wildlife, lush green forests, and stunning waterfalls along the way.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mt-4">
            Don't miss out on this unique opportunity to explore the hidden gems of Munnar. Visit our website for more information on the Kolukumalai Jeep Safari and book your tour today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;