import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Comment.css"

const Allcomment = () => {
    const [comment,setcomment]= useState([]);
    const navigate= useNavigate();
    
    const fetchcomment =async()=>{
        const commentdata= await fetch(`http://localhost:3005/Comments`);
        const rescomment= await commentdata.json();
        setcomment(rescomment);
        }
    useEffect(()=>{
        fetchcomment();
    },[])

    return ( <>
    <div className="container p-4 ">
        <div className="row justify-content-center">
            
          <h4>نظرات کاربران</h4>
            {comment?.map((elem)=>{
                return(
                    <div className="border p-2 m-1" key={elem.id}>
                        <img src="../src/Component/Comment/Commentimage/usericon.png" className="usericonstyle" alt="usericon" />
                        <Link className="userstyle" to={`/User/${elem.username}`}>نام کاربری: {elem.username}</Link>
                        <br />
                        <p>{elem.comment}</p>
                    </div>
                )
            })}
        </div>
        

    </div>
    </> );
}
 
export default Allcomment;