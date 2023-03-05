import { useCallback } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onFrameButton3Click = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onFrameButton4Click = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onFrameButton5Click = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  return (
    <div className="relative bg-lavender w-screen h-[3376px] overflow-hidden text-left text-base text-darkslateblue-100 font-poppins">
      <div className="absolute top-[1057px] left-[-3px] bg-white w-[1443px] h-[841px]" />
      <img
        className="absolute top-[661px] left-[1043px] w-[400px] h-[400px] object-cover"
        alt=""
        src="../image-12@2x.png"
      />
      <img
        className="absolute top-[0px] left-[882px] w-[700px] h-[700px]"
        alt=""
        src="../ellipse-3.svg"
      />
      <img
        className="absolute top-[0px] left-[700px] w-[900px] h-[900px]"
        alt=""
        src="../ellipse-4.svg"
      />
      <img
        className="absolute top-[0px] left-[1029px] w-[500px] h-[500px]"
        alt=""
        src="../ellipse-2.svg"
      />
      <img
        className="absolute top-[0px] left-[532px] w-[1100px] h-[1100px]"
        alt=""
        src="../ellipse-5.svg"
      />
      <div className="absolute top-[1308px] left-[675px] text-gray-100 inline-block w-44">
        HeartHive is a safe and well-established dating service and we place
        great emphasis on the service being as safe as possible at all levels.
      </div>
      <div className="absolute top-[1242px] left-[675px] text-3xl font-semibold flex items-center w-[196px]">
        Safe and serious dating
      </div>
      <img
        className="absolute top-[1135px] left-[0px] w-[632px] h-[634.32px] object-cover"
        alt=""
        src="../image-13@2x.png"
      />
      <div className="absolute top-[1207px] left-[96px] flex items-center w-80 h-[87px] text-5xl">
        <span className="[line-break:anywhere] w-full">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>
              <span>Why Choose</span>
              <span className="text-3xl">{` `}</span>
            </span>
          </p>
          <p className="m-0 text-7xl">
            <span className="font-semibold">HeartHive</span>
            <span className="text-3xl font-poppins">{` `}</span>
          </p>
        </span>
      </div>
      <div className="absolute top-[1162px] left-[675px] w-[70px] h-[70px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[0px] w-[70px] h-[70px]"
          alt=""
          src="../ellipse-13.svg"
        />
        <img
          className="absolute top-[18px] left-[18px] w-[35px] h-[35px] object-cover"
          alt=""
          src="../protect@2x.png"
        />
      </div>
      <div className="absolute top-[1308px] left-[908px] text-gray-100 inline-block w-44">
        Our sentiment analysis feature evaluates your profile bio to understand
        your personality and suggest compatible matches.
      </div>
      <div className="absolute top-[1242px] left-[908px] text-3xl font-semibold flex items-center w-[196px]">
        Sentiment analysis of bio
      </div>
      <div className="absolute top-[1308px] left-[1130px] text-gray-100 inline-block w-44">
        Our profile scoring feature rates the completeness and accuracy of your
        profile information to increase your chances of finding matches
      </div>
      <div className="absolute top-[1242px] left-[1130px] text-3xl font-semibold flex items-center w-[196px]">
        Profile Scoring feature
      </div>
      <div className="absolute top-[1643px] left-[675px] text-gray-100 inline-block w-44">
        Our matching parties feature lets you attend fun events with other
        singles, increasing your chances of meeting the perfect match
      </div>
      <div className="absolute top-[1577px] left-[675px] text-3xl font-semibold flex items-center w-[196px]">
        Single parties with matching
      </div>
      <div className="absolute top-[1643px] left-[908px] text-gray-100 inline-block w-44">
        Our free chat feature lets you connect and chat with thousands of users,
        giving you more opportunities to find your perfect match
      </div>
      <div className="absolute top-[1577px] left-[908px] text-3xl font-semibold flex items-center w-[196px]">
        Chat with thousands for free
      </div>
      <div className="absolute top-[1643px] left-[1130px] text-gray-100 inline-block w-44">
        Our Spotify integration recommends profiles with similar music tastes,
        giving you more chances to connect with like-minded people
      </div>
      <div className="absolute top-[1577px] left-[1130px] text-3xl font-semibold flex items-center w-[196px]">
        Find your Music Match
      </div>
      <img
        className="absolute h-[0.21%] w-[0.35%] top-[41.36%] right-[33.89%] bottom-[58.43%] left-[65.76%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../vector.svg"
      />
      <img
        className="absolute h-[0.21%] w-[0.35%] top-[41.36%] right-[34.72%] bottom-[58.43%] left-[64.93%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../vector.svg"
      />
      <div className="absolute top-[1162px] left-[1130px] w-[70px] h-[70px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[0px] w-[70px] h-[70px]"
          alt=""
          src="../ellipse-15.svg"
        />
        <img
          className="absolute top-[18px] left-[18px] w-[35px] h-[35px] object-cover"
          alt=""
          src="../popular-man@2x.png"
        />
      </div>
      <div className="absolute top-[1497px] left-[675px] w-[70px] h-[70px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[0px] w-[70px] h-[70px]"
          alt=""
          src="../ellipse-16.svg"
        />
        <img
          className="absolute top-[18px] left-[18px] w-[35px] h-[35px] object-cover"
          alt=""
          src="../wine-glass@2x.png"
        />
      </div>
      <div className="absolute top-[1497px] left-[908px] w-[70px] h-[70px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[0px] w-[70px] h-[70px]"
          alt=""
          src="../ellipse-17.svg"
        />
        <img
          className="absolute top-[18px] left-[18px] w-[35px] h-[35px] object-cover"
          alt=""
          src="../communication@2x.png"
        />
      </div>
      <div className="absolute top-[1497px] left-[1130px] w-[70px] h-[70px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[0px] w-[70px] h-[70px]"
          alt=""
          src="../ellipse-18.svg"
        />
        <img
          className="absolute top-[18px] left-[18px] w-[35px] h-[35px] object-cover"
          alt=""
          src="../spotify@2x.png"
        />
      </div>
      <img
        className="absolute top-[1404px] left-[1266px] w-[127.78px] h-[127.78px] object-cover"
        alt=""
        src="../image-14@2x.png"
      />
      <img
        className="absolute top-[1458px] left-[1320px] w-[120px] h-[128.92px] object-cover"
        alt=""
        src="../image-15@2x.png"
      />
      <img
        className="absolute top-[2131px] left-[294px] w-[850px] h-[628px]"
        alt=""
        src="../ellipse-19.svg"
      />
      <img
        className="absolute top-[1162px] left-[908px] w-[70px] h-[70px] overflow-hidden"
        alt=""
        src="../frame-6.svg"
      />
      <div className="absolute top-[2230px] left-[1102px] text-2xl font-extrabold inline-block w-[354px]">
        Ian Harding
      </div>
      <div className="absolute top-[0px] left-[0px] w-[1443px] h-[1057px] overflow-hidden">
        <div className="absolute top-[256px] left-[1091.73px] rounded-large bg-paleturquoise shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[306px] h-[435px] [transform:_rotate(10.16deg)] [transform-origin:0_0]" />
        <img
          className="absolute top-[277.65px] left-[1048.04px] rounded-large w-[322.88px] h-[387.21px] object-cover"
          alt=""
          src="../rectangle-9@2x.png"
        />
        <div className="absolute top-[636px] left-[1032.64px] text-4xl text-black text-center flex items-center justify-center w-[284.18px] h-8 [transform:_rotate(10.16deg)] [transform-origin:0_0]">
          Made with Love
        </div>
        <div className="absolute top-[194.92px] left-[938.2px] rounded-large bg-khaki shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[306px] h-[435px] [transform:_rotate(1.13deg)] [transform-origin:0_0]" />
        <img
          className="absolute top-[210.49px] left-[948.33px] rounded-large w-[280.13px] h-[358.16px] object-cover"
          alt=""
          src="../rectangle-7@2x.png"
        />
        <div className="absolute top-[576px] left-[942.63px] text-4xl text-black text-center flex items-center justify-center w-[284.18px] h-8 [transform:_rotate(1.13deg)] [transform-origin:0_0]">
          Meet People
        </div>
        <img
          className="absolute top-[550px] left-[286px] w-[375px] h-[59px]"
          alt=""
          src="../ellipse-6.svg"
        />
        <div className="absolute top-[235px] left-[96px] text-6xl font-semibold text-plum flex items-center w-[589px] h-8">
          Because you deserve better!
        </div>
        <div className="absolute top-[276px] left-[96px] text-[128px] font-semibold flex items-center w-[675px] h-[324px]">
          Love is in the hive
        </div>
        <div className="absolute top-[793px] left-[96px] text-7xl font-semibold flex items-center w-[121px] h-[91px]">
          15k+
        </div>
        <div className="absolute top-[12px] left-[21px] w-[1415px] h-[150px] overflow-hidden text-center text-3xl text-plum">
          <div className="absolute top-[55px] left-[345px] font-semibold text-darkslateblue-100 flex items-center justify-center w-[211px] h-8">
            About us
          </div>
          <div className="absolute top-[55px] left-[493px] flex items-center justify-center w-[211px] h-8">
            Home
          </div>
          <div className="absolute top-[55px] left-[659px] flex items-center justify-center w-[211px] h-8">
            Matching Party
          </div>
          <div className="absolute top-[55px] left-[825px] flex items-center justify-center w-[211px] h-8">
          <a href="/contacts">Contact</a>
          </div>
          <div className="absolute top-[55px] left-[1079px] flex items-center justify-center w-[211px] h-8">
            Login
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[150px] h-[150px] object-cover"
            alt=""
            src="../hearthive-1-1@2x.png"
          />
          <button className="cursor-pointer [border:none] p-0 bg-darkslateblue-100 absolute top-[43px] left-[1238px] rounded-large shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[143px] h-[57px]" />
          <div className="absolute top-[55px] left-[1204px] text-lavender flex items-center justify-center w-[211px] h-8">
            Register
          </div>
          <img
            className="absolute top-[88px] left-[446px] w-2 h-2"
            alt=""
            src="../ellipse-1.svg"
          />
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[50px] left-[1140px] w-[86px] h-[42px] overflow-hidden"
            onClick={onFrameButtonClick}
          />
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[55px] left-[553px] w-[95px] h-[37px] overflow-hidden"
            onClick={onFrameButton1Click}
          />
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[46px] left-[677px] w-[170px] h-[46px] overflow-hidden"
            onClick={onFrameButton2Click}
          />
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[42px] left-[1240px] w-[141px] h-[58px] overflow-hidden"
            onClick={onFrameButton3Click}
          />
        </div>
        <img
          className="absolute top-[314.1px] left-[89px] w-[231px] h-[58px] object-cover"
          alt=""
          src="../image-1@2x.png"
        />
        <img
          className="absolute top-[308px] left-[308px] w-[263.45px] h-[83.2px] object-cover"
          alt=""
          src="../image-5@2x.png"
        />
        <img
          className="absolute top-[314px] left-[558px] w-[115.2px] h-[68.54px] object-cover"
          alt=""
          src="../image-6@2x.png"
        />
        <img
          className="absolute top-[514.1px] left-[93px] w-[231px] h-[58px] object-cover"
          alt=""
          src="../image-1@2x.png"
        />
        <img
          className="absolute top-[508px] left-[312px] w-[263.45px] h-[83.2px] object-cover"
          alt=""
          src="../image-5@2x.png"
        />
        <img
          className="absolute top-[514px] left-[562px] w-[52.53px] h-[62.35px] object-cover"
          alt=""
          src="../image-9@2x.png"
        />
        <div className="absolute top-[198.34px] left-[700px] rounded-large bg-lightpink shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[306px] h-[435px] [transform:_rotate(-11.37deg)] [transform-origin:0_0]" />
        <img
          className="absolute top-[160.32px] left-[722.32px] rounded-large w-[328.15px] h-[390.5px] object-cover"
          alt=""
          src="../rectangle-5@2x.png"
        />
        <div className="absolute top-[567.02px] left-[786px] text-4xl text-black text-center flex items-center justify-center w-[284.18px] h-8 [transform:_rotate(-11.37deg)] [transform-origin:0_0]">
          Find your Love
        </div>
        <img
          className="absolute top-[545px] left-[717px] w-[57px] h-[57px] overflow-hidden"
          alt=""
          src="../frame-1.svg"
        />
        <img
          className="absolute top-[511px] left-[1344px] w-[70px] h-[70px] overflow-hidden"
          alt=""
          src="../frame-11.svg"
        />
        <div className="absolute top-[264px] left-[1343px] w-[50px] h-[50px] overflow-hidden">
          <img
            className="absolute top-[0px] left-[0px] w-[50px] h-[50px]"
            alt=""
            src="../ellipse-9.svg"
          />
          <img
            className="absolute top-[13px] left-[14px] w-[22px] h-[21.41px] object-cover"
            alt=""
            src="../image-10@2x.png"
          />
        </div>
        <div className="absolute top-[145px] left-[1194px] w-5 h-[28.17px]" />
        <img
          className="absolute top-[173px] left-[690px] w-[30px] h-[30px] overflow-hidden"
          alt=""
          src="../frame-12.svg"
        />
        <img
          className="absolute top-[104px] left-[999px] w-[60px] h-[86px] overflow-hidden"
          alt=""
          src="../frame-13.svg"
        />
        <div className="absolute top-[631px] left-[96px] text-3xl text-gray-100 flex items-center w-[592px]">
          Join HeartHive, the buzzing community for singles seeking meaningful
          connections and lasting love in a busy world
        </div>
        <div className="absolute top-[871px] left-[96px] text-gray-100 flex items-center w-[138px]">
          Dates and matches made everyday
        </div>
        <div className="absolute top-[793px] left-[408px] text-7xl font-semibold flex items-center w-[121px] h-[91px]">
          1M+
        </div>
        <div className="absolute top-[871px] left-[408px] text-gray-100 flex items-center w-[138px]">
          Members from around the world
        </div>
        <div className="absolute top-[793px] left-[252px] text-7xl font-semibold text-orange flex items-center w-[138px] h-[91px]">
          1,456
        </div>
        <div className="absolute top-[871px] left-[252px] text-gray-100 flex items-center w-[138px]">
          New member signups everyday
        </div>
        <div className="absolute top-[724px] left-[96px] rounded-large bg-plum shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[214px] h-[50px]" />
        <div className="absolute top-[737px] left-[81px] text-3xl text-lavender text-center flex items-center justify-center w-[244px] h-6">
          Get Started
        </div>
        <div className="absolute top-[702px] left-[720px] w-[188px] h-[47px] overflow-hidden text-2xl text-plum">
          <div className="absolute top-[0px] left-[0px] rounded-small bg-white shadow-[0px_4px_4px_rgba(255,_255,_255,_0.25)] w-[168px] h-[47px]" />
          <img
            className="absolute top-[4px] left-[18px] w-5 h-[38px] object-cover"
            alt=""
            src="../male@2x.png"
          />
          <div className="absolute top-[11px] left-[50px] flex items-center w-[138px]">
            Male
          </div>
        </div>
        <div className="absolute top-[702px] left-[906px] w-[186px] h-[47px] overflow-hidden text-2xl text-white">
          <div className="absolute top-[0px] left-[0px] rounded-small bg-plum shadow-[0px_4px_4px_rgba(255,_255,_255,_0.25)] w-[168px] h-[47px]" />
          <div className="absolute top-[11px] left-[48px] flex items-center w-[138px]">
            30-35 Years
          </div>
          <img
            className="absolute h-[31.91%] w-[8.06%] top-[34.04%] right-[81.72%] bottom-[34.04%] left-[10.22%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../vector2.svg"
          />
        </div>
        <div className="absolute top-[702px] left-[1090px] w-[184px] h-[47px] overflow-hidden text-2xl text-plum">
          <div className="absolute top-[0px] left-[0px] rounded-small bg-white shadow-[0px_4px_4px_rgba(255,_255,_255,_0.25)] w-[168px] h-[47px]" />
          <div className="absolute top-[11px] left-[46px] flex items-center w-[138px]">
            Mumbai
          </div>
          <img
            className="absolute h-[42.55%] w-[8.15%] top-[27.66%] right-[82.61%] bottom-[29.79%] left-[9.24%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../-icon-location.svg"
          />
        </div>
        <div className="absolute top-[774px] left-[720px] w-[279px] h-[62px] overflow-hidden">
          <div className="absolute top-[0px] left-[0px] rounded-small bg-white shadow-[0px_2px_4px_rgba(255,_255,_255,_0.25)] w-[279px] h-[62px]" />
          <img
            className="absolute top-[6px] left-[6px] rounded-small w-[52px] h-[50px] object-cover"
            alt=""
            src="../rectangle-15@2x.png"
          />
          <div className="absolute top-[10px] left-[74px] text-lg font-semibold flex items-center w-[138px]">
            Angela Taylor
          </div>
          <div className="absolute top-[32px] left-[74px] text-darkslateblue-300 flex items-center w-[138px]">
            Mumbai, India
          </div>
          <div className="absolute top-[13px] left-[194px] rounded-xxs bg-plum w-[76px] h-[37px]" />
          <div className="absolute top-[20px] left-[204px] font-semibold text-lavender text-center flex items-center justify-center w-[57px] h-6">
            Select
          </div>
        </div>
        <div className="absolute top-[853px] left-[748px] w-[279px] h-[62px] overflow-hidden">
          <div className="absolute top-[0px] left-[0px] rounded-small bg-white shadow-[0px_2px_4px_rgba(255,_255,_255,_0.25)] w-[279px] h-[62px]" />
          <img
            className="absolute top-[6px] left-[6px] rounded-small w-[52px] h-[50px] object-cover"
            alt=""
            src="../rectangle-18@2x.png"
          />
          <div className="absolute top-[10px] left-[75px] text-lg font-semibold flex items-center w-[138px]">
            Mike Johnson
          </div>
          <div className="absolute top-[32px] left-[74px] text-darkslateblue-300 flex items-center w-[138px]">
            Mumbai, India
          </div>
          <div className="absolute top-[13px] left-[194px] rounded-xxs bg-plum w-[76px] h-[37px]" />
          <div className="absolute top-[20px] left-[204px] font-semibold text-lavender text-center flex items-center justify-center w-[57px] h-6">
            Select
          </div>
        </div>
        <div className="absolute top-[1055px] left-[0px] w-[1443px] h-[840px] overflow-hidden" />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[725px] left-[96px] w-[212px] h-[49px] overflow-hidden"
          onClick={onFrameButton4Click}
        />
      </div>
      <div className="absolute top-[1898px] left-[0px] w-[1440px] h-[1118px] overflow-hidden text-2xl">
        <div className="absolute top-[107px] left-[294px] rounded-xxl bg-navajowhite w-[852px] h-[166px]" />
        <div className="absolute top-[241px] left-[70px] rounded-base bg-white shadow-[0px_4px_4px_rgba(255,_255,_255,_0.25)] w-[406px] h-[262px]" />
        <div className="absolute top-[138px] left-[436px] text-6xl text-center flex items-center w-[567px] h-[87px]">
          <span className="[line-break:anywhere] w-full">
            <span>{`What Our `}</span>
            <b>Beloved Users</b>
            <span> Say</span>
          </span>
        </div>
        <img
          className="absolute top-[281px] left-[101px] w-20 h-20 object-cover"
          alt=""
          src="../ellipse-20@2x.png"
        />
        <img
          className="absolute top-[295px] left-[192px] w-[30px] h-[30px] overflow-hidden"
          alt=""
          src="../star-rate.svg"
        />
        <b className="absolute top-[299px] left-[229px] inline-block w-44">
          4.5
        </b>
        <b className="absolute top-[372px] left-[101px] text-xl inline-block text-gray-100 w-[354px]">
          I'm so grateful for HeartHive - it helped me find the love of my life!
          The website is easy to use and has great features like profile scoring
          and Spotify integration.
        </b>
        <div className="absolute top-[332px] left-[194px] font-extrabold inline-block w-[354px]">
          John Abhram
        </div>
        <div className="absolute top-[241px] left-[524px] rounded-base bg-white shadow-[0px_4px_4px_rgba(255,_255,_255,_0.25)] w-[406px] h-[262px]" />
        <img
          className="absolute top-[281px] left-[555px] w-20 h-20 object-cover"
          alt=""
          src="../ellipse-21@2x.png"
        />
        <img
          className="absolute top-[295px] left-[646px] w-[30px] h-[30px] overflow-hidden"
          alt=""
          src="../star-rate1.svg"
        />
        <b className="absolute top-[299px] left-[683px] inline-block w-44">
          5.0
        </b>
        <b className="absolute top-[372px] left-[555px] text-xl inline-block text-gray-100 w-[354px]">
          I had so much fun attending HeartHive's matching parties and met some
          amazing people. The chat feature is also great - I've made lots of new
          friends
        </b>
        <div className="absolute top-[332px] left-[648px] font-extrabold inline-block w-[354px]">
          Lucy Hale
        </div>
        <div className="absolute top-[241px] left-[978px] rounded-base bg-white shadow-[0px_4px_4px_rgba(255,_255,_255,_0.25)] w-[406px] h-[262px]" />
        <img
          className="absolute top-[281px] left-[1009px] w-20 h-20 object-cover"
          alt=""
          src="../ellipse-22@2x.png"
        />
        <img
          className="absolute top-[295px] left-[1100px] w-[30px] h-[30px] overflow-hidden"
          alt=""
          src="../star-rate2.svg"
        />
        <b className="absolute top-[299px] left-[1137px] inline-block w-44">
          5.0
        </b>
        <b className="absolute top-[372px] left-[1009px] text-xl inline-block text-gray-100 w-[354px]">
          HeartHive's sentiment analysis feature is truly unique and helped me
          find matches with similar personalities. I've recommended this app to
          all my single friends!
        </b>
        <div className="absolute top-[680px] left-[185px] rounded-large bg-indianred w-[1085px] h-[265px]" />
        <div className="absolute top-[788px] left-[859px] rounded-large bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[177px] h-[50px]" />
        <div className="absolute top-[801px] left-[825px] text-salmon text-center flex items-center justify-center w-[244px] h-6">
          Get Started
        </div>
        <div className="absolute top-[788px] left-[1049px] rounded-large bg-gray-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[177px] h-[50px] border-[1px] border-solid border-white" />
        <div className="absolute top-[801px] left-[1015px] text-white text-center flex items-center justify-center w-[244px] h-6">
        <a href="/contacts">Contact Us</a>
        </div>
        <img
          className="absolute top-[680px] left-[185px] rounded-large w-[261.19px] h-[271px] object-cover"
          alt=""
          src="../image-16@2x.png"
        />
        <div className="absolute top-[741px] left-[364px] text-7xl font-semibold text-white inline-block w-[549px]">
          <p className="[margin-block-start:0] [margin-block-end:0px]">{`Are you ready `}</p>
          <p className="m-0">to start Right now?</p>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[788px] left-[861px] w-[175px] h-[50px] overflow-hidden"
          onClick={onFrameButton5Click}
        />
      </div>
      <div className="absolute top-[3019px] left-[0px] w-[1440px] h-[357px] overflow-hidden text-center text-3xl text-white font-open-sans">
        <div className="absolute top-[0px] left-[0px] bg-darkslateblue-100 w-[1440px] h-[357px]" />
        <div className="absolute top-[71px] left-[316px] text-5xl font-semibold inline-block w-[901px] h-[70px]">
          Your happily ever after starts here
        </div>
        <div className="absolute top-[202px] left-[402px] text-[24px] flex items-center w-[728px] h-[70px] text-gray-400">
          <span className="[line-break:anywhere] w-full">
            <span className="font-semibold">
              <span>Want to get in touch with us? send a</span>
              <span>{` `}</span>
            </span>
            <span className="font-extrabold text-gray-300">
              <span>message</span>
              <span className="text-gray-400">.</span>
            </span>
          </span>
        </div>
        <div className="absolute top-[259px] left-[567px] font-semibold flex items-center justify-center w-[147px] h-[43px]">
          About us
        </div>
        <div className="absolute top-[259px] left-[693px] font-semibold text-gray-500 flex items-center justify-center w-[147px] h-[43px]">
          Home
        </div>
        <div className="absolute top-[260px] left-[819px] font-semibold text-gray-600 flex items-center justify-center w-[147px] h-[43px]">
          <a href="/contacts">Contact</a>
        </div>
        <img
          className="absolute h-[7.47%] w-[2.43%] top-[75.07%] right-[10.42%] bottom-[17.46%] left-[87.15%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../vector3.svg"
        />
        <img
          className="absolute top-[261px] left-[1304px] w-10 h-10 object-cover"
          alt=""
          src="../instagram@2x.png"
        />
        <img
          className="absolute top-[261px] left-[1358px] w-10 h-10 object-cover"
          alt=""
          src="../whatsapp@2x.png"
        />
        <div className="absolute top-[139px] left-[1013px] rounded-xxl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[50px] h-[50px]" />
        <img
          className="absolute top-[149px] left-[1023px] w-[30px] h-[30px] object-cover"
          alt=""
          src="../email-send@2x.png"
        />
        <TextField
          className="[border:none] bg-[transparent] absolute top-[140px] left-[500px]"
          sx={{ width: 501 }}
          color="info"
          variant="standard"
          type="text"
          label="Enter your email"
          size="medium"
          margin="none"
        />
      </div>
    </div>
  );
};

export default LandingPage;
