import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Createuser = () => {
    const navigate= useNavigate()
    const clickback=()=>{
        navigate("../User")
    }
    let [username,setusername]=useState("");
    let [email,setemail]=useState("");
    let [password,setpassword]=useState("");
    let emailref=useRef("")
        let passwordref=useRef("")
        let usernameref=useRef("")
    let addperson=(e)=>{
        e.preventDefault()
        const createperson=async()=>{
            try {
                let res = await axios.post("http://localhost:3005/Users",{
                    username:username,
                    email:email,
                    password:password
                })
                emailref.current.value="";
                passwordref.current.value="";
                usernameref.current.value="";
                console.log(res.data);
            }
            
            catch (error) {
                console.log(error.message);
            }
        }
        
        createperson()
    }
   
    return ( <>
    <div className="container">
        <div className="row ">
            
            <div className="col-7 border p-3 mt-5 mb-5  shadow-md form-group">
            <h3>ثبت نام کاربر</h3>
            
            <form action="#">
            <div className="mb-4">
                <label htmlFor="username" className="form-check-label fs-4">نام کاربری</label>
                <input type="text" ref={usernameref} className="d-block w-100  form-check-input p-3" onChange={(e)=>setusername(e.target.value)} name="username" id="username" />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="form-check-label fs-4">ایمیل</label>
                <input type="text" ref={emailref} className="d-block w-100 form-check-input p-3" onChange={(e)=>setemail(e.target.value)} name="email" id="email" />
                
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="form-check-label fs-4">پسورد</label>
                <input type="text"  ref={passwordref} className="d-block w-100  form-check-input p-3" onChange={(e)=>setpassword(e.target.value)} name="password" id="password" />
                
            </div>
            <button onClick={addperson}  type="button" className="btn btn-warning mt-4">ثبت نام</button>
            <button onClick={clickback} className="btn btn-danger mt-4 mx-2">برگشت</button>
        </form>
            </div>
            <div className="col-5 mt-5">
                <h3>کاربران سرمایه ما هستند</h3>
                <p className="text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            </div>
        </div>
    </div>
    
    </> );
}
 
export default Createuser;