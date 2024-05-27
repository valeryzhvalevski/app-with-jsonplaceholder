import React, { useState, useEffect } from 'react';
import './Images.css';

const Images = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=20')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error(error));
  }, []);

  const deleteImage = (id) => {
    setImages(images.filter(image => image.id !== id));
  };

  return (
    <div>
      <h1>Images</h1>
      <ul className="images-list">
        {images.map(image => (
          <li key={image.id} className="image-item">
            <img src={image.thumbnailUrl} alt={image.title} />
            <button onClick={() => deleteImage(image.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Images;
