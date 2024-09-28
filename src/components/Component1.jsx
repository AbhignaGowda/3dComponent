import React from 'react'

const Component1 = () => {
  return (
    <div className="section" data-section-name="section1" id="section1" >
      <div className="bg-gray-900 text-white w-full h-full">
      <header className="py-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Game Zone</h1>
        <p className="text-xl mb-6">Your one-stop destination for the latest and greatest games!</p>
        <a 
          href="#featured-games" 
          className="bg-yellow-500 text-black py-2 px-4 rounded-full hover:bg-yellow-400 transition duration-300"
        >
          Explore Games
        </a>
      </header>

      <section id="featured-games" className="py-20">
        <h2 className="text-3xl text-center mb-10">Featured Games</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-3">Epic Adventure</h3>
            <p className="mb-4">Join the hero on a journey to save the world from darkness.</p>
            <a 
              href="#" 
              className="bg-yellow-500 text-black py-2 px-4 rounded-full hover:bg-yellow-400 transition duration-300"
            >
              Download Now
            </a>
          </div>
          
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-3">Race to Victory</h3>
            <p className="mb-4">Speed through various terrains in this thrilling racing game.</p>
            <a 
              href="#" 
              className="bg-yellow-500 text-black py-2 px-4 rounded-full hover:bg-yellow-400 transition duration-300"
            >
              Download Now
            </a>
          </div>

          {/* Game Card 3 */}
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-3">Puzzle Master</h3>
            <p className="mb-4">Challenge your mind with engaging puzzles and brain teasers.</p>
            <a 
              href="#" 
              className="bg-yellow-500 text-black py-2 px-4 rounded-full hover:bg-yellow-400 transition duration-300"
            >
              Download Now
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800">
        <h2 className="text-3xl text-center mb-10">What Our Users Say</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Testimonial 1 */}
          <div className="bg-gray-700 p-5 rounded-lg shadow-lg">
            <p className="mb-4">"Game Zone has the best selection of games! I found my favorite titles here!"</p>
            <p className="font-bold">- Alex G.</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-700 p-5 rounded-lg shadow-lg">
            <p className="mb-4">"Downloading games has never been easier! Highly recommend!"</p>
            <p className="font-bold">- Sarah K.</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-700 p-5 rounded-lg shadow-lg">
            <p className="mb-4">"Great user interface and awesome games! I'm addicted!"</p>
            <p className="font-bold">- Mark R.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-10 text-center">
        <p>&copy; 2024 Game Zone. All Rights Reserved.</p>
        <a href="#" className="text-yellow-500 hover:underline">Privacy Policy</a>
      </footer>
    </div>
    </div>
  )
}

export default Component1


