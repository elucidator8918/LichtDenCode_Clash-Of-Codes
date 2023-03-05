import { useCallback } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
  Button,
  Icon,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const onAboutUsClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  const onFrameButton6Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-lavender w-full h-[1024px] overflow-hidden text-left text-5xl text-black font-poppins">
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[67px] left-[366px] text-3xl font-poppins text-plum text-center flex items-center justify-center w-[211px] h-8"
        onClick={onAboutUsClick}
      >
        About us
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[67px] left-[514px] text-3xl font-semibold font-poppins text-darkslateblue-100 text-center flex items-center justify-center w-[211px] h-8">
        Home
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[67px] left-[680px] text-3xl font-poppins text-plum text-center flex items-center justify-center w-[211px] h-8">
        Matching Party
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[67px] left-[846px] text-3xl font-poppins text-plum text-center flex items-center justify-center w-[211px] h-8">
        Contact
      </button>
      <img
        className="absolute top-[12px] left-[21px] w-[150px] h-[150px] object-cover"
        alt=""
        src="../hearthive-1-1@2x.png"
      />
      <div className="absolute top-[63px] left-[1100px] rounded-large bg-darkslateblue-100 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] w-48 h-[42px]" />
      <div className="absolute top-[68px] left-[1089px] text-base text-lavender text-center flex items-center justify-center w-[211px] h-8">
        Subscribe
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[60px] left-[1101px] w-[191px] h-[45px] overflow-hidden" />
      <img
        className="absolute top-[98px] left-[616px] w-2 h-2"
        alt=""
        src="../ellipse-1.svg"
      />
      <div className="absolute top-[202px] left-[122px] rounded-base bg-orange w-[995px] h-[216px]" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[235px] left-[156px] text-5xl font-bold font-poppins text-darkslateblue-100 text-left flex items-center w-[670px] h-8">
        Welcome Back, Let’s do a Quick Search
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[283px] left-[156px] text-3xl font-poppins text-black text-center flex items-center justify-center w-[255px] h-8">
        What are you looking for?
      </button>
      <FormControl
        className="absolute top-[332px] left-[156px]"
        sx={{ width: 220 }}
        variant="outlined"
      >
        <InputLabel color="secondary">Age</InputLabel>
        <Select color="secondary" size="medium" label="Age">
          <MenuItem value="18-25">18-25</MenuItem>
          <MenuItem value="25-30">25-30</MenuItem>
          <MenuItem value="30-35">30-35</MenuItem>
          <MenuItem value="40+">40+</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
      <FormControl
        className="absolute top-[332px] left-[411px]"
        sx={{ width: 220 }}
        variant="outlined"
      >
        <InputLabel color="secondary">Interests</InputLabel>
        <Select color="secondary" size="medium" label="Interests">
          <MenuItem value="Dancing">Dancing</MenuItem>
          <MenuItem value="Sketching">Sketching</MenuItem>
          <MenuItem value="Singing">Singing</MenuItem>
          <MenuItem value="Sports">Sports</MenuItem>
          <MenuItem value="Reading">Reading</MenuItem>
          <MenuItem value="Others">Others</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
      <Button
        className="absolute top-[344px] left-[878px]"
        sx={{ width: 186 }}
        variant="contained"
        color="secondary"
        endIcon={<Icon>arrow_forward_sharp</Icon>}
      >
        Search
      </Button>
      <div className="absolute top-[458px] left-[122px] rounded-base bg-white w-[995px] h-[481px]" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[560px] left-[687px] text-3xl font-poppins text-gray-100 text-left inline-block w-[383px] h-[63px]">
        {}
      </button>
      <img
        className="absolute top-[480px] left-[144px] rounded-base w-[460px] h-[437px] object-cover"
        alt=""
        src={<Deck/>}
      />
      <img
        className="absolute top-[895px] left-[323px] w-[68px] h-[68px]"
        alt=""
        src="../ellipse-24.svg"
      />
      <img
        className="absolute top-[880px] left-[439px] w-[98px] h-[98px]"
        alt=""
        src="../ellipse-25.svg"
      />
      <img
        className="absolute top-[880px] left-[177px] w-[98px] h-[98px]"
        alt=""
        src="../ellipse-26.svg"
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[512px] left-[631px] text-5xl font-bold font-poppins text-darkslateblue-100 text-left flex items-center w-[363px] h-8">
        Mike Johnson
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[784px] left-[667px] text-[64px] font-bold font-poppins text-orange text-center flex items-center justify-center w-[363px] h-[85px]">
        70/100
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[560px] left-[631px] text-3xl font-semibold font-poppins text-black text-left inline-block w-[399px] h-[38px]">{`Bio : ${localStorage.getItem('bio')} `}</button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[735px] left-[687px] text-3xl font-poppins text-gray-100 text-left inline-block w-[383px] h-8">
        20 years
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[735px] left-[631px] text-3xl font-semibold font-poppins text-black text-left inline-block w-[399px] h-8">{`Age : `}</button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[869px] left-[649px] text-3xl font-medium font-poppins text-black text-center inline-block w-[399px] h-8">
        Profile Score
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[639px] left-[739px] text-3xl font-poppins text-gray-100 text-left inline-block w-[383px] h-8">
        Dancing, Sketching
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[639px] left-[631px] text-3xl font-semibold font-poppins text-black text-left inline-block w-[399px] h-8">{`Interests: `}</button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[687px] left-[723px] text-3xl font-poppins text-gray-100 text-left inline-block w-[383px] h-8">
        Maan Meri Jaan, Apna Bana Le
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[687px] left-[631px] text-3xl font-semibold font-poppins text-black text-left inline-block w-[399px] h-8">{`Spotify : `}</button>
      <div className="absolute top-[217px] left-[1152px] rounded-base bg-white w-[241px] h-[98px]" />
      <div className="absolute top-[202px] left-[1124px] rounded-base bg-darkslateblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[59px] h-[31px]" />
      <div className="absolute top-[209px] left-[1122px] text-base font-medium text-lavender text-center inline-block w-[63px] h-[17px]">
        New
      </div>
      <img
        className="absolute top-[236px] left-[1172px] w-[50px] h-[54.29px] object-cover"
        alt=""
        src="../image-791@2x.png"
      />
      <div className="absolute top-[234px] left-[1249px] font-medium inline-block w-[76px] h-[34px]">
        13
      </div>
      <div className="absolute top-[275px] left-[1250px] text-2xl font-medium text-darkslategray-200 inline-block w-[148px] h-[23px]">
        New Matches
      </div>
      <div className="absolute top-[355px] left-[1152px] rounded-base bg-white w-[241px] h-[98px]" />
      <img
        className="absolute top-[381px] left-[1167px] w-[60px] h-[54.29px] object-cover"
        alt=""
        src="../image-107@2x.png"
      />
      <div className="absolute top-[371px] left-[1249px] font-medium inline-block w-[76px] h-[34px]">
        350
      </div>
      <div className="absolute top-[412px] left-[1250px] text-2xl font-medium text-darkslategray-200 inline-block w-[148px] h-[23px]">
        All Matches
      </div>
      <div className="absolute top-[493px] left-[1152px] rounded-base bg-white w-[241px] h-[98px]" />
      <div className="absolute top-[510px] left-[1249px] font-medium inline-block w-[76px] h-[34px]">
        404
      </div>
      <div className="absolute top-[551px] left-[1250px] text-2xl font-medium text-darkslategray-200 inline-block w-[148px] h-[23px]">
        Profile Visits
      </div>
      <div className="absolute top-[631px] left-[1147px] rounded-base bg-white w-[241px] h-[98px]" />
      <div className="absolute top-[648px] left-[1244px] font-medium inline-block w-[76px] h-[34px]">
        55
      </div>
      <div className="absolute top-[689px] left-[1245px] text-2xl font-medium text-darkslategray-200 inline-block w-[148px] h-[23px]">
        Likes
      </div>
      <img
        className="absolute top-[513px] left-[1167px] w-[60px] h-[64.39px] object-cover"
        alt=""
        src="../image-92@2x.png"
      />
      <img
        className="absolute top-[656px] left-[1167px] w-[60px] h-[54.29px] object-cover"
        alt=""
        src="../image-108@2x.png"
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[879px] left-[1273px] w-[150.46px] h-[137.46px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[0px] w-[140px] h-[130px]"
          alt=""
          src="../ellipse-27.svg"
        />
        <img
          className="absolute top-[77.63px] left-[87.71px] w-[50.62px] h-[48.74px]"
          alt=""
          src="../polygon-1.svg"
        />
        <img
          className="absolute top-[31px] left-[38px] w-[60px] h-[60px] object-cover"
          alt=""
          src="../speech-bubble@2x.png"
        />
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[909px] left-[14px] w-[89px] h-[82.32px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[5px] w-[84px] h-[82px]"
          alt=""
          src="../ellipse-28.svg"
        />
        <img
          className="absolute top-[52.44px] left-[4.41px] w-[29.16px] h-[28.62px]"
          alt=""
          src="../polygon-2.svg"
        />
        <img
          className="absolute top-[17px] left-[29px] w-10 h-10 object-cover"
          alt=""
          src="../shield@2x.png"
        />
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[885px] left-[180px] w-[93px] h-[87px] overflow-hidden">
        <img
          className="absolute top-[7px] left-[11px] w-[70px] h-[70px] object-cover"
          alt=""
          src="../multiply@2x.png"
        />
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[900px] left-[327px] w-[62px] h-[59px] overflow-hidden">
        <img
          className="absolute top-[2px] left-[5px] w-[50px] h-[50px] overflow-hidden"
          alt=""
          src="../star-rate.svg"
        />
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[887px] left-[443px] w-[90px] h-[85px] overflow-hidden">
        <img
          className="absolute top-[5px] left-[10px] w-[70px] h-[70px] object-cover"
          alt=""
          src="../favorite@2x.png"
        />
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[57px] left-[1329px] w-[69px] h-[61px] overflow-hidden"
        onClick={onFrameButton6Click}
      >
        <img
          className="absolute top-[1px] left-[4px] w-[60px] h-[60px] object-cover"
          alt=""
          src="../ellipse-23@2x.png"
        />
      </button>
    </div>
  );
};

export default Home;
