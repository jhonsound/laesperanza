import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/learn.json'; // Update the path to your Lottie animation file

export const LearnBanner = ({ theme='unassigned' }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className="flex items-center flex-wrap justify-center">
            <div className="w-full md:w-1/3 h-auto">
                <Lottie options={defaultOptions} height="150px" width="250px" />
            </div>
            <div className="w-full flex flex-col md:w-3/5 py-4 text-left my-auto">
                <h4 className="text-lg md:text-lg text-gray-800 font-semibold">Learn English with Interactive Tools</h4>
                <p className={`${theme == "No selected yet!" ? "text-blueGray-800" : "text-emerald-500"} mt-4 text-md md:text-xl font-bold`}   >Choose your mission and let's get started</p>
            </div>
        </div>
    );
};
