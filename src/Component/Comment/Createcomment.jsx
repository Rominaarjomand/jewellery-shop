import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Createuser = () => {
    const navigate= useNavigate()
    const clickback=()=>{
        navigate("../Comment")
    }
    let [username,setusername]=useState("");
    let [email,setemail]=useState("");
    let [commenttext,setcommenttext]=useState("");
    let emailref=useRef("")
    let usernameref=useRef("")
    let commenttextref=useRef("")
    let addcomment=(e)=>{
        e.preventDefault()
        const createcomment=async()=>{
            try {
                let res = await axios.post("http://localhost:3005/Comments",{
                    username:username,
                    email:email,
                    comment:commenttext
                })
                Swal.fire({
                    title: "نظر شما با موفقیت ثبت شد.",
                    icon: "success",
                    draggable: true
                  });
                emailref.current.value="";
                commenttextref.current.value="";
                usernameref.current.value="";
                console.log(res.data);
               
            }
            
            catch (error) {
                console.log(error.message);
                Swal.fire({
                    icon: "error",
                    title: "خطا",
                    text: "نظر شما ثبت نشد!"
                  });
            }
        }
        
        createcomment()
    }
   
    return ( <>


    <div className="form-group">
        <h4 className="mt-4">دیدگاهتان را ثبت کنید.</h4>
        <form action="">
            <div className="mb-4">
                <label htmlFor="username" className="form-check-label fs-4">نام کاربری</label>
                <input type="text" ref={usernameref} className="form-check-input d-block w-100  p-3" onChange={(e)=>setusername(e.target.value)} name="username" id="username" />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="form-check-label fs-4">ایمیل</label>
                <input type="text" ref={emailref}  className="form-check-input d-block w-100  p-3" onChange={(e)=>setemail(e.target.value)} name="email" id="email" />
                
            </div>
            <div className="mb-4">
                <label htmlFor="commenttext" className="form-check-label fs-4">متن پیام</label>
                <textarea ref={commenttextref} type="text" rows="4" cols="50" className="form-control d-block w-100" onChange={(e)=>setcommenttext(e.target.value)} name="text" id="text" />
            </div>

            <button onClick={addcomment}  type="button" className="btn btn-warning mt-4">ثبت پیام</button>
            <button onClick={clickback} className="btn btn-danger mt-4 mx-2">برگشت</button>
        </form>
    </div>
    </> );
}
 
export default Createuser;