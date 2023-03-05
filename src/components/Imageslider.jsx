import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import kitty1 from '../img/kitty1.jpg';
import kitty2 from '../img/kitty2.jpg';
import kitty3 from '../img/kitty3.jpg';
import kitty4 from '../img/kitty4.jpg';

const initialImages = [kitty1, kitty2, kitty3, kitty4];

function Imageslider() {
  const [images, setImages] = useState(initialImages);
  const [currentImage, setCurrentImage] = useState(0);

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

  return (
    <div >
      <div>      
        <img className="absolute top-[480px] left-[144px] rounded-base w-[460px] h-[437px] object-cover" src={images[currentImage]} alt={`Image ${currentImage}`} {...handlers} />
        <button className="absolute top-[880px] left-[177px] w-[98px] h-[98px] bg-[#EC6060] rounded-full" onClick={handlePrevClick} disabled={currentImage === 0}>Prev</button>
        <button className="absolute top-[880px] left-[439px] w-[98px] h-[98px] rounded-full bg-[#60ECCB]" onClick={handleNextClick} disabled={currentImage === images.length - 1}>Next</button>
      </div>
      <div >
        {initialImages.map((image, index) => (
          <div key={index} className={`h-2 w-2 rounded-full mx-2 ${currentImage === index ? 'bg-gray-800' : 'bg-gray-400'}`} onClick={() => setCurrentImage(index)} />
        ))}
      </div>
    </div>
  );
}

export default Imageslider;
