import { useDispatch, useSelector } from "react-redux";
import {
  decrementcounter,
  incrementcounter,
} from "../../Redux/Counter/CounterAction";
import "./Counter.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Swal from "sweetalert2";

const Counter = ({ productId }) => {
  const { id } = useParams();
  const showcounter = useSelector(
    (state) => state.counter.counters[productId] || 0
  );
  const showcounterref = useRef();

  const dispatch = useDispatch();
  const [proinfo, setproinfo] = useState([]);

  const fetchallproducts = async () => {
    const prodata = await fetch("http://localhost:3005/Allproducts");
    const resultpro = await prodata.json();
    const proitem = resultpro.find((elem) => elem.title === id);
    setproinfo(proitem);
  };

  const senddata = async () => {
    try {
      if (showcounter > 0) {
        fetch("http://localhost:3005/ShopingCard")
          .then((ress) => ress.json())
          .then((data) => {
            let newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
            axios.post("http://localhost:3005/ShopingCard", {
              id: newId,
              title: proinfo.title,
              src: proinfo.src,
              price: proinfo.price,
              counts: showcounter,
            });
            Swal.fire({
              title: "محصول به سبد خرید اضافه شد",
              icon: "success",
              draggable: true
            });
            
            
          });

      }

      showcounterref.current.innerHTML = 0;
    } catch (error) {
      console.log(error.message);
    }
  };

  
  useEffect(() => {
    fetchallproducts();
  }, []);
  return (
    <>
      <div dir="ltr" className="btn-group  mt-3 counterstyle">
      <button onClick={senddata} className="btn btn-warning">
          افزودن به سبد خرید
        </button>
        <button
          onClick={() => dispatch(incrementcounter(productId))}
          className="btn btn-dark"
        >
          +
        </button>
        <p id="Counterresult" ref={showcounterref} className="mt-2">
          {showcounter}
        </p>
        <button
          onClick={() => dispatch(decrementcounter(productId))}
          className="btn btn-dark"
        >
          -
        </button>
       
      
      </div>
    </>
  );
};

export default Counter;
