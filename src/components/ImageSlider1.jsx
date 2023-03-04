import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSwipeable } from 'react-swipeable';

function Imageslider1() {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    axios.get('/images').then(response => {
      setImages(response.data);
    });
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentImage < images.length - 1) {
        setCurrentImage(currentImage + 1);
      }
    },
    onSwipedRight: () => {
      if (currentImage > 0) {
        setCurrentImage(currentImage - 1);
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const handleNextClick = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  const handleSwipeRight = () => {
    const currentImageUrl = images[currentImage];
    // make a POST request to a server endpoint to store the current image that was swiped right
    axios.post('/swiped-right', { imageUrl: currentImageUrl }).then(response => {
      // do something with the response
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center">
        <button className="mr-4 bg-gray-300 px-2 py-1 rounded-lg" onClick={handlePrevClick} disabled={currentImage === 0}>Prev</button>
        <img className="max-w-xs md:max-w-md" src={images[currentImage]} alt={`Image ${currentImage}`} {...handlers} onSwipedRight={handleSwipeRight} />
        <button className="ml-4 bg-gray-300 px-2 py-1 rounded-lg" onClick={handleNextClick} disabled={currentImage === images.length - 1}>Next</button>
      </div>
      <div className="flex mt-4">
        {images.map((image, index) => (
          <div key={index} className={`h-2 w-2 rounded-full mx-2 ${currentImage === index ? 'bg-gray-800' : 'bg-gray-400'}`} onClick={() => setCurrentImage(index)} />
        ))}
      </div>
    </div>
  );
}

export default Imageslider1;
