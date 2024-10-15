import React from 'react';
import test from '../../assets/img/test.png'; // Update the path to your Lottie animation file

export const TestBanner = ({ theme }) => {

    return (
        <div className="flex items-center flex-wrap justify-center">
            <div className="w-1/3 h-auto mr-2">
                <img
                    src={test}
                    style={{ height: '200px', width: '250px' }}
                />

            </div>
            <div className="w-full flex flex-col md:w-3/5 py-4 text-left my-auto">
                <h4 className="text-md md:text-lg text-gray-800">Muestranos que aprendiste!</h4>
                <p className={`${theme == "No selected yet!" ? "text-gray-400" : "text-emerald-500"} mt-4 text-md md:text-lg`}   >Sube los resutados de tus examenes!.</p>
            </div>
        </div>
    );
};
