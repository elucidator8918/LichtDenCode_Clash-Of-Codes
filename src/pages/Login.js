import { TextField } from "@mui/material";
import React,{useState} from "react";
import axios from 'axios'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/accounts/login/', {
          email: email,
          password: password
      }).then(result => {
          console.log(result)
          const token = result.data.access
          console.log(token)
          axios.get('http://127.0.0.1:8000/accounts/user/', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }).then(result => {
            console.log(result.data)
          }).catch(error => {
            console.log(error)
          })
        
      }).catch(error => {
          alert('service error')
          console.log(error)
      })
  };
  return (
    <div className="relative bg-lavender w-full h-[1117px] overflow-hidden text-center text-2xl text-darkslategray font-roboto">
      <img
        className="absolute top-[47px] left-[631.6px] rounded-large w-[1055.8px] h-[1035.8px]"
        alt=""
        src="../modal.svg"
      />
      <img
        className="absolute top-[705px] left-[872px] w-[95px] h-[95px]"
        alt=""
        src="../ellipse-11.svg"
      />
      <img
        className="absolute top-[679px] left-[854px] w-16 h-[70px]"
        alt=""
        src="../star-2.svg"
      />
      <img
        className="absolute top-[119px] left-[1246px] w-4 h-4"
        alt=""
        src="../ellipse-12.svg"
      />
      <img
        className="absolute top-[459px] left-[689px] w-9 h-9"
        alt=""
        src="../ellipse-23.svg"
      />
      <img
        className="absolute top-[765px] left-[1538px] w-12 h-12"
        alt=""
        src="../ellipse-31.svg"
      />
      <img
        className="absolute top-[55px] left-[1602px] w-16 h-16"
        alt=""
        src="../ellipse-41.svg"
      />
      <div className="absolute top-[660px] left-[1025px] inline-block w-[329px] h-[15px]">
        <i>{`Don’t have an account? Go to `}</i>
        <i className="[text-decoration:underline] font-medium text-plum">
          Register.
        </i>
      </div>
      <img
        className="absolute top-[0px] left-[670.98px] w-[240.04px] h-[151.02px]"
        alt=""
        src="../ellipse-32.svg"
      />
      <img
        className="absolute top-[0px] left-[811.42px] w-[69.07px] h-[8.53px]"
        alt=""
        src="../star-3.svg"
      />
      <img
        className="absolute top-[24.31px] left-[683.95px] w-[170.82px] h-[112.53px] opacity-[0.5]"
        alt=""
        src="../subtract.svg"
      />
      <img
        className="absolute top-[893.89px] left-[826.36px] w-[349.14px] h-[223.11px]"
        alt=""
        src="../ellipse-33.svg"
      />
      <img
        className="absolute top-[922.62px] left-[1041.54px] w-[78.64px] h-[94.98px]"
        alt=""
        src="../star-31.svg"
      />
      <img
        className="absolute top-[1058.73px] left-[845.22px] w-[248.46px] h-[58.27px] opacity-[0.5]"
        alt=""
        src="../subtract1.svg"
      />
      <img
        className="absolute top-[55px] left-[63px] rounded-base w-[545px] h-[1007px] object-cover"
        alt=""
        src="../rectangle-30@2x.png"
      />
      <img
        className="absolute top-[55px] left-[63px] rounded-base w-[545px] h-[1007px]"
        alt=""
        src="../rectangle-31.svg"
      />
      <button className="cursor-pointer [border:none] p-0 bg-darkslateblue-100 absolute top-[577px] left-[1004px] rounded-large shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[382px] h-[57px]" />
      
      


    
    

      <TextField
        className="[border:none] bg-[transparent] absolute top-[371px] left-[1004px]"
        sx={{ width: 382 }}
        color="secondary"
        variant="outlined"
        type="text"
        label="Username/Email"
        size="medium"
        margin="none"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[470px] left-[1004px]"
        sx={{ width: 382 }}
        color="secondary"
        variant="outlined"
        type="password"
        label="Password"
        size="medium"
        margin="none"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="absolute top-[107px] left-[886px] w-[571px] h-[181px]">
        <img
          className="absolute top-[0px] left-[0px] w-[200px] h-[142px] object-cover"
          alt=""
          src="../image-17@2x.png"
        />
        <img
          className="absolute top-[26px] left-[71px] w-[500px] h-[155px] object-cover"
          alt=""
          src="../image-18@2x.png"
        />
      </div>
      <button type="submit"  onClick ={handleSubmit} className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[578px] left-[1002px] w-96 h-14 overflow-hidden">
        <div className="absolute top-[11px] left-[82px] text-3xl font-poppins text-lavender text-center flex items-center justify-center w-[211px] h-8">
          Login
        </div>
      </button>
      
    </div>
  );
};

export default Login;
