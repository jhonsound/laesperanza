// ErrorComponent.js
import React from 'react';

const ErrorComponent = ({ message }) => (
    <div className="text-red-500 text-center mt-4">
        <p>{message}</p>
    </div>
);

export default ErrorComponent;
