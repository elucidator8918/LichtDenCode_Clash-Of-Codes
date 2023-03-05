import { useCallback } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const onAboutUsClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onMatchingPartyClick = useCallback(() => {
    navigate("/matching-party");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-lavender w-full h-[1024px] overflow-hidden text-center text-3xs text-lavender font-poppins">
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[67px] left-[366px] text-base font-poppins text-plum text-center flex items-center justify-center w-[211px] h-8"
        onClick={onAboutUsClick}
      >
        About us
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[67px] left-[514px] text-base font-poppins text-plum text-center flex items-center justify-center w-[211px] h-8"
        onClick={onHomeClick}
      >
        Home
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[67px] left-[680px] text-base font-poppins text-plum text-center flex items-center justify-center w-[211px] h-8"
        onClick={onMatchingPartyClick}
      >
        Matching Party
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[67px] left-[846px] text-base font-semibold font-poppins text-darkslateblue-100 text-center flex items-center justify-center w-[211px] h-8">
        Contact
      </button>
      <img
        className="absolute top-[12px] left-[21px] w-[150px] h-[150px] object-cover"
        alt=""
        src="../hearthive-1-1@2x.png"
      />
      <div className="absolute top-[63px] left-[1100px] rounded-large bg-darkslateblue-100 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] w-48 h-[42px]" />
      <div className="absolute top-[68px] left-[1089px] flex items-center justify-center w-[211px] h-8">
        Subscribe
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[60px] left-[1101px] w-[191px] h-[45px] overflow-hidden" />
      <img
        className="absolute top-[98px] left-[948px] w-2 h-2"
        alt=""
        src="../ellipse-1.svg"
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[57px] left-[1329px] w-[69px] h-[61px] overflow-hidden"
        onClick={onFrameButton1Click}
      >
        <img
          className="absolute top-[1px] left-[4px] w-[60px] h-[60px] object-cover"
          alt=""
          src="../ellipse-23@2x.png"
        />
      </button>
      <div className="absolute top-[199px] left-[151px] rounded-base bg-white w-[1138px] h-[752px]" />
      <b className="absolute top-[255px] left-[206px] text-[40px] flex text-darkslateblue-100 text-left items-center w-[670px] h-8">
        Send Us A Message
      </b>
      <TextField
        className="[border:none] bg-[transparent] absolute top-[348px] left-[206px]"
        sx={{ width: 519 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Name"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[467px] left-[206px]"
        sx={{ width: 519 }}
        color="primary"
        variant="outlined"
        type="email"
        label="Email"
        size="medium"
        margin="none"
      />
      <TextField
        className="absolute top-[586px] left-[206px]"
        sx={{ width: 519 }}
        color="secondary"
        variant="outlined"
        multiline
        rows={5}
        maxRows={10}
        label="Message"
        placeholder="Write the message"
        margin="none"
      />
      <Button
        className="absolute top-[813px] left-[206px]"
        sx={{ width: 519 }}
        variant="contained"
        color="secondary"
        size="large"
      >
        Send
      </Button>
      <img
        className="absolute top-[441px] left-[786px] w-[60px] h-[60px] overflow-hidden"
        alt=""
        src="../email.svg"
      />
      <img
        className="absolute top-[545px] left-[786px] w-[60px] h-[60px] object-cover"
        alt=""
        src="../instagram@2x.png"
      />
      <img
        className="absolute top-[649px] left-[786px] w-[60px] h-[60px] object-cover"
        alt=""
        src="../whatsapp@2x.png"
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[461px] left-[867px] text-lg font-poppins text-black text-left flex items-center w-[287px] h-8">
        hearthive@gmail.com
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[566px] left-[867px] text-lg font-poppins text-black text-left flex items-center w-[244px] h-8">
        @hearthive
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[663px] left-[867px] text-lg font-poppins text-black text-left flex items-center w-[244px] h-8">
        +91 9619121679
      </button>
    </div>
  );
};

export default Contact;
