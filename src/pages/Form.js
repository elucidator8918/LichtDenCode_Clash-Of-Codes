import {
  TextField,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [hometown, setHomeTown] = useState('');
  const [workplace, setWorkplace] = useState('');
  const [interests, setInterests] = useState([]);
  const [sex, setSex] = useState('');
  const [smoke,setSmoke] =useState('');

  const handleOthers =(e)=>{
    setInterests(interests.concat(e.target.value))
  }
  const handleSubmit =()=>{
    axios.patch( `http://127.0.0.1:8000/accounts/user/${localStorage.getItem('currentUser')}/`,{

          hometown:hometown,
          workplace:workplace,
          SEX:sex,
          smoke:smoke,
          interest:interests,

    },
          {headers:{ Authorization:`Bearer ${localStorage.getItem('token')}` } }
        ).then(res=>{console.log(res)
    
        }).catch(err =>{console.log(err)});
        navigate("/ProfilePage");

  }
  return (
    <div className="relative bg-lavender w-full h-[1117px] overflow-hidden text-left text-lg text-black font-poppins">
      <img
        className="absolute top-[47px] left-[631.6px] rounded-large w-[1055.8px] h-[1035.8px]"
        alt=""
        src="../modal1.svg"
      />
      <img
        className="absolute top-[705px] left-[872px] w-[95px] h-[95px]"
        alt=""
        src="../ellipse-11.svg"
      />
      <img
        className="absolute top-[679px] left-[854px] w-16 h-[70px]"
        alt=""
        src="../star-21.svg"
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
      <img
        className="absolute top-[0px] left-[670.98px] w-[240.04px] h-[151.02px]"
        alt=""
        src="../ellipse-32.svg"
      />
      <img
        className="absolute top-[0px] left-[811.42px] w-[69.07px] h-[8.53px]"
        alt=""
        src="../star-32.svg"
      />
      <img
        className="absolute top-[24.31px] left-[683.95px] w-[170.82px] h-[112.53px] opacity-[0.5]"
        alt=""
        src="../subtract2.svg"
      />
      <img
        className="absolute top-[893.89px] left-[826.36px] w-[349.14px] h-[223.11px]"
        alt=""
        src="../ellipse-36.svg"
      />
      <img
        className="absolute top-[922.62px] left-[1041.54px] w-[78.64px] h-[94.98px]"
        alt=""
        src="../star-33.svg"
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
      <button className="cursor-pointer [border:none] p-0 bg-darkslateblue-100 absolute top-[807px] left-[981px] rounded-large shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[382px] h-[57px]" onClick={handleSubmit} />
      <div className="absolute top-[819px] left-[1061px] text-3xl text-lavender text-center flex items-center justify-center w-[211px] h-8">
        Submit
      </div>
      <TextField
        className="[border:none] bg-[transparent] absolute top-[351px] left-[981px]"
        sx={{ width: 382 }}
        color="secondary"
        variant="outlined"
        type="text"
        label="Where is your hometown?"
        onChange ={(e) => setHomeTown(e.target.value)}
        size="medium"
        margin="none"
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[442px] left-[981px]"
        sx={{ width: 382 }}
        color="secondary"
        variant="outlined"
        type="text"
        onChange={(e) => setWorkplace(e.target.value)}

        label="Where is your workplace?"
        size="medium"
        margin="none"
      />
      <div className="absolute top-[586px] left-[984px] text-3xl inline-block w-44">
        Interests
      </div>
      <div className="absolute top-[631px] left-[1023px] inline-block w-44">
        Dancing
      </div>
      <div className="absolute top-[693px] left-[1023px] inline-block w-44">
        Sketching
      </div>
      <div className="absolute top-[632px] left-[1165px] inline-block w-44">
        Sports
      </div>
      <div className="absolute top-[694px] left-[1165px] inline-block w-44">
        Reading
      </div>
      <div className="absolute top-[631px] left-[1301px] inline-block w-44">
        Singing
      </div>
      <FormControlLabel
        className="absolute top-[620px] left-[981px]"
        label=""
        control={<Checkbox color="secondary" size="medium" onClick={()=>setInterests(interests.concat('Dancing'))}/>}
      />
      <FormControlLabel
        className="absolute top-[682px] left-[981px]"
        label=""
        control={<Checkbox color="secondary" size="medium" onClick={()=>setInterests(interests.concat('Sketching'))}/>}
      />
      <FormControlLabel
        className="absolute top-[620px] left-[1118px]"
        label=""
        control={<Checkbox color="secondary" size="medium" onClick={()=>setInterests(interests.concat('Sports'))} />}
      />
      <FormControlLabel
        className="absolute top-[682px] left-[1118px]"
        label=""
        control={<Checkbox color="secondary" size="medium" onClick={()=>setInterests(interests.concat('Reading'))}/>}
      />
      <FormControlLabel
        className="absolute top-[620px] left-[1254px]"
        label=""
        control={<Checkbox color="secondary" size="medium" onClick={()=>setInterests(interests.concat('Singing'))}/>}
      />
      <FormControl
        className="absolute top-[516px] left-[981px]"
        sx={{ width: 180 }}
        variant="outlined"
      >
        <InputLabel color="secondary">Educational Level</InputLabel>
        <Select color="secondary" size="medium" label="Educational Level">
          <MenuItem value="Below 10th">Below 10th</MenuItem>
          <MenuItem value="Till 12th">Till 12th</MenuItem>
          <MenuItem value="Undergraduate">Undergraduate</MenuItem>
          <MenuItem value="Maters">Maters</MenuItem>
          <MenuItem value="P.H.D">P.H.D</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
      <FormControl
        className="absolute top-[733px] left-[981px]"
        sx={{ width: 180 }}
        variant="outlined"
      >
        <InputLabel color="secondary">Sexual Preference</InputLabel>
        <Select color="secondary" size="medium" label="Sexual Preference" onChange ={(e) => setSex(e.target.value)}>
          <MenuItem value="Male (M)">Male (M)</MenuItem>
          <MenuItem value="Female (F)">Female (F)</MenuItem>
          <MenuItem value="Others">Others</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
      <FormControl
        className="absolute top-[516px] left-[1183px]"
        sx={{ width: 180 }}
        variant="outlined"
      >
        <InputLabel color="secondary">Do you drink?</InputLabel>
        <Select color="secondary" size="medium" label="Do you drink?">
          <MenuItem value="Never (N)">Never (N)</MenuItem>
          <MenuItem value="Often (O)">Often (O)</MenuItem>
          <MenuItem value="Sometimes (S)">Sometimes (S)</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
      <FormControl
        className="absolute top-[733px] left-[1183px]"
        sx={{ width: 180 }}
        variant="outlined"
      >
        <InputLabel color="secondary">Do you smoke?</InputLabel>
        <Select color="secondary" size="medium" label="Do you smoke?" onChange={(e)=>setSmoke(e.target.value)}>
          <MenuItem value="Never (N)">Never (N)</MenuItem>
          <MenuItem value="Often (O)">Often (O)</MenuItem>
          <MenuItem value="Sometimes (S)">Sometimes (S)</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
      <TextField
        className="[border:none] bg-[transparent] absolute top-[667px] left-[1266px]"
        sx={{ width: 97 }}
        color="secondary"
        variant="standard"
        type="text"
        label="Others"
        size="medium"
        margin="none"
        onChange={handleOthers}
      />
      <div className="absolute top-[257px] left-[979px] text-3xl inline-block w-96 h-6">
        Complete your profile and find your perfect match!
      </div>
    </div>
  );
};

export default Form;
