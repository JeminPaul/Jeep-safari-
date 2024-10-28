import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";



import Rose1 from "../Assets/rose1.jpg";
import Rose2 from "../Assets/rose2.jpg";
import Rose3 from "../Assets/rose3.jpg";
import Rose4 from "../Assets/rose4.jpg";
import Rose5 from "../Assets/rose1.jpg";
import Tea1 from "../Assets/museum.jpg";
import Tea3 from "../Assets/museum3.jpg";
import matt1 from "../Assets/mattupetty-1.jpg";
import matt2 from "../Assets/mattupetty-1.jpg";
import matt3 from "../Assets/mattupetty-1.jpg";
import matt4 from "../Assets/mattupetty-1.jpg";
import echo1 from "../Assets/echo1.jpg";
import echo2 from "../Assets/echo2.jpg";
import echo3 from "../Assets/echo3.jpg";
import echo4 from "../Assets/echo4.jpg";
import echo5 from "../Assets/echo5.jpg";
import kundala1 from "../Assets/kundala5.jpg";
import kundala2 from "../Assets/kundala1.jpg";
import kundala5 from "../Assets/kundala2.jpg";
import kundala4 from "../Assets/kundala3.jpg";
import kundala3 from "../Assets/kundala4.jpg";
import top1 from "../Assets/top5.jpg"
import top2 from "../Assets/top1.jpg"
import top3 from "../Assets/top2.jpg"
import top4 from "../Assets/top5.jpg"
import top5 from "../Assets/top.jpg"

import vat1 from '../Assets/vattavada9.jpg'
import vat2 from '../Assets/vattavada5.jpg'
import vat3 from '../Assets/vattavada6.jpg'
import vat4 from '../Assets/vattavada7.jpg'
import vat5 from '../Assets/vattavada8.jpg'



const PlaceCard = ({ name, description, images = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      {/* Image slider with overlay gradient */}
      <div className="relative h-64 mb-6">
        {images.length > 0 && (
          <img
            className="w-full h-full object-fill"
            src={images[currentImageIndex]}
            alt={`${name} Image ${currentImageIndex + 1}`}

            layout="fill"
           
          />
        )}
        <div className="absolute inset-0  transition-opacity duration-300" />

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </>
        )}
      </div>

      {/* Content section with improved spacing and responsive typography */}
      <div className="p-4 sm:p-6">
        <h3 className="relative text-xl sm:text-2xl font-bold mb-3">
          {/* Decorative underline that appears on hover */}
          <span className="relative">
            <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent" style={{fontFamily: "'Lucida Console', monospace", fontSize: "20px" }}>
              {name}
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 group-hover:w-full transition-all duration-300" />
          </span>
        </h3>

        {/* Description with responsive text and line clamp */}
        <p className="text-sm sm:text-base text-gray-600 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

