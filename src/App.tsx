import { url } from "inspector";
import React from "react";

const App = () => {
  // some sample data for the picture grid
  const images = [
    {
      id: 1,
      title: "Mountain",
      url: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
    },
    {
      id: 2,
      title: "Ocean",
      url: "https://thedaily.case.edu/wp-content/uploads/2023/06/underwater-view.jpg",
    },
    {
      id: 3,
      title: "Forest",
      url: "https://www.metroparks.net/wp-content/uploads/2017/06/1080p_HBK_autumn-morning_GI.jpg",
    },
    {
      id: 4,
      title: "Desert",
      url: "https://cdn.britannica.com/10/152310-050-5A09D74A/Sand-dunes-Sahara-Morocco-Merzouga.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Text Styling Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Text Styling Examples
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          This is a regular paragraph with larger text.
        </p>
        <p className="text-sm italic text-gray-500">
          This is smaller, italicized text.
        </p>
        <p className="font-semibold text-purple-600 underline">
          This is semibold, underlined text.
        </p>
      </section>

      {/* Basic Card Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Card Example</h2>
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
          <h3 className="text-xl font-semibold mb-2">Card Title</h3>
          <p className="text-gray-600 mb-4">
            This is a basic card component with some sample content.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Learn More
          </button>
        </div>
      </section>

      {/* Flexbox Layout Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Flexbox Layout
        </h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px] bg-blue-200 p-4 rounded">
            Flex Item 1
          </div>
          <div className="flex-1 min-w-[200px] bg-blue-300 p-4 rounded">
            Flex Item 2
          </div>
          <div className="flex-1 min-w-[200px] bg-blue-400 p-4 rounded">
            Flex Item 3
          </div>
        </div>
      </section>

      {/* Picture Grid Section */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Picture Grid</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div key={image.id} className="relative group">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-48 object-cover rounded-lg shadow-md transition-transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
                <h3 className="text-center">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
