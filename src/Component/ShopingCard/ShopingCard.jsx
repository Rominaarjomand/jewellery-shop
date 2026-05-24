import axios from "axios";
import mathSum from "math-sum";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from 'sweetalert2'
import "./ShopingCard.css"

const ShopingCard = () => {
    const [addedproducts,setaddedproducts]= useState([])

    let fetchShopcard = async()=>{
        const shopcardData = await fetch("http://localhost:3005/ShopingCard")
        const resshopCard = await shopcardData.json()
        setaddedproducts(resshopCard || [])
      }
    
    const deletebtn=async(productId)=>{
     try {
       console.log("deleting product",productId);
       await axios.delete(`http://localhost:3005/ShopingCard/${productId}`)
       fetchShopcard();

     } catch (error) {
      console.error("خطا در حذف محصول",error);
     }
    }

    useEffect(()=>{
        fetchShopcard();
    },[])

    return ( <>
    <div className="container p-4">
        <div className="row">
            <div className="col-12 col-md-8  mt-5">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">کد محصول</th>
      <th scope="col">نام محصول</th>
      <th scope="col">تصویر محصول</th>
      <th scope="col">قیمت</th>
      <th scope="col">تعداد</th>
      <th scope="col">جمع کل</th>
      <th scope="col">حذف</th>
    </tr>
  </thead>
  <tbody>

      {addedproducts?.map((elem)=>{
       
        return(
            <tr key={elem.id}>
            <th scope="row">{elem.id}</th>
            <td><img src={elem.src} className="shopcardimgstyle" alt="" /></td>
            <td>{elem.title}</td>
            <td>{(parseFloat(elem.price)).toLocaleString("fa-IR")} تومان</td>
            <td>{elem.counts}</td>
            <td>{(parseFloat(elem.price) * parseFloat(elem.counts)).toLocaleString("fa-IR")} تومان</td>
            <td>
              <button onClick={()=>deletebtn(elem.id)} className="btn btn-danger text-white">-</button>
            </td>
            </tr>
            
        )
        
      })}
    
  </tbody>
</table>
            </div>
            <div className="col-12 col-md-4 p-4 border">
              
              <h3 className="mb-4">جمع کل سبد خرید</h3>
              
              <p>
                جمع کل:
                {addedproducts.reduce((sum, product) =>
                  sum + (Number(product.price) * Number(product.counts)), 0
                ).toLocaleString("fa-IR")} تومان
              </p>
              <hr />
              <p>هزینه ارسال&nbsp;
                <b>رایگان&nbsp;
                  </b>
                می‌باشد.
              </p>
              <hr />
              <h5 className="d-inline">مجموع:</h5>
              <h4 className="text-warning d-inline">{addedproducts.reduce((sum, product) =>
                  sum + (Number(product.price) * Number(product.counts)), 0
                ).toLocaleString("fa-IR")} تومان</h4>
              <button className="btn btn-warning w-100 mt-5 border-4">ادامه پرداخت</button>
            </div>
        </div>
    </div>
    </> );
}
 
export default ShopingCard;