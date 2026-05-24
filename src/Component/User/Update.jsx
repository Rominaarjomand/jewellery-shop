import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = ({user}) => {
    
    console.log(user)
    let [email,setemail]=useState("")
    let [password,setpassword]=useState("")
    let [username,setusername]=useState("")
    let emailref=useRef("")
    let passwordref=useRef("")
    let usernameref=useRef("")
    let navigate=useNavigate()
    console.log(user.email, user.password, user.username)

    const clickback=()=>{
        navigate("../User")
    }

    const eventhandler=(e)=>{
        e.preventDefault()
        const update = async()=>{
            try {
                const res = await axios.put(`http://localhost:3005/Users/${user.id}`,{
                    email:email,
                    password:password,
                    username:username
                })
                emailref.current.value="";
                passwordref.current.value="";
                usernameref.current.value="";
            } catch (error) {
                console.log(error.message);
            }
        }
        update()
    }

    useEffect(()=>{
        setemail(user.email);
        setusername(user.username);
        setpassword(user.password);

    },[])
    return ( 
        <div className="border offset-3 p-3 col-6 mt-5 me-auto">
        <form action="#" onSubmit={(e)=>eventhandler(e)}>
            <div className="mb-4">
                <label htmlFor="username"  className=" fs-4">نام کاربری:</label>
                <input type="text" ref={usernameref} className="d-block w-100" onChange={(e)=>setusername(e.target.value)} name="username" id="username" value={username} />
            </div>

            <div className="mb-4">
                <label htmlFor="email"  className=" fs-4">ایمیل:</label>
                <input type="text" ref={emailref} className="d-block w-100" onChange={(e)=>setemail(e.target.value)} name="email" id="email" value={email}/>
                
            </div>
            <div className="mb-4">
                <label htmlFor="password"  className=" fs-4">پسورد:</label>
                <input type="text" ref={passwordref} className="d-block w-100" onChange={(e)=>setpassword(e.target.value)} name="password" id="password" value={password} />
                
            </div>
            <button type="submit" className="btn btn-warning mt-4">ویرایش</button>
            <button onClick={clickback}  className="btn btn-danger mt-4 mx-2">برگشت</button>
        </form>
    </div>
    );
}
 
export default Update;