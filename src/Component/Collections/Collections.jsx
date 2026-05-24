import { useEffect, useState } from "react";
import "./Collections.css";

const Collections = () => {
  const [collection, setcollection] = useState([]);

  const fetchcollections = async () => {
    const collectiondata = await fetch("http://localhost:3005/Collection");
    const rescollection = await collectiondata.json();
    setcollection(rescollection);
  };
  useEffect(() => {
    fetchcollections();
  }, []);

  return (
    <div>
      <h3 className="text-center mt-5 mb-4">کالکشن‌های روما</h3>
      <div className="d-flex flex-wrap justify-content-center mb-5">
      {collection?.map((elem) => {
          return (
            <div key={elem.id}>
            <a href="/Products">
              <div className=" card collectionscardstyles me-2" >
                <img
                  className="card-img-top"
                  src={elem.src}
                  alt={elem.alt}
                />
                <div className="card-img-overlay">
                  <h4 className="card-title text-light">{elem.title}</h4>
                </div>
              </div>
              </a>
            </div>
          );
        })}
</div>


    </div>
  );
};

export default Collections;
