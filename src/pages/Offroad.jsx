import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import video files for different places in Anakulam
import off1 from "../Assets/off1.mp4";
import off2 from "../Assets/off6.mp4"

// import bridge1 from "../Assets/bridge1.mp4"
import off3 from "../Assets/off2.mp4";
import off4 from '../Assets/off2.mp4'
import BookButton from '../Components/Bookbutton';
import off5 from "../Assets/off7.mp4"
import off6 from "../Assets/offroad-1.mp4"
import off7 from "../Assets/offroad-4.mp4"
import Offroadride from '../Components/Offroadride';
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

const Ponmudi = () => {
  const places = [
    {
      name: "Extreme 4x4 Trails",
      description: "Experience pure adrenaline as you conquer challenging rock crawls, steep inclines, and technical terrain in our specially modified 4x4 jeeps. Get ready for the ultimate off-road challenge!",
      videos: [off1]
    },
    {
      name: " Adventure",
      description: "Navigate thrilling off-road tracks to reach this historic hanging bridge. Cross heart-pounding heights while surrounded by misty mountains and dense forests. A perfect blend of adventure and scenic beauty.",
      videos: [off2]
    },
    {
      name: " Trail Expedition",
      description: "Tackle rugged forest paths and challenging muddy terrain as we journey to the spectacular Ponmudi Dam. Experience water crossings and steep descents while enjoying breathtaking reservoir views.",
      videos: [off3]
    },
    {
      name: "Echo Valley Trail",
      description: "Rev through remote mountain trails to reach this natural acoustic wonder. Our off-road route features exciting switchbacks and dramatic elevation changes, making every turn an adventure.",
      videos: [off4]
    },
    {
      name: "Peak Challenge",
      description: "Test your nerves on one of our most extreme trails! Conquer near-vertical climbs and rocky terrain as we ascend to Nadukani's summit for panoramic views that make the challenging drive worthwhile.",
      videos: [off5]
    },
    {
      name: " Secret Track",
      description: "Discover hidden trails known only to locals as we power through dense forest paths, navigate seasonal streams, and emerge at a stunning viewpoint. Experience true off-road exploration at its finest!",
      videos: [off6]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
       

        <Offroadride/>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {places.map((place, index) => (
            <PlaceCard key={index} {...place} />
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">
        Conquer the Untamed Trails of Munnar
      </h2>
      
      <p className="text-gray-600 mb-4">
        Munnar's rugged terrain beckons the adventurous soul with its challenging off-road trails and untamed wilderness. From steep mountain ascents to thrilling river crossings, every turn offers a new adrenaline rush for off-road enthusiasts. Our expert-guided jeep safaris take you deep into the heart of tea country where regular vehicles dare not venture.
      </p>
      
      <p className="text-gray-600 mb-4">
        Experience the raw beauty of the Western Ghats as you navigate through mist-covered peaks, dense forest tracks, and remote viewpoints accessible only by 4x4 vehicles. Feel the rush as your jeep conquers challenging terrains, while catching glimpses of pristine waterfalls and exotic wildlife in their natural habitat. Our specially designed routes combine technical off-roading challenges with spectacular photo opportunities at exclusive vantage points.
      </p>
      
      <p className="text-gray-600">
        Whether you're a seasoned off-road enthusiast or a first-time adventure seeker, our customized trails offer the perfect blend of thrill and safety. Join us for an unforgettable journey that showcases Munnar's untold stories through the lens of extreme adventure and natural beauty.
      </p>
    </div>


        <div className="text-center">
          <BookButton />
        </div>
      </div>
    </div>
  );
};

export default Ponmudi;
