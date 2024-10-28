import React from 'react';
import { Compass, Mountain, Sunrise, Users, Clock, Ban, Check } from 'lucide-react';

const Offroadride = () => {
  return (
    <div className="bg-slate-100 p-8 rounded-xl shadow-xl max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="bg-green-700 text-white p-6 rounded-xl mb-8">
        <div className="flex items-center mb-4">
          <Compass className="w-8 h-8 mr-3" />
          <h1 className="text-4xl font-bold">Extreme Off-Road Adventure</h1>
        </div>
        <p className="text-lg">
          Conquer Munnar's untamed terrain in our custom-built 4x4 Jeeps! Experience an adrenaline-pumping journey through rugged landscapes, challenging trails, and breathtaking viewpoints that few get to witness. This isn't just a tour - it's an off-road expedition into the wild heart of Munnar.
        </p>
      </div>

      {/* Adventure Highlights */}
      <div className="bg-white rounded-xl p-6 mb-6 shadow-md">
        <div className="flex items-center mb-4">
          <Mountain className="w-6 h-6 text-green-600 mr-2" />
          <h2 className="text-2xl font-bold text-green-600">Adventure Highlights</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Extreme Terrain Challenge</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Rock crawling & steep ascents
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                River crossings (seasonal)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Mud trails & forest tracks
              </li>
            </ul>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Scenic Adventures</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Hidden waterfall access
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Exclusive viewpoint stops
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Adventure photography spots
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Package Details */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            Duration & Capacity
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-green-600" />
              Maximum 6 adventurers per Jeep
            </li>
            <li>Full day of pure adventure</li>
            <li className="font-bold text-lg">₹5500 per expedition</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
            <Sunrise className="w-5 h-5 mr-2" />
            Special Features
          </h3>
          <ul className="space-y-3">
            <li>Sunrise/Sunset expedition options</li>
            <li>Professional off-road guides</li>
            <li>Safety briefing & equipment</li>
          </ul>
        </div>
      </div>

      {/* Inclusions/Exclusions */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
            <Check className="w-5 h-5 mr-2" />
            Included
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              4x4 Jeep with experienced driver
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Adventure safety gear
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Energy snacks & water
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Photo opportunities
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
            <Ban className="w-5 h-5 mr-2" />
            Not Included
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Personal insurance
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Pick-up/drop-off
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Personal expenses
            </li>
          </ul>
        </div>
      </div>

      {/* Contact & Location */}
      <div className="bg-green-700 text-white p-6 rounded-xl mt-6">
        <h3 className="text-xl font-bold mb-4">Book Your Adventure</h3>
        <div className="space-y-2">
          <p>Location: Anachal, Munnar</p>
          <p>Contact: +91 6238343996</p>
          <p className="text-sm mt-4">
            *24-hour cancellation policy applies for full refund
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offroadride;