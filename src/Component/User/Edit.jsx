import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Update from "./Update";

const Edit = () => {

    const {id}= useParams()
    let [user,setuser]=useState(null)
    const fetchuser =async()=>{
        try {
            const res =await axios.get('http://localhost:3005/Users');
            const resitem = await res.data.find((elem)=>elem.username===id);
            console.log(resitem);
            setuser(resitem)
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(()=>{
        fetchuser()
    },[])


    return ( <div>{user && <Update user={user}/>}</div> );
}
 
export default Edit;