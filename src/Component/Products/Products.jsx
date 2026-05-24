import { useEffect } from "react";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import {
  seterror,
  setloading,
  setproduct,
} from "../../Redux/Products/ProductsAction";
import axios from "axios";
import { Link } from "react-router";

const Products = () => {
  let { product, loading, error } = useSelector((state) => state.products);
  let dispatch = useDispatch();

  const fetchproducts = async () => {
    try {
      const res = await axios("http://localhost:3005/Products");
      dispatch(setloading(false));
      dispatch(setproduct(res.data));
    } catch (error) {
      console.log(error.message);
      dispatch(seterror(error.message));
      dispatch(setloading(true));
    }
  };

  useEffect(() => {
    fetchproducts();
  }, []);

  return (
    <>
      <div className="text-center ">
        {loading && <div className="spinner-border spinner-border-sm"></div>}
      </div>
      {error && <p className="tetx-danger text-center">{error}</p>}

      <div>
        <h3 className="text-center mt-5 mb-4">دسته‌بندی روما</h3>
        <div className="d-flex flex-wrap justify-content-center mb-5">
          {product?.map((elem) => {
            return (
              <div key={elem.id}>
                <Link to={`/Collections/${elem.title}`}>
                  <div className="card cardstyles me-2">
                    <img
                      className="card-img-top"
                      src={elem.src}
                      alt={elem.src}
                    />
                    <div className="card-img-overlay">
                    <Link className="card-title text-light producttitle" to={`/Collections/${elem.title}`}><h4>{elem.title}</h4></Link>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
