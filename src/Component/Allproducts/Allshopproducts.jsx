import { useEffect } from "react";
import { setnew ,seterror, setloading } from "../../Redux/Allproducts/AllproductsAction";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Comment from "../Comment/Comment"
import Createcomment from "../Comment/Createcomment"
const Allshopproducts = () => {
  let { allproduct, loading, error } = useSelector(
    (state) => state.allproducts
  );
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchdata = async () => {
    try {
      const res = await axios('http://localhost:3005/Allproducts');
      dispatch(setloading(false));
      dispatch(setnew(res.data));
    } catch (error) {
      console.log(error.message);
      dispatch(seterror(error.message));
      dispatch(setloading(true));
    }
  };
    const ClickHandler = () => {
      navigate("/");
    };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <div className="container p-3 ">
      <h1 className="mb-4">محصولات</h1>
        <div className="row text-center">
          
          {loading && <div className="spinner-border spinner-border-sm"></div>}
          {error && <p className="tetx-danger text-center">{error}</p>}

          {allproduct?.map((elem) => {
            return (
              <>
                <div className="col-6 col-md-3" key={elem.id}>
                  <img className="imgallshop" src={elem.src} alt={elem.alt} />
                  <Link className="card-title producttitle" to={`/Allshopproducts/${elem.title}`}><h5 className="mt-3">{elem.title}</h5></Link>
                  <p className="text-warning">{elem.price} تومان</p>
                </div>
              </>
            );
          })}
          <button className="btn btn-warning w-25 mt-5 m-auto mb-5" onClick={ClickHandler}>برگشت به صفحه اصلی</button>

          
        </div>
      </div>
      <div className="container">
      <h1>نظرات</h1>
        <div className="row">
          <div className="col-md-6">
          <Comment/>
          </div>
          <div className="col-md-6">
            <Createcomment/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allshopproducts;
