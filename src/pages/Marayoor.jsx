 import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import video files for different places in Anakulam
import Waterfall1 from "../Assets/silentvalley1.mp4";
import bridge1 from "../Assets/silentvalley2.mp4"
// import bridge1 from "../Assets/bridge1.mp4"
import Dam1 from "../Assets/silentvalley3.mp4";
import nadukani1 from '../Assets/silentvalley4.mp4'
import anakulamVideo2 from "../Assets/silentvalley6.mp4";
import anakulamVideo4 from "../Assets/silentvalley5.mp4";
import BookButton from '../Components/Bookbutton';
// import dam1 from "../Assets/home17"

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

const Marayoor = () => {
  const places = [
    {
      name: "Silent-valley",
      description: "Experience breathtaking panoramic views of the surrounding hills and valleys.",
      videos: [Waterfall1]
    },
    {
      name: "Way to Heaven",
      description: "Wander through lush green tea gardens and learn about tea production.",
      videos: [ bridge1,]
    },
    {
      name: "hills and valleys",
      description: "Witness the mesmerizing beauty of cascading waters surrounded by dense forests.",
      videos: [ Dam1]
    },
    {
      name: "River-cross",
      description: "Witness the mesmerizing beauty of cascading waters surrounded by dense forests.",
      videos: [ anakulamVideo2]
    },
    {
      name: "Mountain",
      description: "Witness the mesmerizing beauty of cascading waters surrounded by dense forests.",
      videos: [ nadukani1]
    },
    {
      name: "Tea-plantation",
      description: "Witness the mesmerizing beauty of cascading waters surrounded by dense forests.",
      videos: [ anakulamVideo4]
    },
    // Add more places as needed
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-gray-800 mb-8">
          Discover <span className="text-green-600">Silent-Valley</span>
        </h1>

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-green-600 mb-4">Tour Description</h1>
          <p className="text-gray-700 mb-4">
            Silent-Valley Jeep tour invites you on a thrilling adventure journey in a Jeep Safari to explore the hidden beauty of Munnar. Even though Munnar is a small town, every inch is equally beautiful. Experience the flora and fauna up close. The jeep safari offers even more fun and adventures, making it a memorable trip for a lifetime.
          </p>

          <div className="bg-white p-4 rounded-lg mb-4">
            <h2 className="text-2xl font-semibold text-green-500 mb-2">Package Highlights</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Thrilling off-road journey</li>
              <li>Visit to a tourist village </li>
              <li>Tea-plantation- views</li>
              <li>Picnic point (sunrise & sunset options)</li>
              <li>Serene lake view</li>
            </ul>
            <p className="mt-3 text-lg text-gray-800 font-semibold">3-4 Hours - ₹3000 per trip (up to 6 people)</p>
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
            <p className="text-gray-600">Anachal, Munnar</p>
            <p className="text-gray-600">Contact: +91 6238343996</p>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {places.map((place, index) => (
            <PlaceCard key={index} {...place} />
          ))}
        </div>

        <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-xl p-10 mb-12 border border-green-100">
      <h2 className="text-4xl font-bold mb-6 text-gray-800 font-serif tracking-tight leading-tight">
        Silent Valley: A Paradise in <span className="text-green-600">Munnar's Heart</span>
      </h2>
      
      <div className="space-y-6 font-['Helvetica_Neue']">
        <p className="text-lg leading-relaxed text-gray-700">
          Nestled in the emerald embrace of Munnar's rolling hills, Silent Valley stands as a testament to nature's profound serenity. This mystical sanctuary, shrouded in perpetual mist and carpeted with verdant tea plantations, offers an escape into a world where time seems to stand still.
        </p>
        
        <div className="pl-4 border-l-4 border-green-500 my-8">
          <p className="text-xl italic text-gray-600 leading-relaxed">
            "Where silence speaks louder than words, and every breath of mountain air tells a story of untamed wilderness."
          </p>
        </div>
        
        <p className="text-lg leading-relaxed text-gray-700">
          As you ascend through winding pathways, each turn reveals breathtaking vistas of undulating hills draped in emerald tea gardens. Watch as morning mist dances with sunbeams, creating an ethereal spectacle that captivates photographers and nature enthusiasts alike.
        </p>
        
        <p className="text-lg leading-relaxed text-gray-700">
          Silent Valley isn't just a destination; it's an experience that awakens your senses. Listen to the whispers of ancient trees, spot rare mountain birds soaring through crisp mountain air, and feel the gentle touch of clouds as they drift past you at this elevated paradise.
        </p>
        
        <div className="bg-green-50 p-6 rounded-xl mt-8">
          <h3 className="text-xl font-semibold text-green-800 mb-3">
            Highlights of Silent Valley
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Panoramic viewpoints of endless tea plantations</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Mystical morning mist experiences</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Rich biodiversity and rare wildlife</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Tranquil hiking trails</span>
            </li>
          </ul>
        </div>
        
        <p className="text-lg leading-relaxed text-gray-700 mt-6">
          Whether you're seeking solitude among the clouds, adventure in the wilderness, or simply a moment to reconnect with nature, Silent Valley offers an enchanting escape that will leave you spellbound and yearning to return.
        </p>
      </div>
      
     
    </div>


        <div className="text-center">
          <BookButton />
        </div>
      </div>
    </div>
  );
};

export default Marayoor;
