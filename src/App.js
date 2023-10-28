import './App.css';
import {useState,useEffect} from "react";

function loadBootstrap() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
  document.head.appendChild(link);

  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
  document.head.appendChild(script);
}
function App() {
  const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  ];
  const[image,setImage]=useState(0);
  useEffect(() => {
    // Load Bootstrap CSS and JavaScript files when the component mounts
    loadBootstrap();
  }, []);
  function nextSlide() {
    setImage(image === images.length - 1 ? 0 : image + 1);
  }

  function prevSlide() {
    setImage(image === 0 ? images.length - 1 : image - 1);
  }

  return(
    <div>
      <h1>My first react project: A Carousel of random images</h1>
      
      <div class="carousel-inner">
      {images.map(
          (imagee, index) =>
            image === index && (
              <div key={imagee} className="carousel-item-active">
                <img src={imagee} alt="images" />
              </div>
            )
        )}
  </div>

  <button class="carousel-control-prev " type="button" data-bs-target="#demo" data-bs-slide="prev"onClick={prevSlide}>
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next"onClick={nextSlide}>
    <span class="carousel-control-next-icon"></span>
  </button>
      
    </div>
  );
}

export default App;
