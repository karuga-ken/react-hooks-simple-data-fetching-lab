import React, { useState, useEffect } from 'react';

const App = () => {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setDogImage(data.message);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dog image:', error); //displays error for debugging in the event there's an error
        setLoading(false);
      }
    };

    fetchData();
  }, []); // empty array ensures it only runs once  

  return (
    <div>
      {loading ? (
        <p>Loading...</p> //text of "Loading..." when the component is first rendered
      ) : (
        <img src={dogImage} alt="A Random Dog" style={{ maxWidth: '100%' }} />
      )}
    </div>
  );
};

export default App;
