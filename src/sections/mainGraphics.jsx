import React from 'react';
import Logo from '../assets/logo.png';
import GitLogo from '../assets/GitHub.png'
import MainCard from '../components/mainCard';
import Flaskimg from '../assets/Flask.png';
import JavascriptImg from '../assets/js_5968292.png';
import CssImg from '../assets/css3-icon.svg'
import PythonImg from '../assets/32px-Python_icon_(black_and_white).svg.png'
import NumpyImg from '../assets/Numpy--Streamline-Simple-Icons.svg'
import PandasImg from '../assets/Pandas--Streamline-Simple-Icons.svg'
import ProfileIcon from '../components/profileIcon';
import FeatureCard from '../components/FeatureCard';
import InstaPageImg from '../assets/insta.jpeg'
import Security from '../assets/security-guard-icon.svg'
import Medical from '../assets/medical-logo-svgrepo-com.svg'
import Automation from '../assets/automation-svgrepo-com.svg'
import Circle from '../components/circleMain';
import Wheat from '../assets/grain-wheat-icon.svg'
import Money from '../assets/banknote-icon.svg'
import GitHubCalendarComponent from '../components/GitHubCalendarComponent'

export default function MainGraphics() {
    return (
        <>
            <div className='w-full h-full flex'>
                <div className='w-screen h-screen flex relative'>
                    <MainCard>
                        <img src={Logo} alt="Logo" width={"20%"} height={"20%"} className='rotate-6 left-[15%] top-[20%] absolute' />
                        <img src={GitLogo} alt="Logo" width={"4%"} height={"4%"} className='left-[14%] bottom-[3%] absolute' />
                        <a
                            href="https://github.com/Deep6890"
                            style={{ fontSize: "1.5vw", fontWeight: 600, letterSpacing: "0.05em" }} // improved font styling
                            className="absolute left-[19%] bottom-[5%] text-black"
                        >
                            <u>https://github.com/Deep6890</u>
                        </a>
                        <img src={Flaskimg} alt="Logo" width={"9%"} height={"9%"} className='left-[60%] bottom-[43%] absolute' />
                        <img src={JavascriptImg} alt="Logo" width={"2%"} height={"2%"} className='rotate-6 left-[66%] bottom-[56%] absolute' />
                        <img src={CssImg} alt="Logo" width={"3%"} height={"3%"} className='rotate-6 left-[70%] bottom-[48%] absolute' />
                        <img src={GitLogo} alt="Logo" width={"5%"} height={"5%"} className='rotate-6 left-[67%] bottom-[33%] absolute' />
                        <img src={PythonImg} alt="Logo" width={"3%"} height={"3%"} className='rotate-6 left-[75%] bottom-[40%] absolute' />
                        <img src={NumpyImg} alt="Logo" width={"5%"} height={"5%"} className='rotate-6 left-[69%] bottom-[58%] absolute' />
                        <img src={PandasImg} alt="Logo" width={"7%"} height={"7%"} className='rotate-6 left-[76%] bottom-[51%] absolute' />
                    </MainCard>
                    <MainCard />

                    <ProfileIcon />


                    <MainCard positionClass='bottom-[-15%] right-[-5%]' width='40%' radius='2vw'>
                        <img
                            src={InstaPageImg}
                            alt="Logo"
                            width="90%"
                            height="90%"
                            style={{ borderRadius: "2vw" }}   // valid inline style
                            className="rotate-0 right-[6%] bottom-[3.8%] absolute"
                        />
                    </MainCard>

                    {/* Circles aligned and rotated with grey bar */}
                    <FeatureCard positionClass="bottom-[17%] left-[3%]" radius='3vw' style={{ width: '60%', height: '60%', position: 'relative' }}>
                        <Circle positionClass="absolute left-[8%] top-1/2 transform -translate-y-1/2" style={{ width: "7vw", height: "7vw", borderRadius: "3.5vw" }}>
                            <img src={Security} alt='Logo' width={"80%"} height={"80%"} style={{ padding: "0.5vw" }} />
                        </Circle>
                        <Circle positionClass="absolute left-[26.5%] top-1/2 transform -translate-y-1/2" style={{ width: "7vw", height: "7vw", borderRadius: "3.5vw" }}>
                            <img src={Medical} alt='Logo' width={"80%"} height={"80%"} style={{ padding: "0.5vw" }} />
                        </Circle>
                        <Circle positionClass="absolute left-[45%] top-1/2 transform -translate-y-1/2" style={{ width: "7vw", height: "7vw", borderRadius: "3.5vw" }}>
                            <img src={Automation} alt='Logo' width={"80%"} height={"80%"} style={{ padding: "0.5vw" }} />
                        </Circle>
                        <Circle positionClass="absolute left-[63.5%] top-1/2 transform -translate-y-1/2" style={{ width: "7vw", height: "7vw", borderRadius: "3.5vw" }}>
                            <img src={Wheat} alt='Logo' width={"80%"} height={"80%"} style={{ padding: "0.5vw" }} />
                        </Circle>
                        <Circle positionClass="absolute left-[82%] top-1/2 transform -translate-y-1/2" style={{ width: "7vw", height: "7vw", borderRadius: "3.5vw" }}>
                            <img src={Money} alt='Logo' width={"80%"} height={"80%"} style={{ padding: "0.5vw" }} />
                        </Circle>
                    </FeatureCard>
                    <FeatureCard
                        height="35%"
                        width="60%"
                        positionClass="bottom-[-22%] left-[-5.2%]"
                        radius='1.3vw'
                        bg="bg-black"
                    >
                        <GitHubCalendarComponent />
                    </FeatureCard>

                </div>
            </div>
        </>
    );
}