const Vattavada = () => {
  const places = [
    {
      name: "Rosegarden",
      description:
        "Experience breathtaking panoramic views of the surrounding hills and valleys.",
      images: [Rose1, Rose2, Rose3, Rose4, Rose5],
    },
    {
      name: "Tea Museum and Tea Garden",
      description:
        "Wander through lush green tea gardens and learn about tea production.",
      images: [Tea1, Tea3],
    },
    {
      name: "Mattupetty Damm",
      description:
        "Witness the mesmerizing beauty of cascading waters surrounded by dense forests.",
      images: [matt1, matt2, matt3, matt4],
    },
    {
      name: "Echo Point",
      description:
        "Echo Point is the Most Visited place in Munnar. A spot on reservoir featuring an echo phenomenon..",
      images: [echo1,echo2,echo3,echo4,echo5],
    },
    {
      name: "Kundala Dam",
      description:
        "1700-m-tall concrete dam in lush surrounds also offering boating, horse riding & elephant sighting.",
      images: [kundala1, kundala2, kundala3, kundala4, kundala5],
    },
    {
      name: "Top Station",
      description:
        "Top Station in Idukki district of Kerala is the highest point  on the Munnar- Kodaikanal road.",
      images: [top1,top2,top3,top4,top5],
    },
    {
        name: "Vattavada",
        description:
          "It is an agricultural village known for growing a wide range of vegetables and fruits in the terrace farmlands.",
        images: [vat1,vat2,vat3,vat4,vat5],
      },
    // Add more places as needed
  ];

  return (
    <div
      className="delay-[300ms] duration-[600ms] taos:translate-x-[-200px] taos:opacity-0"
      data-taos-offset="400"
    >
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center  mb-8  font-sans  text-gray-800 hover:text-blue-600 transition-colors duration-300">
            Discover <span className="text-green-600">Vattavada</span>
          </h1>

          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto from-neutral-800 italic">
            "Vattavada is a village in Idukki district in the state of Kerala,
            bordering Tamil Nadu, India. The village is located along Palani
            Hills in Western Ghats. It is an agricultural village known for
            growing a wide range of vegetables and fruits in the terrace
            farmlands."
          </p>

          <div className="bg-green-200 p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-green-600 mb-4">
              Tour Description
            </h1>
            <p className="text-gray-700 mb-4">
              Vattavada Jeep tour invites you on a thrilling adventure journey
              in a Jeep Safari to explore the hidden beauty of Munnar. Even
              though Munnar is a small town, every inch is equally beautiful.
              Experience the flora and fauna up close. The jeep safari offers
              even more fun and adventures, making it a memorable trip for a
              lifetime.
            </p>

            <div className="bg-white p-4 rounded-lg mb-4">
              <h2 className="text-2xl font-semibold text-green-500 mb-2">
                Package Highlights
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Thrilling off-road journey</li>
                <li>Rose-garden</li>
                <li>Tea-museum & tea-garden</li>
                <li>Visit to a tourist village </li>
                <li>Mattupetty dam views</li>
                <li>Kundala dam-views</li>
                <li>Echo-point</li>
                <li>Top-station view- point (sunrise & sunset options)</li>
                <li>Vattavada</li>
              </ul>
              <p className="mt-3 text-lg text-gray-800 font-semibold">
                7-8 Hours - ₹6500 per trip (up to 6 people)
              </p>
            </div>

            <h2 className="text-2xl font-bold text-green-600 mt-6 mb-2">
              Details
            </h2>
            <div className="bg-white p-4 rounded-lg mb-4">
              <h3 className="text-xl font-semibold text-green-500 mb-2">
                Inclusions
              </h3>
              <ul className="list-inside list-disc text-gray-600">
                <li>All taxes, fees, and handling charges</li>
                <li>GST (Goods and Services Tax)</li>
                <li>Bottled water & fruits</li>
                <li>Professional guide</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg mb-4">
              <h3 className="text-xl font-semibold text-green-500 mb-2">
                Exclusions
              </h3>
              <ul className="list-inside list-disc text-gray-600">
                <li>Gratuities (recommended)</li>
                <li>Transportation to/from attractions</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg mb-4">
              <h3 className="text-xl font-semibold text-green-500 mb-2">
                Additional Info
              </h3>
              <p className="text-gray-600">
                Confirmation will be received at the time of booking. Our team
                will connect with you for further details. The duration of
                transfers is approximate, depending on traffic and time of day.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg mb-4">
              <h3 className="text-xl font-semibold text-green-500 mb-2">
                Cancellation Policy
              </h3>
              <p className="text-gray-600">
                For a full refund, cancel at least 24 hours before the start
                date of the experience.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg mb-4">
              <h3 className="text-xl font-semibold text-green-500 mb-2">
                Departure Point
              </h3>
              <p className="text-gray-600"> Return : At Pick up point</p>
              <p className="text-gray-600">Anachal, Munnar</p>
              <p className="text-gray-600">Contact: +91 6238343996</p>
            </div>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 -mb-14 ">
            {places.map((place, index) => (
              <PlaceCard key={index} {...place} />
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mt-36 mb-5">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800 "style={{ fontFamily: "'Courier New', monospace", fontSize: "50px"}}>
              About Vattavada
            </h2>
            <p className="text-gray-600 mb-4">
              Anakulam is a picturesque destination nestled in the heart of
              Munnar, Kerala. Known for its stunning landscapes and serene
              atmosphere, it offers visitors a perfect blend of natural beauty
              and tranquility.
            </p>
            <p className="text-gray-600 mb-4">
              The area is famous for its lush green tea plantations, misty
              mountains, and crystal-clear streams. Visitors can enjoy
              activities such as trekking, photography, and simply basking in
              the region's unspoiled natural splendor.
            </p>
            <p className="text-gray-600">
              Whether you're an adventure enthusiast or someone looking for a
              peaceful retreat, Anakulam has something to offer for everyone.
            </p>
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/+917560966897"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:from-green-600 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg sm:text-xl"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vattavada;