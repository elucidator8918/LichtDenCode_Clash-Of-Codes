import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const MatchingParty = () => {
  const navigate = useNavigate();
  const handleSubmit=()=>{
   const resposne = axios.post('http://127.0.0.1:8000/swipe/party_mail')
  }
  const onAboutUsClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-lavender w-full h-[1024px] overflow-hidden text-center text-3xl text-lavender font-poppins">
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
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[67px] left-[680px] text-base font-semibold font-poppins text-darkslateblue-100 text-center flex items-center justify-center w-[211px] h-8">
        Matching Party
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[67px] left-[846px] text-base font-poppins text-plum text-center flex items-center justify-center w-[211px] h-8" onClick={navigate('/contacts')}>
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
        className="absolute top-[98px] left-[782px] w-2 h-2"
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
      <b className="absolute top-[192px] left-[57px] text-5xl flex text-darkslateblue-100 text-left items-center w-[670px] h-8">
        Upcoming Matching Parties
      </b>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[248px] left-[57px] text-base font-poppins text-black text-left flex items-center w-[1139px] h-8">
        Join our matching party! Meet other singles and find your perfect match
        in a fun and relaxed environment.
      </button>
      <div className="absolute top-[334px] left-[518px] rounded-base bg-white w-[418px] h-60" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[497px] left-[664px] text-base font-poppins text-black text-left flex items-center w-[110px] h-8">
        10pm
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[462px] left-[628px] text-base font-semibold font-poppins text-darkslateblue-100 text-left flex items-center w-[225px] h-8">
        Rike
      </button>
      <img
        className="absolute top-[334px] left-[518px] rounded-t-base rounded-b-none w-[418px] h-[111px] object-cover"
        alt=""
        src="../rectangle-95@2x.png"
      />
      <div className="absolute top-[462px] left-[540px] rounded-small bg-lavender w-[66px] h-[87px]" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[476px] left-[546px] text-darkslateblue-100 text-center flex items-center w-[53px] h-16">
        <span className="[line-break:anywhere] w-full">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span className="text-base font-poppins">Mar</span>
          </p>
          <p className="m-0">
            <span className="text-5xl font-semibold font-poppins">11</span>
          </p>
        </span>
      </button>
      <img
        className="absolute top-[498px] left-[628px] w-[30px] h-[30px] overflow-hidden"
        alt=""
        src="../access-time.svg"
      />
      <div className="absolute top-[514px] left-[759px] rounded-base bg-orange w-[168px] h-[45px]" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[514px] left-[759px] rounded-base w-[168px] h-[45px] overflow-hidden active:bg-lime" onClick={handleSubmit}>
        <div className="absolute top-[12px] left-[24px] text-base font-semibold font-poppins text-black text-center flex items-center justify-center w-[117px] h-[18px]">
          RSVP
        </div>
      </button>
      <div className="absolute top-[334px] left-[965px] rounded-base bg-white w-[418px] h-60" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[497px] left-[1111px] text-base font-poppins text-black text-left flex items-center w-[110px] h-8">
        11pm
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[462px] left-[1075px] text-base font-semibold font-poppins text-darkslateblue-100 text-left flex items-center w-[225px] h-8">
        Lord of Drinks
      </button>
      <img
        className="absolute top-[334px] left-[965px] rounded-t-base rounded-b-none w-[418px] h-[111px] object-cover"
        alt=""
        src="../rectangle-99@2x.png"
      />
      <div className="absolute top-[462px] left-[987px] rounded-small bg-lavender w-[66px] h-[87px]" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[476px] left-[993px] text-darkslateblue-100 text-center flex items-center w-[53px] h-16">
        <span className="[line-break:anywhere] w-full">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span className="text-base font-poppins">Mar</span>
          </p>
          <p className="m-0">
            <span className="text-5xl font-semibold font-poppins">12</span>
          </p>
        </span>
      </button>
      <img
        className="absolute top-[498px] left-[1075px] w-[30px] h-[30px] overflow-hidden"
        alt=""
        src="../access-time1.svg"
      />
      <div className="absolute top-[514px] left-[1206px] rounded-base bg-orange w-[168px] h-[45px]" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[514px] left-[1206px] rounded-base w-[168px] h-[45px] overflow-hidden active:bg-lime" onClick={handleSubmit}>
        <div className="absolute top-[12px] left-[24px] text-base font-semibold font-poppins text-black text-center flex items-center justify-center w-[117px] h-[18px]">
          RSVP
        </div>
      </button>
      <div className="absolute top-[630px] left-[518px] rounded-base bg-white w-[418px] h-60" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[793px] left-[664px] text-base font-poppins text-black text-left flex items-center w-[110px] h-8">
        11pm
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[758px] left-[628px] text-base font-semibold font-poppins text-darkslateblue-100 text-left flex items-center w-[225px] h-8">
        Flying Saucer
      </button>
      <img
        className="absolute top-[630px] left-[518px] rounded-t-base rounded-b-none w-[418px] h-[111px] object-cover"
        alt=""
        src="../rectangle-107@2x.png"
      />
      <div className="absolute top-[758px] left-[540px] rounded-small bg-lavender w-[66px] h-[87px]" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[772px] left-[546px] text-darkslateblue-100 text-center flex items-center w-[53px] h-16">
        <span className="[line-break:anywhere] w-full">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span className="text-base font-poppins">Mar</span>
          </p>
          <p className="m-0">
            <span className="text-5xl font-semibold font-poppins">25</span>
          </p>
        </span>
      </button>
      <img
        className="absolute top-[794px] left-[628px] w-[30px] h-[30px] overflow-hidden"
        alt=""
        src="../access-time2.svg"
      />
      <div className="absolute top-[810px] left-[759px] rounded-base bg-orange w-[168px] h-[45px]" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[810px] left-[759px] rounded-base w-[168px] h-[45px] overflow-hidden active:bg-lime" onClick={handleSubmit}>
        <div className="absolute top-[12px] left-[24px] text-base font-semibold font-poppins text-black text-center flex items-center justify-center w-[117px] h-[18px]">
          RSVP
        </div>
      </button>
      <div className="absolute top-[334px] left-[62px] rounded-base bg-white w-[418px] h-60" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[497px] left-[208px] text-base font-poppins text-black text-left flex items-center w-[110px] h-8">
        8pm
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[462px] left-[172px] text-base font-semibold font-poppins text-darkslateblue-100 text-left flex items-center w-[225px] h-8">
        Bombay Cocktail Bar
      </button>
      <img
        className="absolute top-[334px] left-[62px] rounded-t-base rounded-b-none w-[418px] h-[111px] object-cover"
        alt=""
        src="../rectangle-115@2x.png"
      />
      <div className="absolute top-[462px] left-[84px] rounded-small bg-lavender w-[66px] h-[87px]" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[476px] left-[90px] text-darkslateblue-100 text-center flex items-center w-[53px] h-16">
        <span className="[line-break:anywhere] w-full">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span className="text-base font-poppins">Mar</span>
          </p>
          <p className="m-0">
            <span className="text-5xl font-semibold font-poppins">07</span>
          </p>
        </span>
      </button>
      <img
        className="absolute top-[498px] left-[172px] w-[30px] h-[30px] overflow-hidden"
        alt=""
        src="../access-time3.svg"
      />
      <div className="absolute top-[514px] left-[303px] rounded-base bg-orange w-[168px] h-[45px]" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[514px] left-[303px] rounded-base w-[168px] h-[45px] overflow-hidden active:bg-lime" onClick={handleSubmit}>
        <div className="absolute top-[12px] left-[24px] text-base font-semibold font-poppins text-black text-center flex items-center justify-center w-[117px] h-[18px]">
          RSVP
        </div>
      </button>
      <div className="absolute top-[630px] left-[62px] rounded-base bg-white w-[418px] h-60" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[793px] left-[208px] text-base font-poppins text-black text-left flex items-center w-[110px] h-8">
        8pm
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[758px] left-[172px] text-base font-semibold font-poppins text-darkslateblue-100 text-left flex items-center w-[225px] h-8">
        Glocal Junction
      </button>
      <img
        className="absolute top-[630px] left-[62px] rounded-t-base rounded-b-none w-[418px] h-[111px] object-cover"
        alt=""
        src="../rectangle-119@2x.png"
      />
      <div className="absolute top-[758px] left-[84px] rounded-small bg-lavender w-[66px] h-[87px]" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[772px] left-[90px] text-darkslateblue-100 text-center flex items-center w-[53px] h-16">
        <span className="[line-break:anywhere] w-full">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span className="text-base font-poppins">Mar</span>
          </p>
          <p className="m-0">
            <span className="text-5xl font-semibold font-poppins">12</span>
          </p>
        </span>
      </button>
      <img
        className="absolute top-[794px] left-[172px] w-[30px] h-[30px] overflow-hidden"
        alt=""
        src="../access-time4.svg"
      />
      <div className="absolute top-[810px] left-[303px] rounded-base bg-orange w-[168px] h-[45px]" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[810px] left-[303px] rounded-base w-[168px] h-[45px] overflow-hidden active:bg-lime" onClick={handleSubmit}>
        <div className="absolute top-[12px] left-[24px] text-base font-semibold font-poppins text-black text-center flex items-center justify-center w-[117px] h-[18px]">
          RSVP
        </div>
      </button>
      <div className="absolute top-[630px] left-[965px] rounded-base bg-white w-[418px] h-60" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[793px] left-[1111px] text-base font-poppins text-black text-left flex items-center w-[110px] h-8">
        10pm
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[758px] left-[1075px] text-base font-semibold font-poppins text-darkslateblue-100 text-left flex items-center w-[225px] h-8">
        145 Andheri
      </button>
      <img
        className="absolute top-[630px] left-[965px] rounded-t-base rounded-b-none w-[418px] h-[111px] object-cover"
        alt=""
        src="../rectangle-111@2x.png"
      />
      <div className="absolute top-[758px] left-[987px] rounded-small bg-lavender w-[66px] h-[87px]" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[772px] left-[993px] text-darkslateblue-100 text-center flex items-center w-[53px] h-16">
        <span className="[line-break:anywhere] w-full">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span className="text-base font-poppins">Mar</span>
          </p>
          <p className="m-0">
            <span className="text-5xl font-semibold font-poppins">27</span>
          </p>
        </span>
      </button>
      <img
        className="absolute top-[794px] left-[1075px] w-[30px] h-[30px] overflow-hidden"
        alt=""
        src="../access-time5.svg"
      />
      <div className="absolute top-[810px] left-[1206px] rounded-base bg-orange w-[168px] h-[45px]" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[810px] left-[1206px] rounded-base w-[168px] h-[45px] overflow-hidden active:bg-lime" onClick={handleSubmit}>
        <div className="absolute top-[12px] left-[24px] text-base font-semibold font-poppins text-black text-center flex items-center justify-center w-[117px] h-[18px]">
          RSVP
        </div>
      </button>
    </div>
  );
};

export default MatchingParty;
