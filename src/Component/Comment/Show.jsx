import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

const Show = () => {
  const { id } = useParams();
  
  const [info, setinfo] = useState([]);
  const navigate =  useNavigate()
  

  const fetchuser2 = async () => {
    const data = await fetch("http://localhost:3005/Users");
    const res = await data.json();
    const useritem = res.find((elem)=> elem.username===id);
    setinfo(useritem);
  };
  useEffect(() => {
    fetchuser2();
  }, []);

  const deletebtn=async()=>{
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          const res = axios.delete(`http://localhost:3005/Users/${info.id}`,{
            method:"DELETE",
            
          });
          navigate('../User')
          // console.log(res.data)
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error"
          });
        }
      });
  }


  const editbtn=async()=>{
    console.log("Edit page")
    navigate(`/user/edit/${id}`)
    
  }

  return (
    <>
     {info && (
       <div className="col-4 p-2 m-1">
       <h3>نام کاربری: {info.username}</h3>
       <hr />
       <i>{info.email}</i>
       <br />
       <button onClick={deletebtn} className="btn btn-danger mt-3">حذف کاربر</button>
       <button onClick={editbtn}  className="btn btn-success mt-3 mx-2">ویرایش کاربر</button>
     </div>
     )}
    </>
  );
};

export default Show;
