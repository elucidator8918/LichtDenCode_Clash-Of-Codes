import { useState, useCallback } from "react";
import { TextField, FormControlLabel, Radio, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [datePickerDateTimePickerValue, setDatePickerDateTimePickerValue] = useState('');
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/form");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // handle registration submission here
    const result = await axios.post('http://127.0.0.1:8000/accounts/register/', {
          
    email: email,
    First_name: firstName,
    Last_name: lastName,
    password: password,
    date_of_birth: datePickerDateTimePickerValue,
    })
      console.log(result)
      console.log(result.data.access)
      const response =await axios.post('http://127.0.0.1:8000/accounts/email-verification/',{},{
              headers: {
                 Authorization: `Bearer ${result.data.access}`
               }
              })
              console.log(response)
      console.log(result)
    
    }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="relative bg-lavender w-auto h-[1117px] overflow-hidden text-left text-2xl text-black font-inter">
        <img
          className="absolute top-[47px] left-[631.6px] rounded-large w-[1055.8px] h-[1035.8px]"
          alt=""
          src="../modal2.svg"
        />
        <img
          className="absolute top-[679px] left-[854px] w-[116.6px] h-[126.2px]"
          alt=""
          src="../group-3.svg"
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
        <i className="absolute top-[698px] left-[956px] inline-block font-roboto text-center w-[407px] h-[15px] text-darkslategray">
          <span>{`By signing up, You agree to our  `}</span>
          <span className="[text-decoration:underline] text-cornflowerblue">{`Terms & Conditions`}</span>
        </i>
        <div className="absolute top-[803px] left-[1002px] text-center inline-block w-[329px] h-[15px] text-darkslategray font-roboto">
          <i>{`Already a member? Go to `}</i>
          <i className="[text-decoration:underline] font-medium text-plum">
            Login.
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
          src="../star-34.svg"
        />
        <img
          className="absolute top-[24.31px] left-[683.95px] w-[170.82px] h-[112.53px] opacity-[0.5]"
          alt=""
          src="../subtract4.svg"
        />
        <img
          className="absolute top-[893.89px] left-[826.36px] w-[349.14px] h-[223.11px]"
          alt=""
          src="../ellipse-33.svg"
        />
        <img
          className="absolute top-[922.62px] left-[1041.54px] w-[78.64px] h-[94.98px]"
          alt=""
          src="../star-35.svg"
        />
        <img
          className="absolute top-[1058.73px] left-[845.22px] w-[248.46px] h-[58.27px] opacity-[0.5]"
          alt=""
          src="../subtract1.svg"
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
        <img
          className="absolute top-[55px] left-[63px] rounded-base w-[545px] h-[1007px] object-cover"
          alt=""
          src="../rectangle-301@2x.png"
        />
        <div className="absolute top-[55px] left-[63px] rounded-base bg-darkslateblue-200 w-[545px] h-[1007px]" />
        <button className="cursor-pointer [border:none] p-0 bg-darkslateblue-100 absolute top-[730px] left-[981px] rounded-large shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[382px] h-[57px]"/>
        <TextField
          className="[border:none] bg-[transparent] absolute top-[288px] left-[981px]"
          sx={{ width: 188 }}
          color="secondary"
          variant="outlined"
          type="text"
          label="First Name"
          size="medium"
          margin="none"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          className="[border:none] bg-[transparent] absolute top-[288px] left-[1175px]"
          sx={{ width: 188 }}
          color="secondary"
          variant="outlined"
          type="text"
          label="Last Name"
          size="medium"
          margin="none"
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          className="[border:none] bg-[transparent] absolute top-[387px] left-[981px]"
          sx={{ width: 382 }}
          color="secondary"
          variant="outlined"
          type="email"
          label="Email"
          size="medium"
          margin="none"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className="[border:none] bg-[transparent] absolute top-[486px] left-[981px]"
          sx={{ width: 382 }}
          color="secondary"
          variant="outlined"
          type="password"
          label="Password"
          size="medium"
          margin="none"
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormControlLabel
          className="absolute top-[567px] left-[1010px]"
          label=""
          control={<Radio color="secondary" size="medium" />}
        />
        <div className="absolute top-[578px] left-[1052px] inline-block w-[87px] h-5">
          Male
        </div>
        <FormControlLabel
          className="absolute top-[567px] left-[1104px]"
          label=""
          control={<Radio color="secondary" size="medium" />}
        />
        <div className="absolute top-[578px] left-[1146px] inline-block w-[87px] h-5">
          Female
        </div>
        <FormControlLabel
          className="absolute top-[566px] left-[1204px]"
          label=""
          control={<Radio color="secondary" size="medium" />}
        />
        <div className="absolute top-[577px] left-[1246px] inline-block w-[87px] h-5">
          Others
        </div>
        <div className="absolute top-[626px] left-[981px]">
        <input
            type="text"
            id="date"
            className="border border-gray-400 p-2  bg-purple-200 w-full"
            value={datePickerDateTimePickerValue}
            onChange={(e) => setDatePickerDateTimePickerValue(e.target.value)}
          />
        </div>
        
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[726px] left-[982px] w-[381px] h-[61px] overflow-hidden" type="submit"
          onClick={handleSubmit}
        >
          <div className="absolute top-[16px] left-[79px] text-3xl font-poppins text-lavender text-center flex items-center justify-center w-[211px] h-8">
            Register
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[801px] left-[1235px] w-[43px] h-[25px] overflow-hidden"
          onClick={onFrameButton1Click}
        />
      </div>
    </LocalizationProvider>
  );
};

export default SignUp;
