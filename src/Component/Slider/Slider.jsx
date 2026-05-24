import { useEffect, useState } from "react";

const Slider = () => {
  const [slider, setslider] = useState([]);

  const fetchslider = async () => {
    const sliderdata = await fetch("http://localhost:3005/Slider");
    const resslider = await sliderdata.json();
    setslider(resslider);
  };
  useEffect(() => {
    fetchslider();
  }, []);

  return (
    <>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-inner">
          {slider &&
            slider.map((elem) => {
              return (
                <div key={elem.id} className="carousel-item active">
                  <img src={elem.src} alt={elem.alt} className="d-block w-100" />
                </div>
              );
            })}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </>
  );
};

export default Slider;
