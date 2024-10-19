import React from 'react';
import { Play } from 'lucide-react';
import AnimatedWord from '../Components/Animatedword';

// Import all video files
import mainVideo from "../Assets/v1.mp4";
import home1 from "../Assets/home16.mp4";
import home2 from "../Assets/home20.mp4";
import home3 from "../Assets/home17.mp4";
import home4 from "../Assets/home4.mp4";
import home5 from "../Assets/home21.mp4";
import home6 from "../Assets/home6.mp4";
import home7 from "../Assets/Nadukani.mp4";
import home8 from "../Assets/home8.mp4";
import home9 from "../Assets/home18.mp4"

const Home = () => {
  const phrase1 = [
    ["E", "X", "P", "L", "O", "R", "E"],
    ["Y", "O", "U", "R", " ", "H", "O", "L", "I", "D", "A", "Y'", "S"],
    ["<","W", "I", "T", "H", " ", "U", "S",">"]
  ];

  const videoSources = [home1, home2, home3, home4, home5, home6, home7, home8,home9];
  const places=["Chunayammackal Waterfalls","OFF-Roads","Ponmudi Dam","Tea-plantation","Anakkulam view-point","Attukad-Waterfalls","Nadukani-hilltop","Attukad-Waterfalls","Anakkulam Rivercross"]

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
            <h1 className=" animate-typing text-5xl font-bold mb-4 ">Welcome to South India's Kashmir</h1>
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
                  <h3 className="font-bold text-lg mb-2">{places[index]}</h3>
                  {/* <p className="text-gray-600">Experience the breathtaking landscapes of Munnar.</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-gradient-to-r from-blue-50 to-teal-50 py-16">
  <div className="container mx-auto px-4 text-center">
    {/* Title Section */}
    <h2 className="text-4xl font-bold text-gray-800 mb-6">
      Explore the Beauty of Munnar
    </h2>

    {/* Content Section */}
    <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
      Experience the thrill of Munnar Jeep Safari exploring the wildlife of Munnar, Kerala with our Jeep Safari. This exciting full-day tour takes you on a journey to the hilltop Tea Estate, also known as the tea plantation in the sky. Accessible only by 4-wheel drive, this estate is situated in the mountains at a height of approximately 8000ft, offering breathtaking views of the mountains and the vast plains of Tamil Nadu.
    </p>
    <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
      Book your Munnar jeep safari online and get ready for an adventure of a lifetime. Our experienced guides will take you on a thrilling ride through the rugged terrain, giving you a chance to witness the beauty of nature up close. You will get to see exotic wildlife, lush green forests, and stunning waterfalls along the way.
    </p>
    <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
      Don't miss out on this unique opportunity to explore the hidden gems of Munnar. Visit our website for more information on the  Jeep Safari and book your tour today.
    </p>

    {/* Call-to-Action Button */}
    {/* <Link to="/packages" className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600 transition-colors">
      Book Your Package
    </Link> */}
    <button  className="bg-gradient-to-r from-teal-400 to-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:from-teal-500 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300" >
    <a href="https://wa.me/+917560966897" target="_blank">Book now</a>
</button>

  </div>
</div>

    </div>
  );
};

export default Home;