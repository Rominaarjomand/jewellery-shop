import { useDispatch, useSelector } from "react-redux";
import { seterror, setloading, setnew } from "../../Redux/Allproducts/AllproductsAction";
import { useEffect } from "react";
import axios from "axios";
import "./Allproducts.css"
import { Link, useNavigate } from "react-router";
import Counter from "../Counter/Counter";

const Newproduct = () => {

let { allproduct, loading, error } = useSelector((state) => state.allproducts);
let dispatch = useDispatch();
const navigate= useNavigate();
const fetchnewproduct = async () => {
    try {
      const res = await axios(`http://localhost:3005/Allproducts?
        _sort=id&_order=desc&_limit=4`);
      dispatch(setloading(false));
      dispatch(setnew(res.data));
    } catch (error) {
      console.log(error.message);
      dispatch(seterror(error.message));
      dispatch(setloading(true));
    }
    
  };
const ClickHandler=()=>{
  navigate("/Allshopproducts");
}
 useEffect(() => {
    fetchnewproduct();
  }, []);




    return ( <>
    
    <div className="text-center p-2">
        {loading && <div className="spinner-border spinner-border-sm"></div>}
      </div>
      {error && <p className="tetx-danger text-center">{error}</p>}

        <div className="container newproductsbox p-5">
            <div className="row">
              <div className="col-12 col-md-4 text-center">
                <h3 className="text-center mt-md-5 mb-4">محصولات جدید</h3>
                <button onClick={ClickHandler} className="btn btn-success mt-md-5 mb-5">مشاهده همه</button>
              </div>
            {allproduct?.map((elem) => {
                      return (
                        <div className="col-6 col-md-2 p-3 newprd text-center" key={elem.id}>
                            <img className="w-100" src={elem.src} alt={elem.alt} />
                            <Link className="card-title  producttitle" to={`/Allproducts/${elem.title}`}><p className="mt-3">{elem.title}</p></Link>
                            <span className="text-danger">{elem.price} تومان</span>
                            
                        </div>
                      );
                    })}
            </div>
        </div>

    
    
    
    </> );
}
 
export default Newproduct;