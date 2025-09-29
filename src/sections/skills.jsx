import React, { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import Oval from '../components/ovel';
import Numpy from '../assets/Numpy--Streamline-Simple-Icons.svg';
import Python from '../assets/Python_icon_(black_and_white).svg';
import Pandas from '../assets/Pandas--Streamline-Simple-Icons.svg';
import Pytorch from '../assets/Pytorch--Streamline-Simple-Icons.svg';
import Matploatlib from '../assets/Matplotlib.svg';
import Html from '../assets/HTML5.svg';
import Javascript from '../assets/js_5968292.png';
import Css from '../assets/css3-icon.svg';
import ReactLogo from '../assets/react.svg';
import Flask from '../assets/Flask.png';
import TailwindcssLogo from '../assets/Tailwind CSS.svg';
import cplusepluse from '../assets/C++ (CPlusPlus).svg';
import C from '../assets/C.svg';
import Java from '../assets/Java.svg';
import Gcloud from '../assets/Google Cloud.svg';
import JSON from '../assets/JSON.svg';

export default function Skills() {
    const glideRef = useRef(null);
    const glideInstance = useRef(null);

    useEffect(() => {
        if (glideRef.current) {
            glideInstance.current = new Glide(glideRef.current, {
                type: 'carousel',
                perView: 1,
                autoplay: 5000,
                animationTimingFunc: 'ease-in-out',
                animationDuration: 800,
            });
            glideInstance.current.mount();
            return () => glideInstance.current.destroy();
        }
    }, []);

    return (
        <div className="relative mt-10 mb-10">
            <div className="glide" ref={glideRef}>
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        {/* Slide 1 */}
                        <li className="glide__slide">
                            <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                                <div className="flex items-center gap-12">
                                    <div className="w-40 h-40">
                                        <Oval width="100%" height="100%">
                                            <img src={Python} alt="Python" className="w-20 h-20" />
                                        </Oval>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="w-16 h-16">
                                            <Oval width="100%" height="100%">
                                                <img src={Numpy} alt="Numpy" className="w-8 h-8" />
                                            </Oval>
                                        </div>
                                        <div className="w-16 h-16">
                                            <Oval width="100%" height="100%">
                                                <img src={Pandas} alt="Pandas" className="w-8 h-8" />
                                            </Oval>
                                        </div>
                                        <div className="w-16 h-16">
                                            <Oval width="100%" height="100%">
                                                <img src={Pytorch} alt="Pytorch" className="w-8 h-8" />
                                            </Oval>
                                        </div>
                                        <div className="w-16 h-16">
                                            <Oval width="100%" height="100%">
                                                <img src={Matploatlib} alt="Matplotlib" className="w-8 h-8" />
                                            </Oval>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-4 max-w-md text-center text-gray-700">
                                    Skilled in Python and its popular data science libraries like Numpy, Pandas, Pytorch, and Matplotlib.
                                </p>
                            </div>
                        </li>

                        {/* Slide 2 */}
                        <li className="glide__slide">
                            <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                                <div className="flex items-center gap-12">
                                    <div className="w-40 h-40">
                                        <Oval width="100%" height="100%">
                                            <img src={Html} alt="HTML" className="w-20 h-20" />
                                        </Oval>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="w-16 h-16">
                                            <Oval width="100%" height="100%">
                                                <img src={Javascript} alt="Javascript" className="w-8 h-8" />
                                            </Oval>
                                        </div>
                                        <div className="w-16 h-16">
                                            <Oval width="100%" height="100%">
                                                <img src={Css} alt="CSS" className="w-8 h-8" />
                                            </Oval>
                                        </div>
                                        <div className="w-16 h-16">
                                            <Oval width="100%" height="100%">
                                                <img src={ReactLogo} alt="React" className="w-8 h-8" />
                                            </Oval>
                                        </div>
                                        <div className="w-16 h-16">
                                            <Oval width="100%" height="100%">
                                                <img src={Flask} alt="Flask" className="w-8 h-8" />
                                            </Oval>
                                        </div>
                                        <div className="w-16 h-16">
                                            <Oval width="100%" height="100%">
                                                <img src={TailwindcssLogo} alt="Tailwind" className="w-8 h-8" />
                                            </Oval>
                                        </div>
                                        <div className="w-16 h-16">
                                            <Oval width="100%" height="100%">
                                                <img src={Gcloud} alt="Google Cloud" className="w-8 h-8" />
                                            </Oval>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-4 max-w-md text-center text-gray-700">
                                    Experienced with frontend and backend technologies including HTML, CSS, JavaScript, React, Flask, Tailwind CSS, and Google Cloud.
                                </p>
                            </div>
                        </li>

                        {/* Slide 3 */}
                        <li className="glide__slide">
                            <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                                <div className="flex items-center gap-12">
                                    <div className="w-40 h-40">
                                        <Oval width="100%" height="100%">
                                            <img src={cplusepluse} alt="C++" className="w-20 h-20" />
                                        </Oval>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="w-16 h-16">
                                            <Oval width="100%" height="100%">
                                                <img src={Java} alt="Java" className="w-8 h-8" />
                                            </Oval>
                                        </div>
                                        <div className="w-16 h-16">
                                            <Oval width="100%" height="100%">
                                                <img src={C} alt="C" className="w-8 h-8" />
                                            </Oval>
                                        </div>
                                        <div className="w-16 h-16">
                                            <Oval width="100%" height="100%">
                                                <img src={JSON} alt="JSON" className="w-8 h-8" />
                                            </Oval>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-4 max-w-md text-center text-gray-700">
                                    Proficient in C, C++, Java, and working knowledge of data interchange format JSON.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="glide__arrows" data-glide-el="controls">
                    <button
                        className="glide__arrow glide__arrow--left absolute left-25 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center"
                        data-glide-dir="<"
                    >
                        <Oval width="100%" height="100%">
                            <span className="text-3xl">‹</span>
                        </Oval>
                    </button>
                    <button
                        className="glide__arrow glide__arrow--right absolute right-25 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center"
                        data-glide-dir=">"
                    >
                        <Oval width="100%" height="100%">
                            <span className="text-3xl">›</span>
                        </Oval>
                    </button>
                </div>
            </div>
        </div>
    );
}
