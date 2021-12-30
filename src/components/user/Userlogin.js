import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import User from "./user";
import Logout from "./Logout";

const Userlogin =()=>{
    const user =useSelector(selectUser);

        return(
            
   <div>
       {user?<Logout/>:<User/>}
   </div>
        );
    
}
export default Userlogin;