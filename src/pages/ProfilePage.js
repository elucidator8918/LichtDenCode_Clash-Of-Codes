import  React,{ useCallback,useState } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const ProfilePage = () => {
  const navigate = useNavigate();
  const[bio,setBio] = useState('')
  const[avg,setAvg] = useState(0)
  const[pic,setPic]= useState(".../public/rectangle-58@2x.png")
  
  const [selectedFile, setSelectedFile] = React.useState('');
    const handleFileSelect = (event) => {
      setSelectedFile(event.target.files[0])
    }
  
    const handleSubmit = async(event) => {
      event.preventDefault()
      const formData = new FormData();
      formData.append("profile_pic", selectedFile);
      try {
        console.log(localStorage.getItem('token'))
       axios.patch( `http://127.0.0.1:8000/accounts/user/${localStorage.getItem('currentUser')}/`,formData,
          {headers:{"Content-Type": "multipart/form-data",
                     Authorization:`Bearer ${localStorage.getItem('token')}` } }
        ).then(res=>{console.log(res)
          setPic(res.data.profile_pic)
        }).catch(err =>{console.log(err)});
      } catch(error) {
        console.log(error)
      }
    }


    const handleBio=()=>{
    console.log(bio)
    axios.post('http://127.0.0.1:8000/sentimental/',{
      sentence:bio,
    }).then(result=>{
      setAvg(result.data.avg[0])
      localStorage.setItem('bio', bio)
      console.log(result)
    }).catch(err =>{
      console.log(err)
    })
  }

  const onFrameButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="relative bg-lavender w-full h-[1024px] overflow-hidden text-left text-xl text-gray-200 font-poppins">
      <div className="absolute top-[163px] left-[135px] bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] w-[1181px] h-[849px]" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[67px] left-[366px] text-3xl font-poppins text-plum text-center flex items-center justify-center w-[211px] h-8">
        About us
      </button>
      <div className="absolute top-[67px] left-[514px] text-3xl text-plum text-center flex items-center justify-center w-[211px] h-8">
        Home
      </div>
      <div className="absolute top-[67px] left-[680px] text-3xl text-plum text-center flex items-center justify-center w-[211px] h-8">
        Matching Party
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[67px] left-[846px] text-3xl font-poppins text-plum text-center flex items-center justify-center w-[211px] h-8">
        Contact
      </button>
      <img
        className="absolute top-[12px] left-[21px] w-[150px] h-[150px] object-cover"
        alt=""
        src="../hearthive-1-1@2x.png"
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[67px] left-[574px] w-[95px] h-[37px] overflow-hidden"
        onClick={onFrameButtonClick}
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[58px] left-[698px] w-[170px] h-[46px] overflow-hidden"
        onClick={onFrameButton1Click}
      />
      <img
        className="absolute top-[58px] left-[1333px] w-[60px] h-[60px] object-cover"
        alt=""
        src="../ellipse-23@2x.png"
      />
      <div className="absolute top-[839px] text-black left-[551px] text-lg text-center inline-block w-[107px] h-[22px]">
        Photography
      </div>
      <div className="absolute top-[839px] text-black left-[643px] text-lg text-center inline-block w-[107px] h-[22px]">
        Trekking
      </div>
      <div className="absolute top-[839px] text-black left-[733px] text-lg text-center inline-block w-[107px] h-[22px]">
        Scuba Diving
      </div>
      <div className="absolute top-[839px] text-black left-[846px] text-lg text-center inline-block w-[107px] h-[22px]">
        Dancing
      </div>
      <div className="absolute top-[188px] text-black left-[559px] w-[76px] h-0" />
      <div className="absolute top-[262px] left-[566px] text-gray-900 inline-block w-[153px] h-[49px]">
        College
      </div>
      <div className="absolute top-[262px] left-[719px] text-gray-900 inline-block w-[573px] h-[49px]">
        DJ Sanghvi College Of Engineering
        <h1 className="absolute left-[400px]">{avg}</h1>
      </div>
      <div className="absolute top-[296px] left-[566px] text-gray-900 inline-block w-[153px] h-[49px]">
        Current City
      </div>
      <div className="absolute top-[328px] left-[566px] text-gray-900 inline-block w-[153px] h-[49px]">
        Hometown
      </div>
      <div className="absolute top-[328px] left-[719px] text-gray-900 inline-block w-[573px] h-[49px]">
        Mumbai, India
      </div>
      <div className="absolute top-[295px] left-[719px] text-gray-900 inline-block w-[573px] h-[49px]">
        Mumbai, India
      </div>
      <img
        className="absolute top-[182px] left-[155px] rounded-large w-[360px] h-[789px] object-cover"
        alt=""
        src={pic}
      />
      <div className="absolute top-[208px] left-[559px] text-3xl text-[#242757] font-extrabold inline-block w-[507px] h-[49px]">
        Kashish Gandhi
      </div>
      <div className="absolute top-[762px] left-[561px] text-[#242757] text-3xl font-extrabold inline-block w-[507px] h-[49px]">
        Interests
      </div>
      <div className="absolute top-[762px] left-[1015px] text-[#242757] text-3xl font-extrabold inline-block w-[507px] h-[49px]">
        Habits
      </div>
      <div className="absolute top-[358px] left-[566px] text-gray-900 inline-block w-[153px] h-[49px]">
        Date of Birth
      </div>
      <div className="absolute top-[358px] left-[719px] text-gray-900 inline-block w-[573px] h-[49px]">
        06/11/2003
      </div>
      <div className="absolute top-[389px] left-[566px] text-gray-900 inline-block w-[153px] h-[49px]">
        Gender
      </div>
      <div className="absolute top-[389px] left-[719px] text-gray-900 inline-block w-[573px] h-[49px]">
        Female
      </div>
      <div className="absolute top-[420px] left-[566px] text-gray-900 inline-block w-[153px] h-[49px]">
        Instagram
      </div>
      <div className="absolute top-[420px] left-[719px] text-gray-900 inline-block w-[573px] h-[49px]">
        @kashish_p_gandhi
      </div>
      <div className="absolute top-[451px] left-[566px] text-gray-900 inline-block w-[153px] h-[49px]">
        Sexual Preference
      </div>
      <div className="absolute top-[451px] left-[719px] text-gray-900 inline-block w-[573px] h-[49px]">
        Male (M)
      </div>
      <div className="absolute top-[482px] left-[566px] text-gray-900 inline-block w-[153px] h-[49px]">
        Mobile
      </div>
      <div className="absolute top-[482px] left-[719px] text-gray-900 inline-block w-[573px] h-[49px]">
        9619121679
      </div>
      <div className="absolute top-[513px] left-[566px] text-gray-900 inline-block w-[153px] h-[49px]">
        Status
      </div>
      <div className="absolute top-[513px] left-[719px] text-gray-900 inline-block w-[573px] h-[49px]">
        Matched
      </div>
      <img
        className="absolute h-[0.98%] w-[2.78%] top-[91.41%] right-[76.94%] bottom-[7.62%] left-[20.28%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../-icon-options-horizontal.svg"
      />
      <img
        className="absolute h-[0.98%] w-[2.78%] top-[91.41%] right-[73.82%] bottom-[7.62%] left-[23.4%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../-icon-options-horizontal.svg"
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[1.95%] w-[1.39%] top-[58.79%]  bottom-[39.26%] left-[30.68%]">
        <img
          className="absolute h-full w-full top-[0%] right-[50px] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../vector.svg"
        />
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[1.95%] w-[1.39%] top-[58.79%] right-[87.43%] bottom-[39.26%] left-[11.18%]">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../vector1.svg"
        />
      
      <input type="file" className=" absolute bottom-[400px] border border-gray-400 p-2  rounded-lg w-auto placeholder-black text-black" 
        name="upload_file" 
        onChange={handleFileSelect} />
        <div className='pt-4 absolute bottom-[340px]'>
        <button type="submit" className=" bg-[#A68ED4] text-white py-2 px-4 rounded" onClick={handleSubmit}>Profile Picture</button>
        </div>
        <img
          className="absolute top-[18px] left-[21px] w-3.5 h-2.5"
          alt=""
          src="../ellipse-17.svg"
        />
        <img
          className="absolute h-[30.3%] w-[36.12%] top-[69.7%] right-[0%] bottom-[0%] left-[63.88%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../-icon-add.svg"
        />
      </button>
      <img
        className="absolute top-[793px] left-[578px] w-[50px] h-[53.95px] object-cover"
        alt=""
        src="../image-78@2x.png"
      />
      <img
        className="absolute top-[799px] left-[677px] w-10 h-10 object-cover"
        alt=""
        src="../image-79@2x.png"
      />
      <img
        className="absolute top-[793px] left-[760px] w-[50px] h-[50px] object-cover"
        alt=""
        src="../image-80@2x.png"
      />
      <img
        className="absolute top-[794px] left-[875px] w-[50px] h-[50px] object-cover"
        alt=""
        src="../image-81@2x.png"
      />
      <div className="absolute top-[904px] text-black left-[549px] text-lg text-center inline-block w-[107px] h-[22px]">
        Music
      </div>
      <div className="absolute top-[904px] text-black left-[641px] text-lg text-center inline-block w-[107px] h-[22px]">
        Vlogging
      </div>
      <div className="absolute top-[904px] text-black left-[731px] text-lg text-center inline-block w-[107px] h-[22px]">
        Kayaking
      </div>
      <div className="absolute top-[904px] text-black left-[844px] text-lg text-center inline-block w-[107px] h-[22px]">
        Star Gazing
      </div>
      <img
        className="absolute top-[858px] left-[566px] w-[65px] h-[46.76px] object-cover"
        alt=""
        src="../image-82@2x.png"
      />
      <img
        className="absolute top-[864px] left-[675px] w-10 h-10 object-cover"
        alt=""
        src="../image-83@2x.png"
      />
      <img
        className="absolute top-[858px] left-[758px] w-[50px] h-[50px] object-cover"
        alt=""
        src="../image-84@2x.png"
      />
      <img
        className="absolute top-[861px] left-[875px] w-[45px] h-[45px] object-cover"
        alt=""
        src="../image-85@2x.png"
      />
      <img
        className="absolute top-[208px] left-[734px] w-[30px] h-[30px] object-cover"
        alt=""
        src="../verified-account@2x.png"
      />
      <div className="absolute top-[682px] left-[566px] rounded-large bg-plum shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] w-48 h-[42px]" />
      <div className="absolute top-[687px] left-[555px] text-2xl text-lavender text-center flex items-center justify-center w-[211px] h-8">
        Update Bio
      </div>
      <div className="absolute top-[199px] left-[1105px] rounded-large bg-plum shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] w-48 h-[42px]" />
      <div className="absolute top-[204px] left-[1094px] text-base text-lavender text-center flex items-center justify-center w-[211px] h-8">
        Generate profile score
      </div>
      <div className="absolute top-[63px] left-[1100px] rounded-large bg-darkslateblue-100 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] w-48 h-[42px]" />
      <div className="absolute top-[68px] left-[1089px] text-base text-lavender text-center flex items-center justify-center w-[211px] h-8">
        Subscribe
      </div>
      <div className="absolute top-[682px] left-[784px] rounded-large bg-plum shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] w-48 h-[42px]" />
      <div className="absolute top-[687px] left-[776px] text-2xl text-lavender text-center flex items-center justify-center w-[211px] h-8">
        Analyze Sentiment
      </div>
      <div className="absolute top-[779.5px] left-[970.5px] box-border w-px h-[173px] border-r-[1px] border-solid border-black" />
      <img
        className="absolute top-[811px] left-[999px] w-[100px] h-[100px] object-cover"
        alt=""
        src="../image-86@2x.png"
      />
      <img
        className="absolute top-[806px] left-[1133px] w-[100px] h-[100px] object-cover"
        alt=""
        src="../image-87@2x.png"
      />
      <TextField
        className="absolute top-[547px] left-[566px]"
        sx={{ width: 410 }}
        color="secondary"
        variant="outlined"
        multiline
        rows={3}
        maxRows={5}
        label="Bio"
        placeholder="Enter your bio"
        onChange ={(e)=>setBio(e.target.value)}
        margin="none"
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[202px] left-[1107px] w-[190px] h-[39px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] w-[190px] h-[39px] overflow-hidden" />
      </button>
      <div className="absolute top-[681px] left-[569px] w-[189px] h-[43px] overflow-hidden" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[682px] left-[786px] w-[190px] h-[42px] overflow-hidden" onClick ={handleBio} />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[60px] left-[1101px] w-[191px] h-[45px] overflow-hidden" />
    </div>
  );
};

export default ProfilePage;
