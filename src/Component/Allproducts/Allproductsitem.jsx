import { useEffect, useState } from "react";
import {  useParams } from "react-router";
import "./Allproducts.css"
import Counter from "../Counter/Counter";



export const Allproductsitem = () => {
  
    const { id } = useParams();
    const [info, setinfo] = useState([]);
  

    const fetchproductitem = async () => {
    const data = await fetch("http://localhost:3005/Allproducts");
    const res = await data.json();
    const productitem = res.find((elem)=> elem.title===id);
    setinfo(productitem);
  };

  useEffect(() => {
    fetchproductitem();
  }, []);



    return ( <>
      {info && (
          <div className="container">
            <div className="row pt-5 mb-5">
                <div className="col-12 col-md-4">
                <img src={info.src} className="productitemstyle" alt={info.alt} />
                </div>
                <div className="col-12 col-md-8">
                <h3>{info.title}</h3>
                <h4 className="text-warning">{(parseFloat(info.price)).toLocaleString("fa-IR")} تومان</h4>
                <Counter/>
                <hr className="mt-3 mb-3"/>
                <p className="mt-4">{info.description}</p>
                </div>
            </div>
          </div>
        )}
       </>);
}
 
export default Allproductsitem;