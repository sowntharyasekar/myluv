import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import "..//admin/background.css"

const User = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch=useDispatch();
  const handlesubmit=(e)=>{
      e.preventDefault();
     
      dispatch(login({
        name:name,
        email:email,
        password:password,
        loggedIn:true,
      }))
   
  }
  return (
    <div>
        <div class="container-fluid image ">
        <div class=" container formwidth1  bg-white">
      <form onSubmit={(e)=>handlesubmit(e)}>
        <h1>User login </h1>
        <div class="form-group">
          <label for="name">Name</label>
          <input
          class="form-control"
            type="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          required

          />
        </div>
        <div class="form-group">
          <label for="name">Email</label>
        <input
        class="form-control"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="name">Password</label>
        <input
        class="form-control"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required

        />
        </div>
        <button type="submit" class="btn btn-dark">Submit</button>
      </form>
      </div>
      </div>
    </div>
  );
};
export default User;
