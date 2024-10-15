// LoadingComponent.js
import React from 'react';

const LoadingComponent = () => (
    <div className="flex justify-center items-center h-full">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-blue-500 border-t-transparent" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
);

export default LoadingComponent;
