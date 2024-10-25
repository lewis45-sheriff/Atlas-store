import React, { useState } from 'react';
import './Home.css';
import Button from "react-bootstrap/Button";
import { Menu, X } from 'lucide-react';


function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);

  };
  const categories = [
    "Premium Collections",
    "Spirits",
    "Wines",
    "Beers, Infusions & Sake",
    "Cocktails",
    "Glassware",

    "Gift Sets",
    "Non-Alcoholic Drinks",
    "Smokes & Accessories"
  ];


  return (
    <div className="home-page">
       <div className="relative">
      {/* Toggle Button */}
      <Button 
        className="toggle-button flex items-center justify-center w-10 h-10 fixed top-4 left-4 z-50 bg-transparent border-none hover:bg-gray-100 rounded-full transition-colors duration-200"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <X size={24} className="text-gray-700" />
        ) : (
          <Menu size={24} className="text-gray-700" />
        )}
      </Button>

      {/* Sidebar for product categories */}
      {isSidebarOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={toggleSidebar}
          />
          
          {/* Sidebar */}
          <nav className="sidebar fixed left-0 top-0 h-full w-64 bg-[#f4f4f4] shadow-lg z-40 transform transition-transform duration-300">
            <Button className="w-full bg-[#333] hover:bg-[#555] text-white py-3 px-4 rounded-none uppercase tracking-wider text-base font-normal transition-colors duration-200 mt-16 mb-5">
              BROWSE CATEGORIES
            </Button>
            
            <table className="category-table w-full">
              <tbody>
                {categories.map((category, index) => (
                  <tr key={index}>
                    <td className="py-4 px-6 border-b border-[#ddd] cursor-pointer hover:bg-[#ddd] transition-colors duration-200">
                      {category}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </nav>
        </>
      )}
    </div>
    

      {/* Main content */}
      <div className="main-content">
        <header className="header">
          <h1>Atlas Liquor Store</h1>
        </header>

        {/* Promotional Section */}
        <section className="promo-section">
          <img
            src="https://i.pinimg.com/originals/22/07/81/220781f7c2a3d5c986dd7cc34db24b42.gif"
            alt="Liquor Promotion"
            className="promo-image"
          />
          <div className="promo-text">
            <p>
              Welcome to <strong>Atlas Liquor Store</strong>, your premier destination for a diverse selection of premium liquors, spirits, wines, and beers. We cater to both retail and wholesale customers, ensuring that whether you’re stocking up for your business or seeking the perfect drink for a special occasion, we have just what you need. Our inventory features everything from exclusive, high-end collections to everyday essentials, all at wholesale prices. Enjoy the best value with our carefully curated retail selections. Explore <strong>Atlas Liquor Store</strong> today and experience the convenience of quality beverages delivered right to your door, whether you're purchasing in bulk or just a single bottle.
            </p>
          </div>
        </section>

        {/* Featured Wine Types */}
        <section className="wine-gallery">
          <h2>Featured Categories</h2>
          <div className="category-grid">
            <div className="category-item">
              <img src="https://i.pinimg.com/236x/59/15/a3/5915a3540f01f148b13b50b022077a56.jpg" alt="Red Wines" />
              <h3>Premium Collections</h3>
              <p>Exclusive selections of rare and sought-after bottles for the discerning collector.</p>
            </div>
            <div className="category-item">
              <img src="https://i.pinimg.com/236x/0f/0f/05/0f0f0587a2f73ebd1098b0a1ef0b3ace.jpg" alt="Rosé Wines" />
              <h3>
                Wines</h3>
              <p>Curated selection of red, white, and rosé wines from renowned vineyards worldwide.</p>
            </div>
            <div className="category-item">
              <img src="https://i.pinimg.com/236x/90/7d/29/907d29ea4ee97d1554e820e797d0f6e0.jpg" alt="White Wines" />
              <h3>Beers</h3>
              <p>Craft and premium beers featuring local brews, imports, and limited editions.</p>
            </div>
            <div className="category-item">
              <img src="https://i.pinimg.com/236x/a7/08/5d/a7085da262fb2ded24df4b117c47873d.jpg" alt="Sparkling Wines" />
              <h3>Spirits</h3>
              <p>Fine selection of whiskey, gin, vodka, and other premium spirits from around the globe.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
