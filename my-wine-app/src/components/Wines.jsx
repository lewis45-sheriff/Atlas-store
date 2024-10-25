import React, { useEffect, useState } from 'react';
import './Wines.css';

function Wines() {
  const [wines, setWines] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Check if the user is logged in by looking for the token in localStorage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);

    // Fetch wines from the backend API
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
      .then((response) => response.json())
      .then((data) => {
        // CocktailDB API returns drinks with 'strDrink' and 'strDrinkThumb'
        const wineData = data.drinks.map((drink) => ({
          id: drink.idDrink,
          name: drink.strDrink,
          image: drink.strDrinkThumb,
          description: "Classic alcoholic beverage", // Placeholder; CocktailDB API doesn't provide a description
          price: "$10.00" // Placeholder price; update as needed
        }));
        setWines(wineData);
      })
      .catch((error) => console.error('Error fetching wines:', error));
  }, []);

  const handleAddToCart = (wine) => {
    if (!isLoggedIn) {
      alert('Please log in to add items to the cart');
      return;
    }
    setCart((prevCart) => [...prevCart, wine]);
    console.log(`Added ${wine.name} to cart`);
  };

  return (
    <div className="wine-list">
      {wines.length > 0 ? (
        wines.map((wine) => (
          <div key={wine.id} className="wine-item">
            <h3>{wine.name}</h3>
            <img src={wine.image} alt={wine.name} className="wine-image" />
            <p>{wine.description}</p>
            <p><strong>Price:</strong> {wine.price}</p>
            <button onClick={() => handleAddToCart(wine)}>Add to Cart</button>
            <a
              href={`https://wa.me/254105054766?text=I'm interested in ${wine.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              Order via WhatsApp
            </a>
          </div>
        ))
      ) : (
        <p>Loading wines...</p>
      )}
    </div>
  );
}

export default Wines;
