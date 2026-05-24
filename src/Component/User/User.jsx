
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./User.css"

const User = () => {
    const [user,setuser]= useState([]);
    const navigate= useNavigate();
    const clickhandler=()=>{
        navigate('/Createuser')
    }
    const fetchuser =async()=>{
        const userdata= await fetch("http://localhost:3005/Users");
        const resuser= await userdata.json();
        setuser(resuser);
        }
    useEffect(()=>{
        fetchuser();
    },[])

    return ( <>
    <div className="container  p-4 mt-5 mb-5 text-center">
    <h4>تمامی کاربران</h4>
        <div className="row justify-content-center">
            {user?.map((elem)=>{
                return(
                    <div className="col-4 border p-2 m-1" key={elem.id}>
                        <Link className="userstyle" to={`/User/${elem.username}`}>نام کاربری: {elem.username}</Link>
                        <hr />
                        <i>{elem.email}</i>
                    </div>
                )
            })}
        </div>
        <button className="btn btn-dark mb-3 mt-5" onClick={clickhandler} > ثبت نام کاربر جدید</button>

    </div>
    </> );
}
 
export default User;