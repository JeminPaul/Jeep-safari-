import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react'; // Adding Play icon
import AnimatedPhrase from '../Components/Animatedword';
import CustomerReviews from '../Components/CoustomerReviews';

// Import video files from the src/assets folder
import anakkulamVideo from '../assets/Anakkulam.mp4';
import vattavadaVideo from '../Assets/vattavada1.mp4';
import ponmudiVideo from '../Assets/home17.mp4';
import marayoorVideo from '../Assets/home12.mp4';
import Kattadiparavideo from '../Assets/kattadipara1.mp4';
import offroadvideo from '../Assets/mullanthandu.mp4'


// Array of package details with imported video sources
const packages = [
    { name: 'Anakulam Package', path: '/anakulam', videoSrc: anakkulamVideo },
    { name: 'Vattavada Package', path: '/vattavada', videoSrc: vattavadaVideo },
    { name: 'Ponmudi Package', path: '/ponmudi', videoSrc: ponmudiVideo },
    { name: 'Marayoor Package', path: '/marayoor', videoSrc: marayoorVideo },
    {name:'Kattadipara package ',path:'/kattadipara',videoSrc:Kattadiparavideo},
    {name:'Off-Road package',path:'/offroad',videoSrc:offroadvideo}
];

const Packages = () => {
    const phrase2 = [
        ['M', 'U', 'S', 'T', ' ', 'V', 'I', 'S', 'I', 'T', ' ', 'I', 'N', ' ', 'M', 'U', 'N', 'N', 'A', 'R'],
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Title Section with Animated Phrase */}
            {/* <div className="py-16 bg-white">
                <h1 className="text-4xl text-teal-500 text-center mb-8">
                    <AnimatedPhrase phrase={phrase2} />
                </h1>
            </div> */}

            {/* Video Grid Section */}
            <div className="bg-gray-100 py-10">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10">Explore Our Tour Packages</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {packages.map((pkg, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="relative aspect-w-16 aspect-square">
                                    <video
                                        className="w-full h-full object-cover rounded-t-lg"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    >
                                        <source src={pkg.videoSrc} type="video/mp4" />
                                    </video>
                                    {/* Play Icon Overlay */}

                                </div>
                                <div className="p-6 flex flex-col items-center">
                                    <h3 className="font-bold text-2xl text-center mb-4 text-gray-800">{pkg.name}</h3>
                                    <Link
                                        to={pkg.path}
                                        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                                    >
                                        View Package
                                    </Link>
                                </div>

                            </div>
                            
                        ))}
                    </div>
                </div>
                <div>
                    
                </div>
            </div>

            {/* Description Section */}
            <div className="bg-white py-16 ">
               <CustomerReviews/>
            </div>
            
        </div>
    );
};

export default Packages;
