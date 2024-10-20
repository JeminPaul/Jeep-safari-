import React from 'react';
import { MapPin, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Resort {
  id: number;
  name: string;
  price: number;
  place: string;
  images: string[];
  link:string;
}

const resorts: Resort[] = [
  {
    id: 1,
    name: "Sunset Beach Resort",
    price: 299,
    place: "Maldives",
    link:'',
    images: [
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1540202404-1b927e27fa8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1540202403-b7abd6747a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ]
  },
  {
    id: 2,
    name: "Mountain View Lodge",
    price: 199,
    place: "Swiss Alps",
    link:'',
    images: [
      "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1548777123-e216912df7d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ]
  },
  {
    id: 3,
    name: "Tropical Paradise Resort",
    price: 249,
    place: "Bali",
    link:'',
    images: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1554481923-a6918bd997bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ]
  },
  {
    id: 4,
    name: "City Lights Hotel",
    price: 179,
    place: "New York",
    link:'',
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ]
  },
  {
    id: 5,
    name: "Desert Oasis Resort",
    price: 229,
    place: "Dubai",
    link:'',
    images: [
      "https://images.unsplash.com/photo-1512958789358-4effcbe1f0ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ]
  },
  {
    id: 6,
    name: "Rainforest Retreat",
    price: 159,
    place: "Costa Rica",
    link:'https://maps.app.goo.gl/dJyvTFpXtTgaGbz68',
    images: [
      "https://images.unsplash.com/photo-1550071593-fd1bdaf1f93c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1536625737227-92a1fc042e7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ]
  }
];

const NextArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ChevronRight className="w-6 h-6 text-white" />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ChevronLeft className="w-6 h-6 text-white" />
    </div>
  );
};

function Rooms() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-900 mt-10">Our Exclusive Resorts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {resorts.map((resort) => (
            <div key={resort.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="relative h-64">
                <Slider {...settings}>
                  {resort.images.map((image, index) => (
                    <div key={index} className="h-64">
                      <img src={image} alt={`${resort.name} - Image ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{resort.name}</h2>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <a href={resort.link} target="_blank"><span>{resort.place}</span></a>
                </div>
                <div className="flex items-center text-green-600 font-bold">
                  <DollarSign className="w-4 h-4 mr-1" />
                  <span>{resort.price} / night</span>
                </div>
                <button  className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
                <a href="https://wa.me/+917560966897" target="_blank">Contact Us on WhatsApp</a>

                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rooms;